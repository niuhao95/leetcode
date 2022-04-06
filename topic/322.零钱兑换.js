// 322. 零钱兑换

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const dp = Array.from({ length: amount + 1 }, _ => amount + 1)
  dp[0] = 0
  for (let i = 0; i < dp.length; i++) {
    let min = dp[i] // 金额i所需硬币数量
    coins.forEach(n => {
      if (n <= i) {
        min = Math.min(min, dp[i - n] + 1)
      }
    })
    dp[i] = min
  }
  return dp[amount] === amount + 1 ? -1 : dp[amount]
};