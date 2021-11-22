<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Episodio extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('episodios', function (Blueprint $table) {

            $table->engine="InnoDB";
            
            $table->bigIncrements('id');
            $table->bigInteger('anime_id')->unsigned();
            $table->integer('episodio');
            
            
            $table->timestamps();

            $table->foreign('anime_id')->references('id')->on('animes')->onDelete("cascade");
            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
