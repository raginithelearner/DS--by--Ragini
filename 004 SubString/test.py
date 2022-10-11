class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        def check(start, end):
            chars = set()
            for i in range(start, end + 1):
                c = s[i]
                if c in chars:
                    return False
                chars.add(c)
            return True
        res = 0
        for i in range(len(s)):
            for j in range(i, len(s)):
                if check(i, j):
                    res = max(res, j - i + 1)
                print(j - (i + 1))

        return res
obj = Solution()
obj = obj.lengthOfLongestSubstring("nikhil")