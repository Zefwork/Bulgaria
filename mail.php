<?php

$recepient = "portnyanko90@mail.ru";
$sitename = "Bulgary";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$phone = trim($_POST["phone"]);
$message = "Имя: $name \nEmail: $email \nТелефон: $phone";

$to = "portnyanko90@mail.ru";
$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
?>