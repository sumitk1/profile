<?php

require 'twilio-php-master/Services/Twilio.php';

$account_sid = 'ACfb9c974b153c91308f8d43daa8fe85f2'; 
//$auth_token = ''; 

$account_sid = isset($_POST["account_sid"]) ? $_POST["account_sid"] : "";
$auth_token = isset($_POST["auth_token"]) ? $_POST["auth_token"] : "";
$from = isset($_POST["from"]) ? $_POST["from"]: "" ;
$to = isset($_POST["to"]) ? $_POST["to"]: "" ;
$message = isset($_POST["message"]) ? $_POST["message"] : "Hello monkey!";

$client = new Services_Twilio($account_sid, $auth_token); 
try{
if (isset($_POST["submit"])) { 
	if (!empty($_POST["simpleMessage"])) {
		
			$message = $client->account->messages->sendMessage(
			  '4084449129', // From a valid Twilio number
			  $to, // Text this number
			  $message
			);

			print $message->sid;
		
	}
	else if (!empty($_POST["mms"])) {
		// TODO Send MMS
		$url = "";
		$msg = "";
		$allowedExts = array("gif", "jpeg", "jpg", "png");
		$temp = explode(".", $_FILES["file"]["name"]);
		$extension = end($temp);
		
		if ((($_FILES["file"]["type"] == "image/gif") || ($_FILES["file"]["type"] == "image/jpeg")
				|| ($_FILES["file"]["type"] == "image/jpg") || ($_FILES["file"]["type"] == "image/pjpeg")
				|| ($_FILES["file"]["type"] == "image/x-png") || ($_FILES["file"]["type"] == "image/png")) 
				&& ($_FILES["file"]["size"] < 9000000) && in_array($extension, $allowedExts)) {
			if ($_FILES["file"]["error"] > 0) {
				$error = "Return Code: " . $_FILES["file"]["error"] . "<br>";
			} 
			else {
				$msg  .= "Upload: " . $_FILES["file"]["name"] . "<br>";
				$msg  .= "Type: " . $_FILES["file"]["type"] . "<br>";
				$msg  .= "Size: " . ($_FILES["file"]["size"] / 1024) . " kB<br>";
				$msg  .= "Temp file: " . $_FILES["file"]["tmp_name"] . "<br>";

				if (file_exists("upload/" . $_FILES["file"]["name"])) {
					$msg .= " <strong> ";
					$msg .= $_FILES["file"]["name"] . " already exists. ";
					$msg .= " </strong> ";
				}
				else {
					move_uploaded_file($_FILES["file"]["tmp_name"], "upload/" . $_FILES["file"]["name"]);
					$msg  .= "Stored in: " . "upload/" . $_FILES["file"]["name"];
				}
			}
		}
		$client->account->messages->sendMessage(
			$from, // From a valid MMS enabled Twilio number
			$to, 
			$message, 
			!empty($url) ? $url : "http://hdwallpapermania.com/wp-content/uploads/2014/02/heart-roses-flowers-hd-wallpapers.jpg");
	}
}
} catch (Exception $e) {
			$error = "Sorry, the boogie monster ate your message! Can't send it right now. This is what the monster has to say :<br><strong>" . $e->getMessage() . "</strong>"; 
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
            <legend style="background-color: #ffffff">Send Message </legend>
				<form id = "sendMessage" action ="TwilioTest.php" method = "POST"> 
				<input type = "hidden" id = "simpleMessage" name = "simpleMessage" value="simpleMessage">
				<table border="0" cellpadding="5px">
				<tr><td>AccountSid </td><td> <input type = "text" id = "account_sid" name = "account_sid"></td></tr>
				<tr><td>Auth Token  </td><td>  <input type = "text" id = "auth_token" name = "auth_token"></td></tr>
				<tr><td>To Number   </td><td> <input type = "text" id = "to" name = "to"></td></tr>
				<tr><td>Message Text </td><td> <input type = "text" id = "message" name = "message"></td></tr>
				<tr><td colspan=2 align="center"><input type = "submit" id = "submit" value = "submit" name = "submit"></td></tr>
				</table>
				</form>
			</fieldset>
			</div>
			
			<div class="well">
			<fieldset>
            <legend style="background-color: #ffffff">Send MMS</legend>
				<form id = "sendmms" action ="TwilioTest.php" method = "POST" enctype="multipart/form-data"> 
				<input type = "hidden" id = "mms" name = "mms" value="mms">
				<table border="0" cellpadding="5px">
				<tr><td>AccountSid  </td><td>  <input type = "text" id = "account_sid" name = "account_sid"></td></tr>
				<tr><td>Auth Token  </td><td> <input type = "text" id = "auth_token" name = "auth_token"></td></tr>
				<tr><td>From Number/ShortCode  </td><td> <input type = "text" id = "from" name = "from"> - P.S. This number should be enabled for MMS</td></tr>
				<tr><td>To Number  </td><td> <input type = "text" id = "to" name = "to"></td></tr>
				<tr><td>Message Text </td><td> <input type = "text" id = "message" name = "message"></td></tr>
				<tr><td>MMS Image </td><td> <input type = "file" id = "file" name = "file"></td></tr>
				<tr><td colspan="2" align="center"><input type = "submit" id = "submit" value = "submit" name = "submit"></td></tr>
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
			<?php 
				// if errors
				if(!empty($msg) ) { ?>
				    <div class="alert alert-info">
					    <button type="button" class="close" data-dismiss="alert">&times;</button>
					    <?php echo $msg; ?>
					</div>
				<?php } ?>	
				
		</div>
	</div>
</div>
</body></html>