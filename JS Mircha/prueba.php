
<?php

// 1 Ejercicio: 

$sellerId = 179571326;

define( "API_SELLER" , "https://api.mercadolibre.com/sites/MLA/search?seller_id=");
define( "API_CATEGORY" , "https://api.mercadolibre.com/categories/");

$json = file_get_contents(API_SELLER . $sellerId);
$res = json_decode($json);

$articulos = $res -> results;

foreach ($articulos as $data ) {
    // $category me devuelve la url con cada categoría según su id
    //$category = API_CATEGORY . $data->category_id;
    $jsonCategory = file_get_contents(API_CATEGORY . $data-> category_id);
    $catResults = json_decode($jsonCategory);

    $item = 'ID: "' . trim($data->id) . '" - Title: "' . trim($data-> title) . '"- Category: "' . trim($data->category_id) . '" - Name:"' . trim($catResults->name). '" Precio: $'.trim($data->price) . " - Cantidad Disponible: ". trim($data->available_quantity) ." - Fecha Creado: " . trim($catResults->date_created) . PHP_EOL;

    file_put_contents('./log_' .date("j-n-Y"). '.log', $item, FILE_APPEND);
    echo $category.PHP_EOL;
}
?>