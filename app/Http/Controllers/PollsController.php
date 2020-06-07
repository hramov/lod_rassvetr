<?php

namespace App\Http\Controllers;
use App\Poll;
use App\Answer;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PollsController extends Controller
{
    public function __construct()
    {
        // $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $polls = DB::table('polls')->order_by('name', 'asc')->get();
        $polls = DB::table('polls')->orderBy('id', 'desc')->limit(4)->get();

        return response()->json(['polls' => $polls]);
    }

    public function getClosed() {
        $polls = DB::table('polls')->where('isend', 1)->limit(4)->get();

        return response()->json(['polls' => $polls]);
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $poll = new Poll;

        $poll->title = $request->title;
        $poll->description = $request->description;
        $poll->content = $request->content;
        $poll->yes = 0;
        $poll->no = 0;
        $poll->isend = 0;
        $poll->city = "12";
        $poll->end_at = date("F j, Y, g:i a");
        $poll->creator_id = Auth::user()->id;
        $poll->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $poll = Poll::where('id', $id)->get()->first();
        $answers = Answer::where('id_poll', $id)->get();
        // var_dump($answers);
        $status = true;

        foreach ($answers as $answer) {
            if ($answer->username == Auth::user()->id) {
                $status = false;
                break;
            }
        }

        return response()->json(['poll' => $poll, 'status' => $status, 'answers' => $answers]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $new_title = $request->new_title;
        $new_content = $request->new_content;

        Poll::where('id', $id)->update(['title' => $new_title, 'content' => $new_content]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Poll::where('id', $id)->delete();
    }

    public function getAnswer($id, $result) {
        $answer = new Answer();

        $answer->username = Auth::user()->id;
        $answer->id_poll = $id;
        var_dump(Auth::user()->id);
        if($result == 1) {
            $yes_res = Poll::where('id', $id)->get()->first();;
            $yes_res = $yes_res->yes;
            $yes_res += 1;
            Poll::where('id', $id)->update(['yes' => $yes_res]);
            $answer->user_answer = $result;
        }
        else {
            $no_res = Poll::where('id', $id)->get()->first();;
            $no_res = $no_res->no;
            $no_res += 1;
            Poll::where('id', $id)->update(['no' => $no_res]);
            
            $answer->user_answer = $result;
        }
        $answer->save();
    }

    public function getLeaders($id) {

    }

    public function getPollsEnded() {
        $polls = Poll::where('isend', 1)->orderBy('id', 'desc')->limit(4)->get();
        return response()->json($polls);
    }

    public function getPollsAll() {
        $polls = Poll::where('isend', 0)->orderBy('id', 'desc')->get();
        $user = Auth::user()->id;

        return response()->json($polls);

    }
}
