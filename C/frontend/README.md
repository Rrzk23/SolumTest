# Frontend Test — Task C (Next.js, T3‑friendly)

A minimal, modern login flow implemented in **Next.js** (compatible with create‑t3‑app). No backend calls. Credentials are hardcoded for demo.

## Features
- Centered, responsive login form (email + password) with neat design.
- Validation rules:
  - Email must not be empty and must exist in a small hardcoded list.
  - Password must be **8–16** chars and include **uppercase, lowercase, number, symbol**.
  - Shows specific errors for missing email, bad password, or wrong password for existing email.
- On success, navigates to **/success** where we display `Welcome, [user email]!` and a **Logout** button.
- Purely frontend session via `sessionStorage`.

## Project Structure (relevant bits)
```
src/
  app/
    login/              # login page
    success/            # success page
  componentes/
    Login/
        Login.tsx
        validators.ts   # All the validators helpers and fake emails.
  server/
    demoauth.ts         # Fake frontend credential.
```

### Demo Accounts
- `test@example.com / Abcdef1!`
- `jane.doe@example.com / Qwerty9#`
- `admin@example.com / Admin123$`

## How to Use
1. Enter `npm run dev` and open your browser and type `http://localhost:3000/`
2. Enter one of the demo emails and a valid password matching that email.
3. If validation passes and credentials match, you’ll be redirected to `/success`.
4. On the success page, click **Logout** to clear the session and return to the login page.

## How to Test (Manual)
- **Invalid email**: leave email empty → expect `Email must not be empty.`
- **Nonexistent email**: use `foo@bar.com` with any valid password → expect `That email does not exist.`
- **Password rule failures**: try `short1!` or `NoSymbol123` → expect the combined rule error.
- **Wrong password**: `test@example.com` + wrong valid-format password → expect `Email exists, but the password is incorrect.`
- **Successful login**: `test@example.com / Abcdef1!` → expect redirect to `/success` and welcome text.
- **Direct visit /success**: open `/success` in a fresh tab → expect redirect back to `/` if user hasn't not log in yet.
