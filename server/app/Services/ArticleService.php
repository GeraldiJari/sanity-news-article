<?php

namespace App\Services;

use App\Models\Article;
use App\Repositories\Article\ArticleRepositoryInterface;
use Illuminate\Support\Str;

class ArticleService
{
    public function __construct(
        protected ArticleRepositoryInterface $repository
    ) {}

    public function getAll()
    {
        return $this->repository->all();
    }

    public function create(array $data, int $userId): Article
    {
        return $this->repository->create([
            'user_id' => $userId,
            'title' => $data['title'],
            'slug' => Str::slug($data['title']) . '-' . uniqid(),
            'excerpt' => Str::limit(strip_tags($data['content']), 150),
            'content' => $data['content'],
            'is_published' => $data['is_published'] ?? false,
            'published_at' => ($data['is_published'] ?? false) ? now() : null,
        ]);
    }

    public function update(Article $article, array $data): Article
    {
        $payload = [];

        if (isset($data['title'])) {
            $payload['title'] = $data['title'];
            $payload['slug'] = Str::slug($data['title']) . '-' . uniqid();
        }

        if (isset($data['content'])) {
            $payload['content'] = $data['content'];
            $payload['excerpt'] = Str::limit(strip_tags($data['content']), 150);
        }

        if (array_key_exists('is_published', $data)) {
            $payload['is_published'] = $data['is_published'];
            $payload['published_at'] = $data['is_published'] ? now() : null;
        }

        return $this->repository->update($article, $payload);
    }

    public function delete(Article $article): bool
    {
        return $this->repository->delete($article);
    }

    public function findBySlug(string $slug, ?int $userId = null): Article
    {
        $article = $this->repository->findBySlug($slug);

        if (! $article) {
            abort(404);
        }

        // Published → semua boleh lihat
        if ($article->is_published) {
            return $article;
        }

        // Draft → hanya owner
        if ($userId && $article->user_id === $userId) {
            return $article;
        }

        // Draft + bukan owner
        abort(404);
    }
}
