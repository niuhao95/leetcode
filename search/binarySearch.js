// 二分搜索
Array.prototype.binarySearch = function (target) {
  let s = 0,
    e = this.length - 1
  while (s <= e) {
    const mid = (s + e) >> 1
    const item = this[mid]
    if (item === target) {
      return mid
    } else if (item > target) {
      e = mid - 1
    } else {
      s = mid + 1
    }
  }
  return -1
}

const res = [1, 2, 3, 4, 5].binarySearch(0);
console.log(res)