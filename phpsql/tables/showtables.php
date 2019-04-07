<link rel="stylesheet" type="text/css" href="style.css">

<?php

$command = "use bands_db";
$result = $conn->query($command);

$command = "show tables";
$result = $conn->query($command);

if($result->num_rows > 0) {
	//output data of each row
	while($row = $result->fetch_assoc()) {
	?>
		<tr>
			<td>			
				<a href="">
					<?php echo $row["Tables_in_bands_db"] ?>
				</a>
			</td>
		</tr>
	<?php
	}
}

?>