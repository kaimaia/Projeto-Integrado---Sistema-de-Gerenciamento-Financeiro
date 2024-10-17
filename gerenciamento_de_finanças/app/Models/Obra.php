<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Obras extends Model
{
    use HasFactory;
    protected $fillable = [
        'cliente',
        'localizacao',
        'descricao',
        'user_id',
    ];
}
