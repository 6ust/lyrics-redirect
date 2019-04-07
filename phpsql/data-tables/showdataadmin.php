<?php
include "../../phpsql/connection/dbconnection.php";

?>

<form method="GET" action="../../phpsql/data-tables/adddata.php">
	<tr>
		<td>
			<input type="text" name="Isong" placeholder="song Name">
		</td>
		<td>
			<input type="text" name="Ialbum" placeholder="album Name">
		</td>
		<td>
			<input type="text" name="Ilyric" placeholder="lyric name">
		</td>
		<td>
			<input type="hidden" name="Itbband" value="<?php echo $bandNameCode ?>">
			<input type="submit" value="Add Song">
		</td>
	</tr>
</form>

<?php

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
		<td>
			<form method="GET" action="../../phpsql/data-tables/deletedata.php">
				<input type="hidden" name="idsong" value="<?= $row['id_band'] ?>">
				<input type="hidden" name="Itbband" value="<?php echo $bandNameCode ?>">

				<input type="submit" value="Delete">
			</form>
		</td>
	</tr>
<?php 
	    }
	} else {
	    echo "0 results";
	}

	mysqli_close($conn);
?>