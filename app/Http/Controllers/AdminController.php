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
        $user = User::find(Auth::user()->id);
        $leader = User::find($id);

        if($user->status == 1) {
            $leader->weight += ($user->weight);
            $leader->status = 2;
            User::where('id', $id)->update(['weight' => $leader->weight, 'status' => $leader->status]);

            $user->status = 0;
            $user->weight = 0;
        }
        else if ($user->status == 2) {
            $leader->weight += $user->weight;
            $leader->status = 3;
            User::where('id', $id)->update(['weight' => $leader->weight, 'status' => $leader->status]);
        }

        $user->issub = 1;
        User::where('id', Auth::user()->id)->update(['weight' => $user->weight, 'status' => $user->status, 'issub' => $user->issub]);

        //users_rels
        $users_rel = new Users_rel();
        $users_rel->leader_id = $id;
        $users_rel->pleb_id = $user->id;
        $users_rel->save();
        //

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
        $status = "";
        
        if (count($users_id) == 0) {
            $status = 'nsubscriber';
        }

        for ($i = 0; $i < count($users_id); $i++) {
            $subs = User::where('id', $users_id[$i]->pleb_id)->get();

            if($users_id[$i]->pleb_id == Auth::user()->id) {
                $status = 'subscriber';
            }
            else {
                $status = 'nsubscriber';
            }

            array_push($subs_array, $subs);
        }   
        return response()->json(['subs_array' => $subs_array, 'status' => $status]);
    }

    public function unsubscribe($id) {

        DB::table('users_rels')->where('pleb_id', Auth::user()->id)->delete();

        $user = User::where('id', Auth::user()->id)->get();
        $leader = User::where('id', $id)->get();

        if($user->status == 0) {
            $user->status = 1;
            $user->weight = 1;
            $user->isSub = 0;
            User::where('id', Auth::user()->id)->update(['weight' => $user->weight, 'status' => $user->status, 'issub' => $user->issub]);
        }
        else if ($user->status == 2) {
            
        }
            
        //     $subs_rows = Users_rel::where('leader_id', $id)->get();
        //     if (count($subs_rows) == 0) {
        //         $leader->status = 1;
        //         $leader->weight = 1;
        //         $status = 'ordinary';
        //     }
        //     else {
        //         $leader->weight -= 1;
        //     }    
        // }
        // else if ($user->status == 2) {

        // }

        // else if($user->status == 2) {
        //     $subs_rows = Users_rel::where('leader_id', $id)->get();
        //     $pleb_subs_rows = Users_rel::where('leader_id', Auth::user()->id)->get();
            
        //     if (count($subs_rows) == 0)
        //     {
        //         $user->status = 1;
        //         $leader->weight = 1;
        //     }
        //     else {
        //         $user->weight -= count($pleb_subs_rows);
        //     }
        // }   

        // User::where('id', Auth::user()->id)->update(['status' => $user->status, 'weight' => $user->subs]);
        
        // if ($leader->subs == 0) {
        //     $leader->status = 1;
        // }

        // $leader->subs -= 1;

    }

}
