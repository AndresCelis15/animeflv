<?php


use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AnimeController;

Route::get('/', [AnimeController::class, 'index']);

Route::get('/browse', function () {
    return view('browse');
});

Route::get('/login', function () {
    return view('login');
});

Route::get('/create', [AnimeController::class, 'create']);

Route::get('/anime', function () {
    return view('anime');
});

Route::get('/ver', function () {
    return view('ver');
});      
