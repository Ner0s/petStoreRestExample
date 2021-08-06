<?php
include_once 'class/Pet.php';

$pet = new Pet();

if(!empty($_POST['action']) && $_POST['action'] == 'getPets') {
    $pet->getPets();
}

?>