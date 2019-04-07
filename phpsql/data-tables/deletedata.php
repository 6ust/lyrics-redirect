<?php

include "../../phpsql/connection/dbconnection.php";

// $command = "use bands_db";
// $result = $conn->query($command);

$tb_band = $_GET['Itbband'];
$id_song = $_GET['idsong'];


// Transform word replace space to underscore
$band_name_tb = str_replace(' ', '_', $tb_band);

//Transform word to lowercase
$band_name_tb = strtolower($band_name_tb);


$command = "delete from " . $band_name_tb ." where id_band = " . $id_song;

// echo $command;
mysqli_query($conn, $command);



//Redirect page

header("Location: /lyrics/admin/pages/datatables.php?tbbandtmp=$band_name_tb");

?>