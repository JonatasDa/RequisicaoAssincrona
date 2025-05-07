<?php
if(isset($_GET['n1']) && isset($_GET['n2'])){
    $n1 = ($_GET['n1']);
    $n2 = ($_GET['n2']);
    $s = $n1 + $n2;
    echo $s;
} else {
    echo "Dados não recebidos";
}