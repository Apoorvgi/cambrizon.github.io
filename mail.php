<?php 
if($_POST['action'])
{
	$name = $_POST['name'];
	$message = $_POST['message'];
	$phone =  $_POST['phone'];
	// $msg = "Hello Sir/Madam<br><br>";
	// $msg. = "My Name is".$name."My Contact Number is".$phone."<br>";
	// $msg. = "I want to discuss".$message."<br><br> I hope you will contact to me soon";
	// $msg. = "Thank You";
	// $msg = wordwrap($msg,70);
	$success = mail("cambrizon@gmail.com","Discussion about",$message);
	if($success)
	{
		echo 'we will contact you very soon';
	}
}
?>