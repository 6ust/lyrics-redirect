<?php

include "../../phpsql/connection/dbconnection.php";

$command = "use bands_db";
$result = $conn->query($command);

$band_name = $_GET['bandName'];

// Transform word replace space to underscore
$band_name_tb = str_replace(' ', '_', $band_name);

//Transform word to lowercase
$band_name_tb = strtolower($band_name_tb);


$command = "create table " . $band_name_tb . "(id_band int(255) auto_increment primary key, song varchar(255), album varchar(255), lyric varchar(255))";
$result = $conn->query($command);

//Redirect page
header("Location: /lyrics/admin/pages/tables.php");

?>