<?php

$numero = 90;

function bucles($numero){
    $resultado = [];

    while($numero <= 100){
        $resultado[] = $numero++;
    }
    return $resultado;
}

$total =  implode(", ",bucles($numero));

echo $total . PHP_EOL;



function unoAlDiez()
{
  for($i=01 ; $i<=10;$i++)
  {
    $resultado []= $i;
  }
  return $resultado;
}

$total =  implode(", ",unoAlDiez());

echo $total . PHP_EOL;

$argumento = [1,22,33,44,55,66,77,88,99];
function dobles($argumento)
{
 foreach($argumento as $elemento)
 {
   $dobles[] = $elemento*2;
 }
  return $dobles;
}

$total =  implode(", ",dobles($argumento));

echo $total;