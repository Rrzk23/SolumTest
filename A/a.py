#!/usr/bin/env python3
# Mystic Waves — Problem A
# Reads t test cases of (x, n). The sequence x, -x, x, -x, ... (n terms) sums to:
#   x if n is odd, 0 if n is even.

import sys

def total_energy(x: int, n: int) -> int:
    return x if (n % 2 == 1) else 0

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
            x = int(next(it)); n = int(next(it))
        except StopIteration:
            break
        out_lines.append(str(total_energy(x, n)))
    sys.stdout.write("\n".join(out_lines))

if __name__ == "__main__":
    main()
