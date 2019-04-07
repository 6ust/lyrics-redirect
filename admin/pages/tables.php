<!DOCTYPE html>
<html>
<head>
	<title>Tables - Administer</title>
	<!-- In Link tag href the path too work with the "/lyrics/images/icon/ClaveSol.png" -->
	<link rel="icon" href="../../images/icon/ClaveSol.png">
	<link rel="stylesheet" type="text/css" href="../../css/style.css">
	<link rel="stylesheet" type="text/css" href="../../css/style-admin.css">
	<?php 
		include "../../phpsql/connection/dbconnection.php"
		//For some reason the path here work that form to root "../../" 	
	?>
</head>
<body>
	<nav>
		<ul>
			<li>
				<a href="../../index.html">
					Home
				</a>	
			</li>
			<li>
				<a href="#">
					Infos
				</a>	
			</li>
			<li>
				<a href="#">
					News
				</a>	
			</li>
		</ul>
	</nav>
	<div class="body">
		<br>
		<h1>Tables - Administer</h1>
		<br>
		<br>
		<table>
			<thead>
				<tr>
					<form action="../../phpsql/tables/createtables.php" method="GET">						
						<td>
							<input type="text" name="bandName" placeholder="Insert the band name">
						</td>
						<td colspan="2">
							<input type="submit" value="Insert">
						</td>
					</form>
				</tr>
			</thead>
			<tbody>
				<?php
					include ("../../phpsql/tables/showtablesadmin.php"); 
				?>
			</tbody>
		</table>

	</div>
</body>
</html>