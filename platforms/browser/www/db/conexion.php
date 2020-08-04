<?php
$servername = "shareddb-p.hosting.stackcp.net";
$username = "encuentrame";
$password = "iiqf2dhpcr";
$dbname = "encuentralo-3131353cd4";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}else{
	echo 'conexion verificada';
}

$conn->close();

/*

iiqf2dhpcr
iiqf2dhpcr
shareddb-p.hosting.stackcp.net
encuentralo-3131353cd4


encuentrame
shareddb-p.hosting.stackcp.net
encuentralo-3131353cd4
iiqf2dhpcr
*/
?>