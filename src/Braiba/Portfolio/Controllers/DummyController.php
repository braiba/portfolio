<?php

namespace Braiba\Portfolio\Controllers;

use Braiba\Framework\View\JsonView;

class DummyController
{
    /**
     * @return JsonView
     */
    public function getAction()
    {
        return new JsonView([]);
    }
}
