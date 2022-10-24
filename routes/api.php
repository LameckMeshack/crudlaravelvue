<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('post/create', 'PostController@store');
Route::post('post/{post}/update', 'PostController@update');
Route::get('post/{post}', 'PostController@show');
Route::delete('post/{post}', 'PostController@destroy');
Route::get('posts', 'PostController@index');


