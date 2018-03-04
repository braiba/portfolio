<?php

namespace Braiba\Portfolio;

use Braiba\Framework\Controller\Controller;
use Braiba\Framework\View\View;
use Braiba\Framework\Utils\TextUtils;

class Application
{
    public function handle($route, $method)
    {
        $di = Di::getInstance();

        $route = $di->getRouter()->getRoute($route, $method);
        if ($route === null) {
            header('HTTP/1.0 404 Not Found');
            return;
        }

        $controller = $this->getController($route->getController());

        $view = $this->callAction($controller, $route->getAction(), $route->getParams());

        $view->render();
    }

    /**
     * @param string $name
     *
     * @return Controller
     */
    protected function getController($name)
    {
        $className = 'Braiba\\Portfolio\\Controllers\\' . TextUtils::stubToPascalCase($name) . 'Controller';
        if (!class_exists($className)) {
            return null;
        }

        return new $className;
    }

    /**
     * @param Controller $controller
     * @param string $actionName
     * @param array $params
     *
     * @return View
     */
    protected function callAction($controller, $actionName, $params = [])
    {
        $methodName = TextUtils::stubToCamelCase($actionName) . 'Action';

        return call_user_func_array([$controller, $methodName], $params);
    }
}
