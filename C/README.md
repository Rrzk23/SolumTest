# C. Frontend Test — Login Page

**Stack:** Plain HTML, CSS, and JavaScript (no backend).

### How to run
Simply open `index.html` in your browser (double-click or drag into a tab). No build step required.

### Features
- Centered, responsive login card.
- Validation:
  - Email must not be empty; must exist in a small hardcoded list.
  - Password must be 8–16 chars and include at least one uppercase, lowercase, digit, and symbol.
  - Shows specific error messages.
- On success:
  - Hides the form and shows a welcome screen with the user’s email and a **Log out** button.
- Extras:
  - “Show/Hide password” toggle.
  - “Forgot password?” link (demo alert).
- Clean, modern styling with accessible labels and error regions.

### Sample credentials
- `test@example.com` / `Test@1234`
- `dev@acme.io` / `A1b2c3d!`

## Dependencies
- **No runtime dependencies required** (open `index.html` directly).
- **Optional**: use a local dev server for better caching/headers.
  ```bash
  cd C
  npm install
  npm run dev   # serves at http://localhost:5173
  ```
  Requires Node.js >= 18.
