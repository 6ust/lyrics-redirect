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
	<?php
		// Transform Word underscore(_) in space( ) and first letters after space to be Uppercase
		$bandNameCode = $_GET['tbbandtmp'];
		$bandName = str_replace('_', ' ', $bandNameCode);
		$bandName = ucwords(strtolower($bandName));

	?>
	<div class="body">
		<h1>Songs - <?php echo $bandName?></h1>
		<br>
		<br>
		<table>
			<thead>
				<tr>
					<th>SongName</th>
					<th>Album</th>
					<th>Lyric</th>
				</tr>
			</thead>
			<tbody>
				<!-- Implementar codigo para mostrar dados da tabela -->
				<?php 
					include "../../phpsql/data-tables/showdata.php"
				?>
			</tbody>
		</table>
	</div>
</body>
</html>