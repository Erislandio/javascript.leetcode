/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  const list = list1 ?? [];

  for (let index = 0; index < list2.length; index++) {
    list[list1.length + index + 1] = list2[index];
  }

  return list.sort().filter(Boolean);
};
