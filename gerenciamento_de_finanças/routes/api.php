<?php

use App\Http\Controllers\UserController;
use App\Http\Controllers\DespesaController;
use App\Http\Controllers\RelacionadoController;
use App\Http\Controllers\TelefoneController;
use App\Http\Controllers\ObraController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::apiResource('users', UserController::class);
Route::apiResource('obras', ObraController::class);
Route::apiResource('relacionados', RelacionadoController::class);
Route::apiResource('despesas', DespesaController::class);
Route::apiResource('telefones', TelefoneController::class);
