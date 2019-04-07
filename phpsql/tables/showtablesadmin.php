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
					<?php 
						$nameTb = $row['Tables_in_bands_db'];
						
						echo $nameTb;

					?>
				</a>
			</td>
			<td>
				<a href="../../phpsql/tables/droptable.php?nameTbTmp=<?php echo $nameTb ?>">Drop</a>
			</td>
			<td>
				<a href="../../admin/pages/renametable.php?bandNameCurrentTmp=<?php echo $nameTb ?>">Alter</a>
			</td>

		</tr>
	<?php
	}
}

?>