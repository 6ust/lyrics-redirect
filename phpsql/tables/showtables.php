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
				<a href="/lyrics/user/pages/datatables.php?tbbandtmp=<?php echo $row['Tables_in_bands_db']?>">
					<?php 
						$nameTb = $row['Tables_in_bands_db'];
						
						echo $nameTb;

					?>
				</a>
			</td>
		</tr>
	<?php
	}
}

?>