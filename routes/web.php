<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('app');
});

// Route::post('/createPoll', 'PollsController@store');

// Route::get('/getPolls', 'PollsController@index');

// Route::get('/singlePoll/{id}', 'PollsController@show');
// Route::get('/deletePoll/{id}', 'PollsController@destroy');
// Route::post('/updatePoll/{id}', 'PollsController@update');
// Route::get('/getOptions/{id}', 'PollsController@getOptions');

Route::get('/getMyLeaders', 'AdminController@getMyLeaders');
// Route::get('/subscribe/{id}', 'UserController@subscribe');

// Route::get('/answer/{id}/{result}', 'PollsController@getAnswer');

Route::get('/getPolls', 'PollsController@index');
Route::get('/getClosedPolls', 'PollsController@getClosed');

Route::get('/getPollsEnded', 'PollsController@getPollsEnded');

Route::get('/getPollsAll', 'PollsController@getPollsAll');
Route::get('/getMyPolls', 'PollsController@getMyPolls');
Route::get('/getMyAnswers', 'PollsController@getMyAnswers');
Route::get('/show_leaders', 'AdminController@getLeaders');
Route::get('/subscribe/{id}', 'AdminController@subscribe');

Route::get('/unsubscribe/{id}', 'AdminController@unsubscribe');
Route::get('/user', 'AuthController@me');
// Route::post('me', 'AuthController@me');