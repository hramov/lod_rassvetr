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
    	$user = User::where('id', Auth::user()->id)->get();
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
        // else if ($user_status == 3) {
        //     $status = "global_leader";   
        // }
        $users = User::where('id', '<>', Auth::user()->id)->orderBy('weight', 'desc')->get();
        return response()->json(['data' => $users, 'status' => $status]);
    }

    public function subscribe($id) {
        if ($id != Auth::user()->id) {

            $user = User::find(Auth::user()->id);
            $leader = User::find($id);

            if($user->status == 1) {
                if ($leader->weight == null) {
                    $leader->weight = 0;
                }
                $leader->weight += 1;
                $leader->status = 2;
                User::where('id', $id)->update(['weight' => $leader->weight, 'status' => $leader->status]);

                $user->status = 0;
                $user->weight = 0;
            }
            else if ($user->status == 2) {
                if ($user->weight == null) {
                    $user->weight = 0;
                }
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
            return response()->json(['status' => $user->status]);
        }

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

    public function getMyLeaders() {
        try {
            $leader_id = Users_rel::where('pleb_id', Auth::user()->id)->get()->first()->leader_id;
            $leader = User::where('id', $leader_id)->get();
            return response()->json(['leader' => $leader]);
        } catch(Exception $e) {
            // return $e->getMessage();
        }
    }

    public function getSubs($id) {
        $users_id = Users_rel::where('leader_id', $id)->get();

        $subs_array = [];
        $status = "unsubscribe";

        for ($i = 0; $i < count($users_id); $i++) {
            $subs = User::where('id', $users_id[$i]->pleb_id)->get();

            if($users_id[$i]->pleb_id == Auth::user()->id) {
                $status = 'subscriber';
            }

            array_push($subs_array, $subs);
        }   
        return response()->json(['subs_array' => $subs_array, 'status' => $status]);
    }

    public function unsubscribe($id) {
        if ($id != Auth::user()->id) {
            DB::table('users_rels')->where('pleb_id', Auth::user()->id)->delete();

            $user = User::where('id', Auth::user()->id)->get()->first();
            $leader = User::where('id', $id)->get()->first();

            $user->weight = 1;
            $user->status = 1;

            $leader->weight -= 1;
            
            // if($user->status == 0) {
            //     $user->status = 1;
            //     $user->weight = 1;

            //     if ($leader->weight == null) {
            //         $leader->weight = 0;
            //     }

            //     $leader->weight -= 1;

            //     if ($leader->weight < 2) {
            //         $leader->status = 1;
            //     }
            // }
            // else if ($user->status == 2) {
            //     if ($user->weight == null) {
            //         $user->weight = 0;
            //     }
            //     $user->weight += 1;
            //     $leader->weight -= $user->weight;
            // }

            // $user->isSub = 0;
            
            $subs_rows = count(Users_rel::where('leader_id', $id)->get());
            if ($subs_rows == 0) {
                $leader->status = 1;
                $leader->weight = 1;
            }

            User::where('id', $id)->update(['weight' => $leader->weight, 'status' => $leader->status]);
            User::where('id', Auth::user()->id)->update(['weight' => $user->weight, 'status' => $user->status, 'issub' => $user->issub]);
        }   
    }
}
