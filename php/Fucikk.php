<!DOCTYPE html>
<html lang="en">
<head>
  <title>test-Fučík</title>
  <style>
    table {
      border: 1px solid black;
    }
  </style>
</head>
<body>

<?php
   echo "<table>";
   echo "<td>";
   echo "<tr>";
   
   for ($a=0; $a <= 20 ; $i++)
   { 
     echo "$a";
   }
   
   echo "</tr>";
   echo "</td>";
   echo "<td>";
   echo "<tr>";
   
   while ($b % 7 < 100;) {
    echo "$b";
    echo "tr";
   }
   echo "</tr>";
   echo "</tb>";
   foreach ($cisla as $key => $value) {
    echo "$cisla";
   }
   
   echo "</table>";
?>

</body>
</html>