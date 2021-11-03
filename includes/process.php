<?php
include_once("../database/constants.php");
include_once("user.php");

if(isset($_POST["username"]) AND isset($_POST["email"])){
    $user = new User();
    $result = $user->createUserAccount($_POST["username"], $_POST["email"], $_POST["password"], $_POST["usertype"]);
    echo json_encode($result);
}
?>