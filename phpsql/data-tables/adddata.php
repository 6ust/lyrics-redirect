<?php

include "../../phpsql/connection/dbconnection.php";

// $command = "use bands_db";
// $result = $conn->query($command);

$tb_band = $_GET['Itbband'];
$song_name = $_GET['Isong'];
$album = $_GET['Ialbum'];
$lyric = $_GET['Ilyric'];


// Transform word replace space to underscore
$band_name_tb = str_replace(' ', '_', $tb_band);

//Transform word to lowercase
$band_name_tb = strtolower($band_name_tb);


$command = "insert into " . $band_name_tb ."(song,album,lyric) values('". $song_name ."', '". $album ."', '". $lyric . "')";

mysqli_query($conn, $command);

//Redirect page
header("Location: /lyrics/admin/pages/datatables.php?tbbandtmp=$band_name_tb");

?>