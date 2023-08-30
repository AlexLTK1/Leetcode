class Solution:
    def calPoints(self, operations: List[str]) -> int:
        result = []

        for i in operations:
            if i == "D":
                result.append(result[-1]*2)
            elif i == "C":
                result.pop()
            elif i == "+":
                result.append(result[-2] + result[-1])
            else:
                result.append(int(i))
        
        return sum(result)