<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use phpDocumentor\Reflection\Types\Boolean;

class Customer extends Model
{
    use HasFactory;

    protected $casts = [
        'is_favourite' => 'boolean'
    ];

    protected $fillable = ['name', 'tel', 'is_favourite'];
}