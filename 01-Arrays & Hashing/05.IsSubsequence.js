function isSubsequence(s, t) {
  if (s == t) return true;
  if (s.length == t.length) return false;
  let sub = 0;
  for (let i = 0; i < t.length && sub < s.length; i++) {
    if (s[sub] == t[i]) sub++;
  }
  return sub == s.length;
}
