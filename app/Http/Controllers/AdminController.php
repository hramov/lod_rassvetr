<?php

namespace App\Http\Controllers;
use App\User;
use App\Users_rel;
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

    public function getLeaders() {
        $user_status = User::find(Auth::user()->id)->status;
        $status = "";
        if ($user_status == 0) {
            $status = "subscriber";
        }
        else if ($user_status == 1) {
            $status = "ordinary";
        }
        else if ($user_status == 2) {
            $status = "leader";
        }
        else if ($user_status == 2) {
            $status = "global_leader";   
        }
        $users = User::where('id', '<>', Auth::user()->id)->orderBy('subs', 'desc')->get();
        return response()->json(['data' => $users, 'status' => $status]);
    }

    public function subscribe($id) {
        $user = User::find($id);
        $subs = $user->subs;
        $subs += 1;
        User::where('id', $id)->update(['subs' => $subs]);
        $user = User::find($id);
        $user_status = $user->status;
        
        if($user_status == 1) {
            $user_status += 1;
            User::where('id', $id)->update(['status' => $user_status]);
            
            $users_rel = new Users_rel();
            $users_rel->leader_id = $id;
            $users_rel->pleb_id = Auth::user()->id;
            $users_rel->save();
        }



        $weight = User::find($id)->weight;
        $weight += 1;
        User::where('id', $id)->update(['weight' => $weight]);

        $user = User::find(Auth::user()->id);
        $user_status = $user->status;

        if($user_status == 1) {
            $user_status -= 1;
            User::where('id', Auth::user()->id)->update(['status' => $user_status]);
        }

        $weight = User::find(Auth::user()->id)->weight;
        $weight -= 1;
        User::where('id', Auth::user()->id)->update(['weight' => $weight]);
    }

    public function reload() {
        User::where('id', '>', 0)->update(['status' => 1, 'weight' => 1]);
    }

    public function getLeader($id) {
        $user = User::where('id', $id)->get();
        // var_dump($user);
        // $user = User::find($id);
        return response()->json(['user' => $user]);
    }

    public function getSubs($id) {
        $users_id = Users_rel::where('leader_id', $id)->get();
        $subs_array = [];

        for ($i = 0; $i < count($users_id); $i++) {
            $subs = User::where('id', $users_id[$i]->pleb_id)->get();
            array_push($subs_array, $subs);
        }   
        return response()->json(['subs_array' => $subs_array]);
    }

}
