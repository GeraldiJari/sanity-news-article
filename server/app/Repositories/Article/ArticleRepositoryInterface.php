<?php

namespace App\Repositories\Article;

use App\Models\Article;
use Illuminate\Support\Collection;

interface ArticleRepositoryInterface
{
    public function all(): Collection;
    public function findById(int $id): ?Article;
    public function create(array $data): Article;
    public function update(Article $article, array $data): Article;
    public function delete(Article $article): bool;
    public function findBySlug(string $slug): ?Article;

}
