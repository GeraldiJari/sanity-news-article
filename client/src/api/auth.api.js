import api from "./axios";

export const login = (data) =>
  api.post("/login", data);

export const register = (data) =>
  api.post("/register", data);

export const me = () =>
  api.get("/me");

export const logout = () =>
  api.post("/logout");
