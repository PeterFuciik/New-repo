<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>test-větvení_else_if</title>
  <style>
   .NeplnoletíCH {
    font-size: 30px;
    color: #4682e3; 
   }  

   .PlnoletíCH {
    font-size: 30px;
    color: #103d85;
   } 

   .PlnoletéD {
    font-size: 30px;
    color: purple;
   }
   .Neplnoleté {
    font-size: 30px;
    color: pink;
   }
  </style>
</head>
<body>
  


<?php 

$pohlaví = 'Chlapec';
$věk = 21;

switch ($variable) {
  case 'Chlapec':
    
    if ($věk = > 0 and <18 ){
      echo "<p class='NeplnoletíCH'>" "pohlaví:" $pohlaví 'věk:' $věk '<p>';
    };

    else if ($věk = > 18 ) {
         echo "<p class='PlnoletíCH'>" "pohlaví:" $pohlaví 'věk:' $věk '<p>';
      };
    break;

  case 'Děvčata':
      
      if ($věk = > 0 and <18 ){
        echo "<p class='NeplnoletéD'>" "pohlaví:" $pohlaví 'věk:' $věk '<p>';
      };
  
      else if ($věk = > 18 ) {
        echo "<p class='PlnoletéD'>" "pohlaví:" $pohlaví 'věk:' $věk '<p>';
      };

      break;
  default:
   echo "špatný údaj";
    break;
}
?>

</body>
</html>