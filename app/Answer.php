<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Answer extends Model
{
    protected $fillable = [
        'id_poll', 'id_answer', 'description', 'count', 'username', 'user_answer'
    ];
}
