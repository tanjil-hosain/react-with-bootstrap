<?php
include_once('db.php');

$data = json_decode(file_get_contents('php://input'), true);

$name = $data['fname'];
$gender = $data['gender'];
$address = $data['address'];
$district = $data['district'];
if(!empty($name)){

$db->query("INSERT INTO users (name, gender, address, district)
VALUES ('$name', '$gender', '$address', '$district')");
}
if ($db->affected_rows > 0) {
    echo json_encode(["message" => "User created successfully"]);
} else {
    echo json_encode(["message" => "Wrong"]);
}
?>