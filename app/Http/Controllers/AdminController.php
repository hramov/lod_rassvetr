<?php

namespace App\Http\Controllers;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use Illuminate\Support\Facades\Auth;

class AdminController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }

    public function index() {
    	$user_id = Auth::user()->id;
    	
        $user = DB::table('users')->where('id', $user_id)->first();
        return response()->json(['data' => $user]);
    }
}
