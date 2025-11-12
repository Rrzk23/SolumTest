# B. CargoCraft Fleet

**Language:** Python 3

## Dependencies
- Python 3.8+
- No third‑party packages required (stdlib only).
- (Optional but recommended) Use `pip` with a no-op `requirements.txt` for consistency.

### If you don't have `pip`
Try one of the following, depending on your OS:

**Windows**
```powershell
py -m ensurepip --upgrade
py -m pip install --upgrade pip
```
If `py` is not found, try:
```powershell
python -m ensurepip --upgrade
python -m pip install --upgrade pip
```

**macOS (Homebrew Python)**
```bash
# If Python 3 is not installed:
brew install python
# If pip is missing for an existing Python:
python3 -m ensurepip --upgrade
python3 -m pip install --upgrade pip
```

**Debian/Ubuntu**
```bash
sudo apt update
sudo apt install -y python3 python3-pip
# or, if Python is present but pip is missing:
python3 -m ensurepip --upgrade
python3 -m pip install --upgrade pip
```

**Fedora/RHEL**
```bash
sudo dnf install -y python3-pip
python3 -m pip install --upgrade pip
```

**Arch/Manjaro**
```bash
sudo pacman -S --needed python python-pip
python3 -m pip install --upgrade pip
```

Once `pip` is available, from this folder:
```bash
pip install -r requirements.txt   # installs nothing; stdlib only
```


## Docker

Build the image:
```bash
docker build -t cargocraft-fleet .
```

Run with sample input (Unix/macOS):
```bash
cat sample_input_b.txt | docker run -i cargocraft-fleet
# or
echo -e "4\n4\n7\n24\n998244353998244352" | docker run -i cargocraft-fleet
```

Run with sample input (Windows PowerShell):
```powershell
Get-Content sample_input_b.txt | docker run -i cargocraft-fleet
# or
$data = @(
  "4"
  "4"
  "7"
  "24"
  "998244353998244352"
)
$data -join "`n" | docker run -i cargocraft-fleet
```

**Input format**
- First line: integer `t` (number of test cases)
- Next `t` lines: one integer `n` (total propulsion units)

**Output**
- For each test case: `min max` crafts, or `-1` if impossible.

### Method
- Feasible if and only if `n` is even and `n >= 4`.
- **Max crafts**: favor 4-unit crafts (more crafts).
  - If `n % 4 == 0` → `n // 4`
  - Else (`n % 4 == 2`) → one 6-unit craft plus the rest 4s: `(n - 6) // 4 + 1`
- **Min crafts**: favor 6-unit crafts (fewer crafts), then adjust with 4s.
  - Write `n = 6m + r` with `r ∈ {0, 2, 4}`.
  - If `r == 0` → `m`
  - If `r == 2` → `m + 1` (replace a 6 by two 4s)
  - If `r == 4` → `m + 1` (Adding a 4)
