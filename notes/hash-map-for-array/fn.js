
// [ { a:1, b:2, c:3 }， { a:1111, b:2, c:3 } ]
// 
// ['c']
// { c:1 }
// 
// c
// [{a:1, b:2}]

const mapByArray = (originData, hiddenList) => {
  let isEnd
  let output = []
  originData.forEach(obj => { // O(n)
    if (isEnd) return
    let object = {}
    for (var k in obj) { // 2
      if (hiddenList.indexOf(k) !== -1) continue 
      object[k] = obj[k]
    }
    // 如果首次遍历即没有任何键值, 无需继续遍历
    if (!Object.keys(object).length) {
      isEnd = true
      return
    }
    output.push(object)
  })
  return output
}

const mapByHash = (originData, hash) => {
  let isEnd
  let output = []
  originData.forEach(obj => {
    if (isEnd) return
    let object = {}
    for (var k in obj) {
      if (hash[k] !== undefined) continue // O(1)
      object[k] = obj[k]
    }
    if (!Object.keys(object).length) {
      isEnd = true
      return
    }
    output.push(object)
  })
  return output
}