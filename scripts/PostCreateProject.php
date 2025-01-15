<?php

// Get the project name from the environment variable
$projectName = basename(getcwd());

if (!file_exists('.env') && file_exists('.env.example')) {
    copy('.env.example', '.env');
    echo "The .env file has been copied from .env.example\n";

    // Update the APP_NAME in .env
    $envContent = file_get_contents('.env');
    $envContent = preg_replace('/^APP_NAME=.*$/m', "APP_NAME={$projectName}", $envContent);
    file_put_contents('.env', $envContent);

    echo "The APP_NAME in .env has been set to {$projectName}\n";
} else {
    echo "The .env file already exists or .env.example is missing\n";
}
