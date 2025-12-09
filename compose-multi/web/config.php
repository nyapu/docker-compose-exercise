<?php
$servername = "db";
$username = "root";
$password = "pass123"; // or getenv("MYSQL_ROOT_PASSWORD");

$conn = new mysqli($servername, $username, $password);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

echo "Connected successfully to MySQL!";
?>

