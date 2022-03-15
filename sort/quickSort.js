// 快排
Array.prototype.quickSort = function () {
  const rec = (arr) => {
    if (arr.length <= 1)
      return arr

    const left = []
    const right = []
    const target = arr.shift()

    arr.forEach(i => {
      if (i > target)
        right.push(i)
      else
        left.push(i)
    })
    return [...rec(left), target, ...rec(right)]
  }

  rec(this).forEach((i, idx) => this[idx] = i)
}

const res = [2, 4, 5, 3, 1].quickSort();
console.log(res)