<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require 'vendor/phpmailer/phpmailer/src/Exception.php';
require 'vendor/phpmailer/phpmailer/src/PHPMailer.php';
require 'vendor/phpmailer/phpmailer/src/SMTP.php';
$mail = new PHPMailer();
$mail->IsSMTP();
$mail->Mailer = "smtp";
$mail->SMTPDebug  = 1;  
$mail->SMTPAuth   = TRUE;
$mail->SMTPSecure = "starttls";
$mail->Port       = 465;
$mail->Host       = "mail.logovalley.co.uk";
$mail->Username   = "junaid@logovalley.co.uk";
$mail->Password   = "zNfPqVJSow9WJOwh";
$mail->IsHTML(true);
$mail->AddAddress("akashrajput9@hotmail.com", "recipient-name");
$mail->SetFrom("junaid@logovalley.co.uk", "from-name");
$mail->AddReplyTo("akashrajput9@hotmail.com", "reply-to-name");
$mail->AddCC("cc-akashrajput9@hotmail.com", "cc-recipient-name");
$mail->Subject = "Test is Test Email sent via Gmail SMTP Server using PHP Mailer";
$content = "<b>This is a Test Email sent via Gmail SMTP Server using PHP mailer class.</b>";

$mail->MsgHTML($content); 
if(!$mail->Send()) {
  echo "Error while sending Email.";
  var_dump($mail);
} else {
  echo "Email sent successfully";
}

// require_once('class/mail.class.php');

// $mail = new Mail;

// $mail->send('junaid@logovalley.co.uk','test from phnp','test msegesagds 2ASD');



?>