// Utils の保持データ
export const utilsState = {
  // データ更新待機
  waitUpdate: false
}

// 指定されたIDの要素を取得する。
export const getById = (list, id) => list.reduce((ret, cur) => cur.id === id ? { ...cur } : ret, {})

// データ更新待機ステータスを有効にしてデータ処理をする。
export const waitUpdateForProc = async (state, proc) => {
  // データ更新待機開始
  state.waitUpdate = true
  try {
    await proc()
  } finally {
    // データ更新待機終了
    state.waitUpdate = false
  }
}

// 保持データをテスト用表示の構造に変換する。
export const obj2RawTree = (parent, key, val) => typeof val === 'undefined'
  ? {
    id: `${parent}_${key}`,
    name: key,
    value: 'undefined'
  }
  : typeof val === 'function'
    ? {
      id: `${parent}_${key}`,
      name: key,
      value: 'function () {...}'
    }
    : typeof val === 'symbol'
      ? {
        id: `${parent}_${key}`,
        name: key,
        value: val.toString()
      }
      : (
        typeof val === 'boolean' ||
        typeof val === 'number' ||
        typeof val === 'bigint' ||
        typeof val === 'string' ||
        !val
      ) ? {
          id: `${parent}_${key}`,
          name: key,
          value: JSON.stringify(val)
        }
        : Array.isArray(val)
          ? val.length
            ? {
              id: `${parent}_${key}`,
              name: key,
              value: `[ ${val.length} ]`,
              children: val.map((item, index) => obj2RawTree(
                `${parent}_${key}`,
                (item && item.id) ? item.id : index,
                item
              ))
            }
            : {
              id: `${parent}_${key}`,
              name: key,
              value: '[ ]'
            }
          : Object.keys(val).length
            ? {
              id: `${parent}_${key}`,
              name: key,
              value: '{...}',
              children: [...Object.keys(val).filter(item => item !== 'id' || val[item] !== key)].sort().map(
                item => obj2RawTree(
                  `${parent}_${key}`,
                  item,
                  val[item]
                )
              )
            }
            : {
              id: `${parent}_${key}`,
              name: key,
              value: '{ }'
            }
