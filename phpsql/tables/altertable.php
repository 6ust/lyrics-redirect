<?php

include "../../phpsql/connection/dbconnection.php";

$command = "use bands_db";
$result = $conn->query($command);


$band_name_current = $_GET['bandNameCurrent'];
$new_band_name = $_GET['newBandName'];
$new_band_name_cp = $new_band_name;

$new_band_name = strtolower($new_band_name_cp);
$new_band_name = str_replace(' ', '_', $new_band_name);


$command = "alter table " . $band_name_current . " rename to " . $new_band_name;
$result = $conn->query($command); 

//Redirect page
header("Location: /lyrics/admin/pages/tables.php");

?>