<?php 

$servername = "localhost";
$username = "root";
$password = "";
$db = "bands_db";

//Create Connection 
$conn = mysqli_connect($servername, $username, $password, $db);
// $conn= new PDO("mysql:host=localhost;dbname=lyrics", "root", "");


// echo $conn;
//Check Connection
if($conn->connect_error) {
	die("Connection Failed" . $conn->connect_error);
}


// echo "Connection Successfully";

?>

<?php

	// // definições de host, database, usuário e senha
	// $host = "localhost";
	// $db   = "lyrics";
	// $user = "root";
	// $pass = "root";
	// // conecta ao banco de dados
	// $con = mysql_pconnect($host, $user, $pass) or trigger_error(mysqli_error(),E_USER_ERROR); 
	// // seleciona a base de dados em que vamos trabalhar
	// mysql_select_db($db, $con);
	// // cria a instrução SQL que vai selecionar os dados
?>