<?php

use App\Http\Controllers\Api\ArticleController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::middleware('auth:sanctum')->get('/me', [AuthController::class, 'me']);
// Route::middleware('auth:sanctum')->post('/logout', [AuthController::class, 'logout']);

Route::middleware('auth:sanctum')->post('/logout', [AuthController::class, 'logout']);


Route::get('/ping', function () {
    return response()->json(['message' => 'API OK']);
});

Route::middleware('auth:sanctum')->get(
    '/my-articles',
    [ArticleController::class, 'userArticles']
);
Route::middleware('auth:sanctum')->get(
    '/articles/{slug}/edit',
    [ArticleController::class, 'edit']
);



Route::get('/articles/{slug}', [ArticleController::class, 'show']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/articles', [ArticleController::class, 'index']);
    Route::post('/articles', [ArticleController::class, 'store']);
    Route::put('/articles/{article}', [ArticleController::class, 'update']);
    Route::delete('/articles/{article}', [ArticleController::class, 'destroy']);
});
