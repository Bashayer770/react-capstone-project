export const storage = {
  getToken: () => window.localStorage.getItem("token") || `null`,
  setToken: (value) => window.localStorage.setItem("token", value),
  clearToken: () => window.localStorage.removeItem("token"),
};
