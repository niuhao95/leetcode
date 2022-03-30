// 最长回文子串

// 动态规划解法
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const n = s.length
  if (n < 2) return s

  const dp = Array.from({ length: n }, () => Array.from({ length: n }, () => false))

  let maxLength = 1,
    start = 0

  for (let j = 1; j < n; j++) {
    for (let i = 0; i < j; i++) {
      if (s[i] !== s[j]) {
        dp[i][j] = false
      } else {
        if (j - i < 3) {
          dp[i][j] = true
        } else {
          dp[i][j] = dp[i + 1][j - 1]
        }
      }
      if (dp[i][j] && j - i + 1 > maxLength) {
        console.log(i, j)
        start = i
        maxLength = j - i + 1
      }
    }
  }
  return s.substr(start, maxLength)
};

// 暴力解法
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const n = s.length;
  if (n < 2) return s;

  let maxLength = 1;
  let i = start = 0;

  while (i < n) {
    let a = b = i;

    while (b + 1 < n && s[b + 1] === s[i]) {
      b++;
    }
    i = b;

    while (a - 1 >= 0 && b + 1 < n && s[a - 1] === s[b + 1]) {
      a--;
      b++;
    }

    if (b - a + 1 > maxLength) {
      maxLength = b - a + 1;
      start = a;
    }
    i++;
  }

  return s.substr(start, maxLength);
};