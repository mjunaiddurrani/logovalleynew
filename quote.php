<?php
$name = $_REQUEST['name'];
$company = $_REQUEST['company'];
$email = $_REQUEST['email'];
$phone = $_REQUEST['phone'];
$subject = $_REQUEST['subject'];
$amount = $_REQUEST['amount'];
$created_at = date('Y-m-d H:i:s');
$updated_at = date('Y-m-d H:i:s');
$route  = $_REQUEST['route'];
$brand = $_REQUEST['brand'];

$data=array(
    'name'=> $name,
    'company'=>$company,
    'email'=>$email,
    'phone'=>$phone,
    'subject'=>$subject,
    'amount'=>$amount,
    'created_at'=>$created_at,
    'updated_at'=> $updated_at,
    'brand'     => $brand
);
$payload=json_encode($data);
$curl = curl_init();
curl_setopt_array($curl, array(
    CURLOPT_URL => "https://dashboard.ghostwritingfounder.com/api/quote",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "POST",
    CURLOPT_POSTFIELDS => $payload,
    CURLOPT_HTTPHEADER => array(
        'Content-Type: application/json',
    ),
));

$response = curl_exec($curl);

curl_close($curl);


$_SESSION['thanksMsg'] = $msg;

header("location:/thank-you/");