<?php 

if (isset($_POST['submit'])){
    
    $name = $_POST['name']; 
    $subject = $_POST['subject']; 
    $mailFrom = $_POST['mail'];
    $message = $_POST['message'];
    
    $mailTo = "simondean888@hotmail.co.uk";
    $headers = "From: ".$mailFrom;
    $text = "You have recieved an e-mail from ".$name.".\n\n".$message; 
        
    mail($mailTo,$subject,$text,$headers);
    
    header("Location: index.php?mailsend");    
}