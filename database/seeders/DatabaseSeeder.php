<?php

namespace Database\Seeders;

use App\Models\Admin;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::create([
            'name' => 'User',
            'email' => 'user@user.dev',
            'password' => bcrypt('password'),
        ]);

        Admin::create([
            'name' => 'Admin',
            'email' => 'admin@admin.dev',
            'password' => bcrypt('password'),
        ]);
    }
}
