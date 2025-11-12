// Expect password : string
// return boolean state of each conditions
export function validatePassword(pw: string) {
// 8–16 chars, at least 1 upper, 1 lower, 1 digit, 1 symbol
const lengthOk = pw.length >= 8 && pw.length <= 16;
const upperOk = /[A-Z]/.test(pw);
const lowerOk = /[a-z]/.test(pw);
const digitOk = /\d/.test(pw);
const symbolOk = /[^A-Za-z0-9]/.test(pw);
return { lengthOk, upperOk, lowerOk, digitOk, symbolOk, ok: lengthOk && upperOk && lowerOk && digitOk && symbolOk };
}

// Valid users record
export const VALID_USERS: Record<string, string> = {
"test@example.com": "Abcdef1!",
"jane.doe@example.com": "Qwerty9#",
"admin@example.com": "Admin123$",
};