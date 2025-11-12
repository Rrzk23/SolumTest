# A. Mystic Waves

**Language:** Python 3

## Dependencies
- Python 3.8+

### How to run
```bash
python3 a.py < input.txt
```

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
docker build -t mystic-waves .
```

Run with sample input (Unix/macOS):
```bash
cat sample_input_a.txt | docker run -i mystic-waves
# or
echo -e "4\n1 4\n2 5\n3 6\n4 7" | docker run -i mystic-waves
```

Run with sample input (Windows PowerShell):
```powershell
Get-Content sample_input_a.txt | docker run -i mystic-waves
# or
$data = @(
  "4"
  "1 4"
  "2 5"
  "3 6"
  "4 7"
)
$data -join "`n" | docker run -i mystic-waves
```

**Input format**
- First line: integer `t` (number of test cases)
- Next `t` lines: two integers `x n`

**Logic**
The sum of `x, -x, x, -x, ...` (n terms) is:
- return`x` if `n` is odd
- return `0` if `n` is even