import axios from "axios";

export const API = axios.create({
  baseURL: `https://api.kontenbase.com/query/api/v1/ebba312e-0dae-4535-8704-65fc71bb10f0`,
});

export function setAuthorization(token) {
  if (!token) {
    delete API.defaults.headers.common;
    return;
  }
  API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}
