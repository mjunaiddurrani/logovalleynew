<?php 

// dont allow directly to get in php file




// ini_set('display_errors', 1);
// ini_set('display_startup_errors', 1);
// error_reporting(E_ALL);


if (isset($_SERVER['HTTPS'])) {
	$requesMet = "https";
}else{
	$requesMet = "http";
}


?>




<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
<base href="<?= $requesMet.'://'.$_SERVER['HTTP_HOST'].'/' ?>">

<link href="favicon.png" rel="icon" />
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300&amp;display=swap" rel="stylesheet">
<link rel='stylesheet' id='main-style-css'  href='../assets/css/mstyle.css' type='text/css' media='all' />
<link rel='stylesheet' id='main-style-css'  href='../assets/css/style.css' type='text/css' media='all' />
<link rel='stylesheet' id='main-style-css'  href='cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css' type="text/css" />


<style type="text/css">
img.wp-smiley,
img.emoji {
  display: inline !important;
  border: none !important;
  box-shadow: none !important;
  height: 1em !important;
  width: 1em !important;
  margin: 0 .07em !important;
  vertical-align: -0.1em !important;
  background: none !important;
  padding: 0 !important;
}
</style>



<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NF9QG64');</script>
<!-- End Google Tag Manager -->

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-7QZYTBVTXM"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-7QZYTBVTXM');
</script>
