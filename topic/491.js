// 递增子序列
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
  const ans = [], path = []

  const dfs = start => {
    if (path.length >= 2) {
      if (path.at(-1) < path.at(-2)) return
      ans.push([...path])
    }

    const s = new Set()
    for (let i = start; i < nums.length; i++) {
      const n = nums[i]
      if (s.has(n)) continue
      s.add(n)
      path.push(n)
      dfs(i + 1)
      path.pop()
    }
  }

  dfs(0)
  return ans
};