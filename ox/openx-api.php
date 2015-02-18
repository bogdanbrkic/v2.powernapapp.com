<?php
ini_set('error_reporting', E_ALL & ~E_NOTICE);
header('Content-Type: text/html; charset=utf-8');
require_once 'OX4_Api_Client.php';
$uri      = 'http://ox-ui.clickmena.com';
$email    = 'openx@diwanee.com';
$password = '29resavskA'; // * not allowed in password
$key      = '6176939ec0d3d3ae0c80c3a8024dbd5410ba1073';
$secret   = '6cf9aba3e43bf876558a3355d50e836dbc2c6bc2';
$realm    = 'diwanee_ad_server';
$adunitgroupid = $_GET['adunitgroup'];

try {
  if(isset($adunitgroupid)){
    $client = new OX4_API_Client($uri, $email, $password, $key, $secret, $realm);
    $result = $client->get('/adunitgroup/' . $adunitgroupid);
    $path = $client->getUri()->getPath();
    $host = $client->getUri()->getHost();
    $ads = array();
    $adgroup = array();

    if ($result->getStatus() == 200) {
      $response = json_decode($result->getBody(), true);
      foreach($response as $adunitgroup => $group) {
        $result = $client->get('/adunitgroup/' . $group['uid'] . '/list_ad_units', array('limit' => 0));
        if ($result->getStatus() == 200) {
          $response_ads = json_decode($result->getBody(), true);
          $adgroup+=$response_ads['objects'];
        }
      }
    }
    echo json_encode($response_ads);
  }
}
catch (Exception $e) {
  echo json_encode(array(
    'error' => array(
      'msg' => $e->getMessage(),
      'code' => $e->getCode(),
      ),
    ));
}
?>