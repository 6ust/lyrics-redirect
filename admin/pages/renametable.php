<!DOCTYPE html>
<html>
<head>
	<title> Rename Table - Administer</title>
	<!-- In Link tag href the path too work with the "/lyrics/images/icon/ClaveSol.png" -->
	<link rel="icon" href="../../images/icon/ClaveSol.png">
	<link rel="stylesheet" type="text/css" href="../../css/style.css">
	<?php 
		include "../../phpsql/connection/dbconnection.php";
		//For some reason the path here work that form to root "../../" 	
	?>
</head>
<body>
	<nav>
		<ul>
			<li>
				<a href="/lyrics/index.php">
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
			<tbody>
				<tr>
					<?php 
						$bandNameCurrent = $_GET['bandNameCurrentTmp'];
					?>
					<form action="../../phpsql/tables/altertable.php?=<?php echo $bandNameCurrent?>" method="GET">						
						<td><?php echo $bandNameCurrent ?></td>
						<td> = </td>
						<td>
							<input type="text" name="newBandName" placeholder="New Bandname">
							<!-- Passando a variavel bandnamecurrent para outra pagina via input hidden, por formulário <form>-->
							<input type="hidden" name="bandNameCurrent" value="<?php echo $bandNameCurrent?>">
						</td>
						<td>
							<input type="submit" value="Rename">
						</td>
					</form>
				</tr>
			</tbody>
		</table>

	</div>
</body>
</html>