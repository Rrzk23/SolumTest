'use client'
import React from "react";
import { VALID_USERS, validatePassword } from "./validators";
import { useRouter } from "next/navigation";

export default function Login() {
    const router = useRouter()
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [errors, setErrors] = React.useState<{ email?: string; password?: string; auth?: string }>({});
    
    function resetErrors() {
        setErrors({});
    }

    async function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        resetErrors();

        // ---- Field-level checks ----
        let anyError = false;
        if (!email.trim()) {
            anyError = true;
            setErrors((prev) => ({ ...prev, email: "Email must not be empty." }));
        }

        const pwCheck = validatePassword(password);
        if (!pwCheck.ok) {
            anyError = true;
            setErrors((prev) => ({
                ...prev,
                password:
                    "Password must be 8–16 chars and include upper, lower, number, and symbol.",
            }));
        }

        if (anyError) return;

        // ---- Email existence + password correctness ----
        const stored = VALID_USERS[email.trim()];
        if (!stored) {
            setErrors((prev) => ({ ...prev, email: "That email does not exist." }));
            return;
        }
        if (stored !== password) {
            setErrors((prev) => ({ ...prev, auth: "Email exists, but the password is incorrect." }));
            return;
        }
        
        if (typeof window !== "undefined") {
            window.sessionStorage.setItem("demo_logged_in_email", email.trim());
        }
        // --- go to success page
        router.push('/success')
    }
    // ---- UI helpers ----
    const pwState = validatePassword(password);

    return (
        <div className="min-h-screen w-full bg-gray-50 flex items-center justify-center px-4">
            <div className="w-full max-w-sm">
                {/* Card */}
                <div className="bg-white shadow-lg rounded-2xl p-6 md:p-7">


                    <h1 className="text-2xl font-semibold text-gray-900 text-center">Login</h1>

                    <form onSubmit={onSubmit} className="space-y-4">
                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@example.com"
                                className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
                                autoComplete="username"
                                required
                            />
                            {errors.email && (
                                <p className="mt-1 text-sm text-red-600" role="alert">
                                    {errors.email}
                                </p>
                            )}
                        </div>

                        {/* Password */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
                                autoComplete="current-password"
                                required
                                minLength={8}
                                maxLength={16}
                            />
                            {errors.password && (
                                <p className="mt-1 text-sm text-red-600" role="alert">
                                    {errors.password}
                                </p>
                            )}

                            {/* Live password checklist */}
                            <div className="mt-2 grid grid-cols-2 gap-x-3 gap-y-1 text-xs text-gray-600">
                                <span className={pwState.lengthOk ? "text-green-600" : ""}>8–16 chars</span>
                                <span className={pwState.upperOk ? "text-green-600" : ""}>Uppercase</span>
                                <span className={pwState.lowerOk ? "text-green-600" : ""}>Lowercase</span>
                                <span className={pwState.digitOk ? "text-green-600" : ""}>Number</span>
                                <span className={pwState.symbolOk ? "text-green-600" : ""}>Symbol</span>
                            </div>
                        </div>

                        {/* Auth error (email exists but pw wrong) */}
                        {errors.auth && (
                            <div className="text-sm text-red-600" role="alert">
                                {errors.auth}
                            </div>
                        )}

                        {/* Login button */}
                        <button
                            type="submit"
                            className="w-full rounded-xl bg-indigo-600 px-4 py-2.5 text-white font-medium hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition"
                        >
                            Log in
                        </button>

                        {/* Forgot password link (dummy) */}
                        <div className="text-right">
                            <a href="#" className="text-sm text-indigo-600 hover:underline">
                                Forgot password?
                            </a>
                        </div>
                    </form>

                    {/* Demo users */}
                    <div className="mt-6 rounded-xl bg-gray-50 p-3 text-xs text-gray-600">
                        <p className="font-medium text-gray-800 mb-1">Demo accounts</p>
                        <ul className="list-disc pl-5 space-y-0.5">
                            <li>test@example.com / Abcdef1!</li>
                            <li>jane.doe@example.com / Qwerty9#</li>
                            <li>admin@example.com / Admin123$</li>
                        </ul>
                    </div>

                </div>

                {/* Footer note */}
                <p className="mt-4 text-center text-xs text-gray-500">Responsive • Accessible • No backend calls</p>
            </div>
        </div>
    );
}
