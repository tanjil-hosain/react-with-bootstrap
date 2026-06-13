<?php
include_once('db.php');

$sql = $db->query("SELECT * FROM users");



// echo "<pre>";
// print_r($rawData);

$records = [];
while ($rawData = $sql->fetch_assoc()){
    $records[] = $rawData;

} echo json_encode($records);

?>