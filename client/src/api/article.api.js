import api from "./axios";

export const getArticles = () =>
  api.get("/articles");

export const getArticleBySlug = (slug) =>
  api.get(`/articles/${slug}`);

export const createArticle = (data) =>
  api.post("/articles", data);

export const updateArticle = (slug, data) =>
  api.put(`/articles/${slug}`, data);

export const deleteArticle = (slug) =>
  api.delete(`/articles/${slug}`);

export const getMyArticles = () =>
  api.get("/my-articles");

export const getArticleForEdit = (slug) =>
  api.get(`/articles/${slug}/edit`);
