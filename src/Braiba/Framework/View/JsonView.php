<?php

namespace Braiba\Framework\View;

class JsonView extends AbstractView
{
    protected $statusCode;

    protected $data = array();

    public function __construct($data, $statusCode = 200)
    {
        $this->data = $data;
        $this->statusCode = $statusCode;
    }

    /**
     * @inheritDoc
     */
    public function render()
    {
        header('Content-Type: application/json');

        http_response_code($this->statusCode);

        echo json_encode($this->data);
    }
}
