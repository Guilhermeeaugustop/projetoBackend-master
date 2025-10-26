// src/auth/authStorage.js
export function setAuth(user, remember = false) {
  const store = remember ? localStorage : sessionStorage;
  store.setItem("tw_auth", "1");
  if (user) store.setItem("tw_user", JSON.stringify(user));
}

export function isAuthed() {
  return !!(
    localStorage.getItem("tw_auth") || sessionStorage.getItem("tw_auth")
  );
}

export function getUser() {
  const raw =
    localStorage.getItem("tw_user") || sessionStorage.getItem("tw_user");
  try { return raw ? JSON.parse(raw) : null; } catch { return null; }
}

export function clearAuth() {
  ["tw_auth", "tw_user"].forEach((k) => {
    localStorage.removeItem(k);
    sessionStorage.removeItem(k);
  });
}
