<!DOCTYPE html>
<html lang="cs" dir="ltr">
<head>
	<meta charset="utf-8">
	<title>promněné.php</title>

	<style>

			h1 {
				text-align: center;
				color: magenta;
			    border-radius: 8px;
			}

			h2 {
				text-align: center;
				color: magenta;
			    border-radius: 8px;
			}
		
			.chujovina {
				text-align: center;
				color: magenta;
				border-radius: 8px;
			}


	</style>
</head>
<body>

		<h1>Proměnné</H1>

				<?php

 						$cislo =42;
 						$Cislo2 =8;
 						$CISLO3 =0; //velká písmena pro konstantu 

 						$cislo2 = -9;
 						//$-9 = cislo2 nelze!!

 						$cislo2 = $Cislo2; // cislo2 8

				?>

		<h2>definování proměnných</h2>
		<span class="chujovina">mentální sauna</span>

				<?php

						$text1 = "dnes je ctvrtek";
						$text2 = "zitra je patek";

				?>

</body>
</html>