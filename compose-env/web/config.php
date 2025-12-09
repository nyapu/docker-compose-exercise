<?php
$servername = "mysqldb";
$username = "root";
$password = "root123";   

$conn = new mysqli($servername, $username, $password);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully to MySQL!";
?>

