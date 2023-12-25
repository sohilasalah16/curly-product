<?php

$name=$_REQUEST['full'];
$email=$_REQUEST['email'];
$address=$_REQUEST['address'];
$city=$_REQUEST['city'];
$num=$_REQUEST['number'];

if(isset($_POST['btnSend'])){
$host="localhost";
$user="root";
$pass="";
$db="curlycare";
$conn= mysqli_connect($host,$user,$pass,$db);
$insert ="insert into customer values('$name','$address','$num','$city','$email')";
mysqli_query($conn,$insert);
header("Location:index.html");
}





?>