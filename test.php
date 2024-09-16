<?php

echo "Ahoj světe!";


$promenna = "ahoj";
$promenna = 2;
$promenna = false;
$promenna = 2.5;


echo $promenna;

function mojeFunkce() {
    echo "ahoj";
}

function secti($a, $b) {
    return $a + $b;
}

$result = secti(1, 2);
echo $result;

mojeFunkce();

if(1==1) {
    echo "True";
} else {
    echo "false";
}

$cislo = 2;
$cislo1 = 3;

$cislo == $cislo1;  // porovnává pouze hodnotu
$cislo === $cislo1; // porovnává hodnotu i datový typ 

$name1 = "Zdenek";

switch($name1) {
    case "Petr":
        echo "Ahoj Petre";
        break;
    case "Karel":
        echo "Ahoj Karle";
        break;
    defult:
        echo "Ahoj cizince";
        break;
}

$names = ["ahoj", 2, "nazdar"];

foreach($names as $name) // projdi pole names a vykonej kod v zavorkach
{
    echo "<p>".$name."</p>";
}


// Vypise obsah pole s typem promenne, poctem znaku a indexem
echo"<pre>";
var_dump($names);
echo"</pre>";


$items = [
    "car" => "subaru",
    "letadlo" => "Boing"
]

foreach($items as $key => $value) // projdi pole names a vykonej kod v zavorkach
{
    echo "<p>".$key.":".value."</p>";
}

echo $names[1];
echo $items["letadlo"];


$muli_array = [
    "cars" => ["Subaru", "BMW", "Audi"],
    "letadla" => ["Boeing", "Aibus"]
]

// pridani prvku do pole



forearch($multi_array["cars"])