class Solution
{
public:
    vector<long long> ans;
    long long fact(long long n)
    {
        if (n == 0)
            return 1;
        return n * fact(n - 1);
    }
    vector<long long> factorialNumbers(long long N)
    {
        for (int i = 1; i <= N; i++)
        {
            if (fact(i) <= N)
                ans.push_back(fact(i));
            else
                break;
        }
        return ans;
    }
};