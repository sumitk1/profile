<?php

require 'twilio-php-master/Services/Twilio.php';

$account_sid = ''; 
//$auth_token = ''; 

$auth_token = isset($_POST["auth_token"]) ? $_POST["auth_token"] : "";
$to = isset($_POST["to"]) ? $_POST["to"]: "" ;
$message = isset($_POST["message"]) ? $_POST["message"] : "Hello monkey!";

$client = new Services_Twilio($account_sid, $auth_token); 

if (isset($_POST["submit"])) { 
	$message = $client->account->messages->sendMessage(
	  '4084449129', // From a valid Twilio number
	  $to, // Text this number
	  $message
	);

	print $message->sid;
}
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Sumit Kumar</title>
	
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	
	<!-- jQuery -->
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script> 
	
	<!-- Bootstrap -->
	<link href="./bootstrap/css/bootstrap.min.css" rel="stylesheet" media="screen">
	<link href="./bootstrap/css/bootstrap-responsive.min.css" rel="stylesheet">
	<script src="./bootstrap/js/bootstrap.min.js"></script>
	
	<!-- Glyphicons -->
	<link href="./css/glyphicons.css" rel="stylesheet" media="screen">

	<!-- Plugins -->
	<script src="./js/jquery.easing.1.3.js"></script>
	<script src="./js/jquery.isotope.min.js"></script>
	<script src="./js/jquery.ba-resize.min.js"></script>
	
	<link href="./css/prettyPhoto.css" rel="stylesheet" media="screen">
	<script src="./js/jquery.prettyPhoto.js"></script>
	
	<script src="./js/klass.min.js"></script>
	<script src="./js/code.photoswipe.jquery-3.0.4.min.js"></script>
	<link href="./css/photoswipe.css" rel="stylesheet" media="screen">
	
	<!-- Theme -->
	<link href='http://fonts.googleapis.com/css?family=Open+Sans|Oswald|Droid+Sans|Yanone+Kaffeesatz|Droid+Serif|Ubuntu|Lobster|Francois+One|Arvo|Changa+One|Rokkitt|Nunito|Bitter|Merriweather|Raleway|Pacifico|Josefin+Sans|Questrial|Cantarell|Norican|Vollkorn|Quicksand|Limelight|Cantata+One|Bree+Serif|Oleo+Script|Playfair+Display|Quattrocento+Sans|Berkshire+Swash|Passion+One|Cuprum' rel='stylesheet' type='text/css'>
	<link href="./style.css" rel="stylesheet" media="screen">
	<script src="./js/scripts.js"></script>
	
	<!-- Skin -->
	<link type="text/css" rel="stylesheet" href="./css/skin.php" media="screen">
	

	<!--[if lt IE 9]>
	<link rel="stylesheet" type="text/css" href="./css/ie.css" />
	<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->
	
	<!-- PRINT CSS -->
	<link type="text/css" rel="stylesheet" href="./css/print.css" media="print">
	
	
</head>

<body class="backgrounded" data-spy="scroll" data-target=".sidebar-nav">
<?php 
    include_once("analyticstracking.php");
?> 
	

<form id = "submit" action ="TwilioTest.php" method = "POST"> 

A-T = <input type = "text" id = "auth_token" name = "auth_token"><br>
To = <input type = "text" id = "to" name = "to"><br>
Msg = <input type = "text" id = "message" name = "message"><br>
<input type = "submit" id = "submit" value = "submit" name = "submit">
</form>

</body></html>