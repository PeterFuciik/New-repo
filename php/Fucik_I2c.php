<!DOCTYPE html>
<html>
<head>
	<title>Test_2_</title>
</head>
<body>

	<?php

	$text1="Dnes je pondělí";
	$text2=$text1."28.11.2022";
	$a=3;
	$b=42;
	$c=0.8;

	$d=($a*=4+$b)/$c;
	echo $d;

	echo "<br>";
	echo " == porovnává pouze hodnotu ale === porovnává i typ, příkaz funguje na principu true or false";
	echo "<br>";


	$d=$d+1;
	$d++;
	$d+=1;

	(($x>0 and $x<100) and ($x%13==0));

	(($y=>-10 and $y=<-1) and ($z=>1 and $z=<10));

	(($w%13==0) or ($w%7==0));


	?>

</body>
</html>