export const AUTH_KEY = "demo_logged_in_email";

/** Returns the current "logged in" email from sessionStorage, if any. */
export function getLoggedInEmail(): string | null {
  if (typeof window === "undefined") return null;
  return window.sessionStorage.getItem(AUTH_KEY);
}

/** Sets the current "logged in" email in sessionStorage. */
export function login(email: string) {
  if (typeof window === "undefined") return;
  window.sessionStorage.setItem(AUTH_KEY, email);
}

/** Clears the current email and simulates logout on the frontend. */
export function logout() {
  if (typeof window === "undefined") return;
  window.sessionStorage.removeItem(AUTH_KEY);
}