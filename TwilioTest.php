<?php

require 'twilio-php-master/Services/Twilio.php';

$account_sid = 'ACfb9c974b153c91308f8d43daa8fe85f2'; 
//$auth_token = ''; 

$account_sid = isset($_POST["account_sid"]) ? $_POST["account_sid"] : "";
$auth_token = isset($_POST["auth_token"]) ? $_POST["auth_token"] : "";
$to = isset($_POST["to"]) ? $_POST["to"]: "" ;
$message = isset($_POST["message"]) ? $_POST["message"] : "Hello monkey!";

$client = new Services_Twilio($account_sid, $auth_token); 

if (isset($_POST["submit"])) { 
try{
	$message = $client->account->messages->sendMessage(
	  '4084449129', // From a valid Twilio number
	  $to, // Text this number
	  $message
	);

	print $message->sid;
} catch (Exception $e) {
	$error = "Sorry, the boogie monster ate your message! Can't send it right now. <br>" . $e->getMessage(); 
}
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
	
<div class="navbar navbar-inverse navbar-fixed-top visible-phone noprint" id="phone-navbar"> </div>

<div class="container">
	<div class="row" id="content">
		<div class="span9 equal" id="main-content">
		<div class="section first-section" id="form">
			<div class="well">
			<fieldset>
            <legend style="background-color: #ffffff">Send Message</legend>
				<form id = "submit" action ="TwilioTest.php" method = "POST"> 

				AccountSid   = <input type = "text" id = "account_sid" name = "account_sid"><br>
				Auth Token   = <input type = "text" id = "auth_token" name = "auth_token"><br>
				To Number    = <input type = "text" id = "to" name = "to"><br>
				Message Text = <input type = "text" id = "message" name = "message"><br>
				<input type = "submit" id = "submit" value = "submit" name = "submit">
				</form>
			</fieldset>
			</div>
			
			<div class="well">
			<fieldset>
            <legend style="background-color: #ffffff">Send MMS</legend>
				<form id = "submit" action ="TwilioTest.php" method = "POST"> 

				AccountSid   = <input type = "text" id = "account_sid" name = "account_sid"><br>
				Auth Token   = <input type = "text" id = "auth_token" name = "auth_token"><br>
				To Number    = <input type = "text" id = "to" name = "to"><br>
				Message Text = <input type = "text" id = "message" name = "message"><br>
				MMS Image = <input type = "file" id = "file" name = "file"><br>
				<input type = "submit" id = "submit" value = "submit" name = "submit">
				</form>
			</fieldset>
			</div>
			
			<?php 
				// if errors
				if(isset($error)) { ?>
				    <div class="alert alert-error">
					    <button type="button" class="close" data-dismiss="alert">&times;</button>
					    <?php echo $error; ?>
					</div>
				<?php } ?>
				
		</div>
	</div>
</div>
</body></html>