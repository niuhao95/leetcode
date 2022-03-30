// 合并k个升序链表
// https://github.com/datastructures-js/priority-queue

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  // result point
  let ret = new ListNode(0), p = ret

  // queue
  const q = new MinPriorityQueue({
    priority: node => node.val
  })

  lists.forEach(node => node && q.enqueue(node))

  while (q.size()) {
    const min = q.dequeue().element
    p.next = min
    p = p.next
    min.next && q.enqueue(min.next)
  }

  return ret.next
};