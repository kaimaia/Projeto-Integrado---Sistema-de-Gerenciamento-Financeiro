<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Relacionado extends Model
{
    use HasFactory;
    protected $fillable = [
        'nome',
        'custo',
        'descricao',
        'obra_id',
    ];
}
