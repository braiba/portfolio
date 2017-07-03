<?php

return [
    'database' => [
        'host' => '',
        'username' => '',
        'password' => '',
        'schema' => '',
    ],
    'images' => [
        'imageMagick' => [
            'dir' => '',
        ],
        'dir' => ROOT_DIR . 'public/img/',
        'path' => 'img/',
        'sizes' => [
            'default_thumbnail' => [
                'width' => 100,
                'height' => 100,
            ],
        ],
    ],
    'routes' => [
        'GET index' => [
            'controller' => 'index',
            'action' => 'index',
        ],
    ],
    'site' => [
        'debug' => false,
        'path' => '',
        'baseUrl' => '',
    ],
];
