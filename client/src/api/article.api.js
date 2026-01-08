import api from "./axios";

export const getArticles = () =>
  api.get("/articles");

export const getArticleBySlug = (slug) =>
  api.get(`/articles/${slug}`);
