import * as items from './items'
import * as utils from './utils'

const { itemsState, ...itemsFunctions } = items
const { utilsState, ...utilsFunctions } = utils

// Raw data ページ表示用データ
const rawTree = state => [...Object.keys(state)].sort().map(
  key => utils.obj2RawTree('', key, JSON.parse(JSON.stringify(state))[key])
)

export default {
  storeState: {
    ...itemsState,
    ...utilsState
  },
  ...itemsFunctions,
  ...utilsFunctions,
  rawTree
}
