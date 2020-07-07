import * as api from './api'
import * as utils from './utils'

// 商品の保持データ
export const itemsState = {
  // 商品一覧
  items: [],
  // 編集中の商品
  activeItem: {},
  // 商品色の一覧
  itemColors: ['白', '赤', '緑', '青', '黒'],
  // 削除の確認の表示
  confirmDeleteItem: false,
  // 入力値の妥当性
  isItemValid: true
}

// 商品一覧を取得する。
export const listItems = async (state) => { state.items = [...(await api.getItems())] }

// 編集対象の商品を設定する。
export const setActiveItem = (state, id, next) => {
  const item = id === 'new' ? { id: 'new' } : utils.getById(state.items, id)
  if (item.id && state.activeItem.id !== item.id) {
    state.activeItem = item
    return next && next()
  } else if (!item.id && state.activeItem.id) {
    state.activeItem = {}
  }
  return null
}

export const setActiveItemFromRoute = (state, route, next) => {
  if (route.name === 'item') {
    return setActiveItem(state, route.params.id, next)
  } else if (state.activeItem.id) {
    state.activeItem = {}
  }
  return null
}

// 商品の削除を実行する。
export const deleteItem = (state, next) => utils.waitUpdateForProc(
  state, async () => {
    state.confirmDeleteItem = false
    await api.deleteItem(state.activeItem)
    state.activeItem = {}
    // 商品一覧を取得する。
    await listItems(state)
    return next && next()
  })

// 商品の新規登録または更新を実行する。
export const saveItem = (state, next) => utils.waitUpdateForProc(
  state, async () => {
    // 入力値を新規登録または更新する。
    if (state.activeItem.id === 'new') {
      await api.postItem(state.activeItem)
    } else {
      await api.putItem(state.activeItem)
    }
    state.activeItem = {}
    // 商品一覧を取得する。
    await listItems(state)
    return next && next()
  })

// 商品名の入力値チェック
export const validateItemName = [
  v => !!v || '入力必須です。'
]

// 商品の色の入力値チェック
export const validateItemColor = [
  v => !!v || '入力必須です。'
]

// 商品サイズの入力値チェック
export const validateItemLength = [
  v => !!v || '入力必須です。',
  v => v > 0 || '0 cm より大きな値を入力してください。',
  v => v <= 100 || '100 cm 以下の値を入力してください。'
]
