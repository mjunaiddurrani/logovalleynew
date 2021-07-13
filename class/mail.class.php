<?php

/**
 * 
 */
class Mail 
{
	function send($to,$subject,$message){
		$to = 'query@logovalley.co.uk';

		$headers = "From: " . strip_tags('query@logovalley.co.uk') . "\r\n";
		$headers .= "Reply-To: ". strip_tags($to) . "\r\n";
		// $headers .= "CC: mjunaiddurrani@hotmail.com\r\n";
		$headers .= "MIME-Version: 1.0\r\n";
		$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
		if(mail($to, $subject, $message, $headers)){
		  return true;
		  
		}else{
		    return false;
		}
	}
	

}
?>