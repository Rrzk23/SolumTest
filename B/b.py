#!/usr/bin/env python3
# CargoCraft Fleet — Problem B
# Given total propulsion units n formed by crafts of 4 or 6 units,
# print "min max" number of crafts, or -1 if impossible.
# Works in O(1) per test case for n up to 1e18.

import sys

def solve_case(n: int):
    # Infeasible totals
    if n % 2 == 1 or n < 4:
        return None

    # Maximum number of crafts
    if n % 4 == 0:
        mx = n // 4
    else:
        # n % 4 == 2
        if n < 6:
            return None  # the only case here would be n == 2 (already blocked above)
        mx = (n - 6) // 4 + 1

    # Minimum number of crafts
    m = n // 6
    r = n % 6
    if r == 0:
        mn = m
    elif r == 2:
        if m >= 1:
            mn = m + 1  # replace one 6 with two 4s -> +1 craft
        else:
            return None  # n == 2 (already excluded)
    else:  # r == 4
        mn = m + 1

    return mn, mx

def main() -> None:
    data = sys.stdin.read().strip().split()
    if not data:
        return
    it = iter(data)
    try:
        t = int(next(it))
    except StopIteration:
        return
    out_lines = []
    for _ in range(t):
        try:
            n = int(next(it))
        except StopIteration:
            break
        ans = solve_case(n)
        if ans is None:
            out_lines.append("-1")
        else:
            mn, mx = ans
            out_lines.append(f"{mn} {mx}")
    sys.stdout.write("\n".join(out_lines))

if __name__ == "__main__":
    main()
