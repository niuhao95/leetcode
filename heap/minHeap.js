// 最小堆
class MinHeap {
  constructor() {
    this.heap = []
  }
  // 插入元素
  insert(value) {
    this.heap.push(value)
    this.shiftUp(this.heap.length - 1)
  }
  // 上移
  shiftUp(index) {
    if (index === 0)
      return
    const parentIndex = this.getParentIndex(index)
    if (this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex, index)
      this.shiftUp(parentIndex)
    }
  }
  // 获取 父节点 索引
  getParentIndex(i) {
    return (i - 1) >> 1
  }
  // 弹出堆顶元素
  pop() {
    const top = this.peek()
    this.heap[0] = this.heap.pop()
    this.shiftDown(0)
    return top
  }
  // 返回堆顶元素
  peek() {
    return this.heap[0]
  }
  // 下移
  shiftDown(index) {
    const leftIndex = this.getLeftIndex(index)
    const rightIndex = this.getRightIndex(index)
    if (this.heap[leftIndex] < this.heap[index]) {
      this.swap(leftIndex, index)
      this.shiftDown(leftIndex)
    }
    if (this.heap[rightIndex] < this.heap[index]) {
      this.swap(rightIndex, index)
      this.shiftDown(rightIndex)
    }
  }
  // 获取 左子节点 索引
  getLeftIndex(i) {
    return i * 2 + 1
  }
  // 获取 右子节点 索引
  getRightIndex(i) {
    return i * 2 + 2
  }
  // 返回堆大小
  size() {
    return this.heap.length
  }
  // 交换元素
  swap(a, b) {
    const temp = this.heap[a]
    this.heap[a] = this.heap[b]
    this.heap[b] = temp
  }
}