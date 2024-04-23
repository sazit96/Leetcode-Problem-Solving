bool checkArmstrong(int n)
{
    int original = n;
    int sum = 0;
    int cnt = 0;
    while (n != 0)
    {
        cnt++;
        n = n / 10;
    }
    n = original;
    while (n != 0)
    {
        int lastDigit = n % 10;
        sum += pow(lastDigit, cnt);
        n = n / 10;
    }
    if (sum == original)
        return true;
    return false;
}
