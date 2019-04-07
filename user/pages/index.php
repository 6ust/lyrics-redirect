<!DOCTYPE html>
<html>
<head>
	<title>Lyrics</title>
	<link rel="icon" href="../../images/icon/ClaveSol.png">
	<link rel="stylesheet" type="text/css" href="../../css/style.css">
	<?php include "../../phpsql/connection/dbconnection.php" ?>
</head>
<body>
	<nav>
		<ul>
			<li>
				<a href="#">
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
		<h1>Bands of the Heavy Metal</h1>
		<br>
		<br>
		<table>
			<tbody>
				<?php include "../../phpsql/tables/showtables.php" ?>
			</tbody>
		</table>


		<!-- 7 Tables stays in PC Screen -->

		<footer>
			<a href="../../admin/pages/tables.php" target="_blank">Administer Page</a>
		</footer>
	</div>
</body>
</html>