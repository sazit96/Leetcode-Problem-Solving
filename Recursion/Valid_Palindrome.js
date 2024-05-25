var isPalindrome = function (s) {
  function cleanString(str) {
    return str.replace(/[^0-9a-z]/gi, '').toLowerCase();
  }
  function chackPalindrome(str, left, right) {
    if (left >= right) return true;
    if (str[left] !== str[right]) return false;
    return chackPalindrome(str, left + 1, right - 1);
  }
  const cleanedStr = cleanString(s);
  return chackPalindrome(cleanedStr, 0, cleanedStr.length - 1);
};
