<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\ArticleService;
use App\Models\Article;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class ArticleController extends Controller
{

    use AuthorizesRequests;

    public function __construct(
        protected ArticleService $service
    ) {}

    public function index()
    {
        return response()->json($this->service->getAll());
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'title' => 'required|string',
            'content' => 'required|string',
            'is_published' => 'boolean',
        ]);

        $article = $this->service->create(
            $data,
            $request->user()->id
        );

        return response()->json($article, 201);
    }

    public function update(Request $request, Article $article)
    {
        $this->authorize('update', $article);

        $data = $request->validate([
            'title' => 'sometimes|string',
            'content' => 'sometimes|string',
            'is_published' => 'boolean',
        ]);

        $updated = $this->service->update($article, $data);

        return response()->json($updated);
    }

    public function edit(Request $request, string $slug)
    {
        $article = $this->service->findBySlug(
            $slug,
            $request->user()->id
        );

        return response()->json($article);
    }


    public function destroy(Article $article)
    {
        $this->authorize('delete', $article);

        $this->service->delete($article);

        return response()->json(['message' => 'Article deleted']);
    }

    public function show(Request $request, string $slug)
    {
        $userId = $request->user()?->id;

        $article = $this->service->findBySlug($slug, $userId);

        return response()->json($article);
    }

    public function userArticles(Request $request)
    {
        $userId = $request->user()->id;
        $articles = $this->service->getMyArticle($userId);

        return response()->json($articles);
    }

}
