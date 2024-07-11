var groupAnagram = function (strs) {
  const mp = new Map();
  const ans = [];
  for (let i = 0; i < strs.length; i++) {
    const sortStrs = strs[i].split('').sort().join('');
    if (mp.has(sortStrs)) {
      ans[mp.get(sortStrs)].push(strs[i]);
    } else {
      mp.set(sortStrs, ans.length);
      ans.push([strs[i]]);
    }
  }
  return ans;
};
