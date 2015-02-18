<?php
/*
*http://yasmina/oxtest.php?ox=3&sandbox=false&adunitgroup=10745
*http://yasmina/oxtest.php?ox=4&sandbox=true&adunitgroup=1610612737
*/
ini_set('error_reporting', E_ALL & ~E_NOTICE);
header('Content-Type: text/html; charset=utf-8');
require_once 'OX4_Api_Client.php';

$adunitgroupid = isset($_GET['adunitgroup']) ? $_GET['adunitgroup'] : 1610612737;


$uri      = 'http://ox-ui.clickmena.com';
$email    = 'openx@diwanee.com';
$password = '29resavskA'; // * not allowed in password
$key      = '6176939ec0d3d3ae0c80c3a8024dbd5410ba1073';
$secret   = '6cf9aba3e43bf876558a3355d50e836dbc2c6bc2';
$realm    = 'diwanee_ad_server';
$client = new OX4_API_Client($uri, $email, $password, $key, $secret, $realm);


$client = new OX4_API_Client($uri, $email, $password, $key, $secret, $realm);
$result = $client->get('/adunitgroup/' . $adunitgroupid);


$path = $client->getUri()->getPath();
$host = $client->getUri()->getHost();

//var_dump($client); die('s'); 
//var_dump($version, $sandbox, $adunitgroupid); die();

echo "
<h5> GET params: </h5>
<ul>
<li>ox: API version (3, 4) <i>default: 4</i></li>
<li>sandbox: (true, false) <i>default: true</i></li>
<li>adunitgroup <i>default: 1610612737</i></li>
</ul>
<h5>Ex:</h5>
<ul>
<li>
http://staging.yasmina.com/oxtest.php?ox=3&sandbox=false&adunitgroup=10745
</li>
<li>
http://staging.yasmina.com/oxtest.php?ox=4&sandbox=true&adunitgroup=16106127
</li>
</ul>

";
echo '<h1>Host: '  . $host . '</h1>';
echo '<h1>Path: ' . $path . '</h1>';
echo '<h3>AdUnitGroupId: ' . $adunitgroupid . '</h3>';
echo '<pre>'; print_r(json_decode($result->getBody(), true)); echo '</pre>'; die(); 
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

?>








