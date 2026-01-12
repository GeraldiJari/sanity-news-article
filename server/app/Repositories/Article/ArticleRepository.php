<?php

namespace App\Repositories\Article;

use App\Models\Article;
use Illuminate\Support\Collection;

class ArticleRepository implements ArticleRepositoryInterface
{
    public function all(): Collection
    {
        return Article::latest()->get();
    }

    public function findById(int $id): ?Article
    {
        return Article::find($id);
    }

    public function create(array $data): Article
    {
        return Article::create($data);
    }

    public function update(Article $article, array $data): Article
    {
        $article->update($data);
        return $article;
    }

    public function delete(Article $article): bool
    {
        return $article->delete();
    }

    public function findBySlug(string $slug): ?Article
    {
        return Article::where('slug', $slug)->first();
    }
    public function getByUser(int $userId)
    {
        return Article::where('user_id', $userId)
            ->latest()
            ->get();
    }
}
