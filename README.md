# Web Developer Technical Test (Folders A, B, C)

This repository contains three independent tasks, each self-contained and runnable on its own.

- **A. Mystic Waves** — Python 3
- **B. CargoCraft Fleet** — Python 3
- **C. Frontend Login Page** — HTML/CSS/JS (no backend)

## Quick start

```bash
# A
cd A
python3 a.py < sample_input_a.txt  # (create your own input file)

# B
cd ../B
python3 b.py < sample_input_b.txt

# C
cd ../C
# Open index.html in your browser (no server required)
```

See the `README.md` inside each folder for details, examples, and notes.

## Dependencies

- **A (Python)**: Python 3.8+, no external packages. Install (noop):  
  ```bash
  cd A && pip install -r requirements.txt
  ```
- **B (Python)**: Python 3.8+, no external packages. Install (noop):  
  ```bash
  cd B && pip install -r requirements.txt
  ```
- **C (Frontend)**: No runtime deps. Optionally:
  ```bash
  cd C
  npm install
  npm run dev    # http://localhost:5173
  ```

### Docker quick start

**A (Mystic Waves)**
```bash
cd A
docker build -t mystic-waves .
cat sample_input_a.txt | docker run -i mystic-waves
```

**B (CargoCraft Fleet)**
```bash
cd B
docker build -t cargocraft-fleet .
cat sample_input_b.txt | docker run -i cargocraft-fleet
```
