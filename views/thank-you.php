
<html lang="en-US">
<head>
<?php include_once('include/styles.php');?>
<!-- <title>Get an interactive user friendly website and grow your business</title>
<meta name="description"  content="Logo Valley is a digital design agency specializing in branding, animation, mobile and web design and development." /> -->






<style>

.header-home{border-bottom:none;background: #fff;}
.header-home:hover{background:#fff;}
.homepage_style .header-home .menu ul li a{color:#000;}
.homepage_style .header-home:hover .menu ul li a{color:#000;}
.homepage_style .header-home.fixed:hover .menu ul li a{color:#fff}
.homepage_style.hoverheader .header-home .logo img.whitelogo{display:block;}
.homepage_style.hoverheader .header-home .logo img.colorlogo{display: none;}
.homepage_style.hoverheader .header-home:hover .logo img.whitelogo{display:block;}
.homepage_style.hoverheader .header-home:hover .logo img.colorlogo{display: none;}
.homepage_style .header-home ul.rightnav li a{color:#000;}

.header-home.fixed .menu.show{background:#000;}
.header-home.fixed .hamburger-inner,.header-home.fixed .hamburger-inner::before,.header-home.fixed .hamburger-inner::after{background:#fff;}

.top-home .content h1.title{color:#000;}
.top-home .content p{color:#000;}
.myticks li{color:#000;}

.homecounter p.counter,.homecounter p.nan{margin-bottom:0;}
.company-top .list .item{margin:10px 30px 5px;}

@media (max-width: 767px){
  .height-dog-2{max-width:100%;}
  .homecounter.company-top {
    padding-top: 0;
}
.myhome .content{padding-top:100px;}
}


</style>
</head>

<body class="home blog homepage_style homeclass hoverheader home-bd">

<div class="app-content">
      <div class="main">

        

<?php include_once('include/header.php');?>



<section class="inner-banner d-flex" style="background-image: url(assets/images/banners/portfolio.jpg);">
  <div class="container align-self-center">
    <div class="row">
      <div class="col-lg-8 col-xl-8">
        <div class="inner-banner-content">
          <!--<h5>Best SEO Agency</h5>-->
                 <h1 class="title for-anim-1">
                    <span><i><?php if(isset($_SESSION['thanksMsg'])){ echo $_SESSION['thanksMsg'];} ?></i></span>

                </h1>
        </div>
      </div>
      <div class="col-lg-4 lgonly">
        <!-- <figure>
          <img src="assets/images/client-testimonials.png" alt="">
        </figure> -->
      </div>
    </div>
  </div>
</section>

















<?php include_once('include/footer.php');?>

    </div>
    </div>




<?php include_once('include/scripts.php');?>

    


</body>

</html>
