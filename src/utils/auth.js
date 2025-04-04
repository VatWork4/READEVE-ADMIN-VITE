const TOKEN_KEY = "token";
const TIMESTAMP_KEY = "login_timestamp";

export const isAuthenticated = () => {
  return !!localStorage.getItem(TOKEN_KEY);
};

export const login = (token) => {
  const now = Date.now().toString();
  localStorage.setItem("token", token);
  localStorage.setItem("login_timestamp", now);
  return true;
};

export const logout = async () => {
  const token = localStorage.getItem("token");
  if (!token) return;

  try {
    await fetch(`${import.meta.env.VITE_API_URL}/adminreadeve/logoutadmin`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    });
  } catch (err) {
    console.error("Logout error", err);
  }

  localStorage.removeItem("token");
  localStorage.removeItem("login_timestamp");
  window.location.reload();
};

export const setupAuthListener = () => {
  window.addEventListener("storage", (event) => {
    if (event.key === "login_timestamp") {
      const current = localStorage.getItem("login_timestamp");
      if (event.newValue !== current) {
        alert("บัญชีนี้ถูกใช้งานจากอุปกรณ์อื่น ระบบจะออกจากระบบอัตโนมัติ");
        logout(); // logout ตัวเอง
      }
    }
  });
};
