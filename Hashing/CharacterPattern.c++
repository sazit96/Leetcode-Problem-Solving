#include <bits/stdc++.h>
using namespace std;

int main()
{
    string s;
    cin >> s;

    // pre compute
    int hash[26] = {0}; // this is work for small character / if need for all character then give 256 hear
    for (int i = 0; i < s.size(); i++)
    {
        hash[s[i] - 'a']++; // hear no need to give - 'a'
    }

    int q;
    cin >> q;
    while (q--)
    {
        char c;
        cin >> c;
        cout << hash[c - 'a'] << endl; // hear no need to give - 'a'
    }
}