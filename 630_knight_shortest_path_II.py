



class Solution:
    # @param {boolean[][]} grid a chessboard included 0 and 1
    # @return {int} the shortest path
    def shortestPath2(self, grid):
        if grid is None or len(grid) == 0 or len(grid[0]) == 0:
            return -1

        m,n = len(grid), len(grid[0])
        dp = [ [float('inf') for j in range(n)] for i in range(m)]

        dp[0][0] = 0
        for x in range(m):
            for y in range(n):
                if grid[x][y] == 0:
                    if x - 1 >= 0 and y - 2 >= 0 and dp[x - 1][y - 2] != float('inf'):
                        dp[x][y] = min(dp[x][y], dp[x - 1][y - 2] + 1)
                    if x + 1 < m and y - 2 >= 0 and dp[x + 1][y - 2] != float('inf'):
                        dp[x][y] = min(dp[x][y], dp[x + 1][y - 2] + 1)
                    if x - 2 >= 0 and y - 1 >= 0 and dp[x - 2][y - 1] != float('inf'):
                        dp[x][y] = min(dp[x][y], dp[x - 2][y - 1] + 1)
                    if x + 2 < m and y -1 >= 0 and dp[x + 2][y - 1] != float('inf'):
                        dp[x][y] = min(dp[x][y], dp[x + 2][y - 1] + 1)

        if dp[m - 1][n - 1] == float('inf'):
            return -1

        return dp[n - 1][m - 1]


def main():
    grid = [[0,0,0,0],
            [0,0,0,0],
            [0,0,0,0]]
    print(shortestPath2(grid))

    
if __name__ == '__main__':
    main()
