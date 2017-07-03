<?php

namespace Braiba\Portfolio;

use Doctrine\ORM\EntityManager;
use Doctrine\ORM\Tools\Setup;
use Braiba\Framework\Config\ArrayConfig;
use Braiba\Framework\Config\Config;
use Braiba\Framework\Router\Router;
use PDO;

class Di
{
    /**
     * @var Di
     */
    protected static $instance = null;

    /**
     * @return Di
     */
    public static function getInstance()
    {
        if (self::$instance === null) {
            self::$instance = new Di();
        }
        return self::$instance;
    }

    private function __construct() {}

    protected $application = null;

    /**
     * @return Application
     */
    public function getApplication()
    {
        if ($this->application === null) {
            $this->application = new Application();
        }
        return $this->application;
    }

    protected $config = null;

    /**
     * @return Config
     */
    public function getConfig()
    {
        if ($this->config === null) {
            /** @var array $data */
            $data = require ROOT_DIR . 'config/global.config.php';

            $hostname = $_SERVER['HTTP_HOST'];
            if (file_exists(ROOT_DIR . 'config/domain/' . $hostname . '.config.php')) {
                $data = array_replace_recursive($data, require ROOT_DIR . 'config/' . $hostname . '.config.php');
            }

            $this->config = new ArrayConfig($data);
        }
        return $this->config;
    }

    protected $db = null;

    /**
     * @return PDO
     */
    public function getDb()
    {
        if ($this->db === null) {
            $dbConfig = $this->getConfig()->get('database');

            $host = $dbConfig->getValue('host', 'localhost');
            $schema = $dbConfig->getValue('schema');
            $username = $dbConfig->getValue('username');
            $password = $dbConfig->getValue('password');

            $dsn = 'mysql:host=' . $host . ';dbname=' . $schema;

            $this->db = new PDO($dsn, $username, $password);
        }
        return $this->db;
    }

    protected $entityManager = null;

    /**
     * @return EntityManager
     */
    public function getEntityManager()
    {
        if ($this->entityManager === null) {
            $dbConfig = $this->getConfig()->get('database');

            $config = Setup::createAnnotationMetadataConfiguration(array(__DIR__."/src"), true);
            $conn = [
                'driver' => 'pdo_mysql',
                'host' => $dbConfig->getValue('host', 'localhost'),
                'user' => $dbConfig->getValue('username'),
                'password' => $dbConfig->getValue('password'),
                'dbname' => $dbConfig->getValue('schema'),
                'charset' => $dbConfig->getValue('charset', 'utf8'),
            ];

            $this->entityManager = EntityManager::create($conn, $config);
        }
        return $this->entityManager;
    }

    protected $router = null;

    /**
     * @return Router
     */
    public function getRouter()
    {
        if ($this->router === null) {
            $this->router = new Router();
        }
        return $this->router;
    }
}
