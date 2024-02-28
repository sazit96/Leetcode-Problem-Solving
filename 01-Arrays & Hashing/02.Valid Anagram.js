var isAnagram = function (s, t) {
  let S = s.split('').sort().join('');
  let T = t.split('').sort().join('');
  if (S == T) return true;
  else return false;
};
