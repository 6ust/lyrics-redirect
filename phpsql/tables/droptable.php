<?php

include "../../phpsql/connection/dbconnection.php";

$command = "use bands_db";
$result = $conn->query($command);


$band_name_tb = $_GET['nameTbTmp'];


$command = "Drop Table " . $band_name_tb;
$result = $conn->query($command);

//Redirect page
header("Location: /lyrics/admin/pages/tables.php");

?>