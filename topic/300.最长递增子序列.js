// 最长递增子序列

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const ans = [nums[0]]

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > ans[ans.length - 1]) {
      ans.push(nums[i])
    } else {
      let l = 0, r = ans.length - 1, mid
      while (l < r) {
        mid = l + r >> 1
        if (ans[mid] < nums[i]) l = mid + 1
        else r = mid
      }
      ans[l] = nums[i]
    }
  }

  return ans.length
};