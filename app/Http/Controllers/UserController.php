<?php

namespace App\Http\Controllers;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\AdminController;
use Illuminate\Support\Facades\Auth;


class UserController extends Controller
{
    // public function __construct()
    // {
    //     $this->middleware('auth');
    // }

    public function index() {
    	$users = User::orderBy('subs', 'desc')->get();
        return response()->json(['data' => $users]);
    }

    public function subscribe($id) {
    	$user = User::find($id);
    	$subs = $user->subs;
    	$subs += 1;
    	User::where('id', $id)->update(['subs' => $subs]);
    }
}
