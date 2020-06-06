<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::middleware('auth:api')->group(function () {

    Route::get('dashboard', 'AdminController@index');
    Route::get('getLeaders', 'AdminController@getLeaders');
    Route::get('subscribe/{id}', 'AdminController@subscribe');
    Route::get('updateStatus/{id}', 'AdminController@updateStatus');
    Route::get('reload', 'AdminController@reload');
    Route::get('/getLeader/{id}', 'AdminController@getLeader');
    Route::get('/getSubs/{id}', 'AdminController@getSubs');
    Route::get('/unsubscribe/{id}', 'AdminController@unsubscribe');
    Route::get('answer/{id}/{result}', 'PollsController@getAnswer');
    Route::get('/singlePoll/{id}', 'PollsController@show');
    Route::get('/deletePoll/{id}', 'PollsController@destroy');
    Route::post('/updatePoll/{id}', 'PollsController@update');
    Route::post('/createPoll', 'PollsController@store');
    // Route::get('/getPolls', 'PollsController@index');
    // Route::get('/getClosedPolls', 'PollsController@getClosed');
    Route::post('/createPoll', 'PollsController@store');
    Route::get('/getLeaders', 'PollsController@getLeaders');
    
});

Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {

    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');
    Route::post('register', 'AuthController@register');
});
