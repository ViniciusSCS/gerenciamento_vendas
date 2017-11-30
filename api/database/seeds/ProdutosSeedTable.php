<?php

use Illuminate\Database\Seeder;

class ProdutosSeedTable extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(\App\Produtos::class,10)->create();
    }
}
