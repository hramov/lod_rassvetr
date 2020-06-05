<?php

namespace App\Http\Controllers;
use App\User;
use Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
class RegController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['register']]);
    }

    public function register(Request $request){

        $userData = array(
            'name'      => $request['name'],
            'email'     =>  $request['email'],
            'password'  =>  Hash::make($request['password']),
        );

        //save to DB user details
        $user = User::create($userData);

        if($user) {
            //return success  message
            return Response::json(array(
                'success' => true,
                'user_id' => $user->id
            ));
        }
    }
}
