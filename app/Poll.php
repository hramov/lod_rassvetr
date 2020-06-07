<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Poll extends Model
{
	protected $fillable = [
        'title', 'description', 'content', 'yes', 'no', 'city', 'isend', 'end_at'
    ];
    
}
