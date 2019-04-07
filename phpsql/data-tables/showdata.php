<?php
include "../../phpsql/connection/dbconnection.php";

if(!$conn) {
		die("Connection Failed" . myssql_connect_error());
	}

	$sql = "SELECT * FROM " . $bandNameCode;

	$result = mysqli_query($conn, $sql);

	if (mysqli_num_rows($result) > 0) {
	    // output data of each row
	    while($row = mysqli_fetch_assoc($result)) {
	        // echo "id: " . $row["id_band"]. " - Name: " . $row["song"]. " " . $row["album"]. "<br>";
?>
	<tr>
		<td>
			<p><?= $row["song"] ?></p>
		</td>
		<td>
			<p><?= $row["album"] ?></p>
		</td>
		<td>
			<p><?= $row["lyric"] ?></p>
		</td>
	</tr>
<?php 
	    }
	} else {
	    echo "0 results";
	}

	mysqli_close($conn);
?>