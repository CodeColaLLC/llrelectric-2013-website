<?php

$to = "support@llrelectric.com";

$firstName = $_REQUEST['firstName'];
$lastName = $_REQUEST['lastName'];
$phoneNumber = $_REQUEST['phoneNumber'];
$email = $_REQUEST['email'] ;

$subject = "LLR Electric " . $firstName . "," . $lastName;
$message = $_REQUEST['message'] . "\n\n" . "From: " . $firstName . " " .  $lastName . "\nContact Number: " . $phoneNumber .
"\nContact Email: " . $email . "\n";
$headers = "From: $email";

$sent = mail($to, $subject, $message, $headers) ;

if($sent)
{print "Your mail was sent successfully"; }
else
{print "We encountered an error sending your mail"; }

?>
