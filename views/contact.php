<!doctype html>
<html>

<head>
<?php include_once('include/styles.php') ?>
</head>

<body class="inner-pages contactpg">

<?php include_once('include/header.php') ?>

<section class="inner-banner  contact d-flex" style="background-image: url(assets/images/banners/contact.jpg);">
  <div class="container align-self-center">
    <div class="row">
      <div class="col-lg-12 col-xl-12 text-center">
        <div class="home-banner-content">
                <h1>Set a meeting with  our professionals</h1>
                <p class="subtitle">Call us today to discuss your project with our team of industry-proven professionals.</p>
                
                

              </div>
    </div>
  </div>
</section>


<section class="sec-padding contactfold" >
  <div class="container">
    <div class="row">
      <div class="col-lg-8 inner-content">
        <h2>Contact Us</h2>
        <p>Looking for a way to contact us? You can contact us anytime by filling out the form below or by manually sending out an email at marketing@logovalley.co.uk </p>
        <div class="form-box-main clearfix">
          <h2>We would like to hear from you</h2>
          <form class="cmxform" id="contactForm" method="POST" action="https://logovalley.co.uk/webpages/packageFormController.php">
            <div class="row">
              <div class="col-md-6">
                <label class="field-txt">Name <span>*</span></label>
                  <input id="username" name="Name" minlength="2" type="text" placeholder="Enter your name" required />
             </div>
              <div class="col-md-6">
                <label class="field-txt">Email <span>*</span></label>
                <input id="cemail" type="email" name="Email" placeholder="Enter email here" required>
             </div>
             <div class="col-md-6">
                <label class="field-txt">Phone Number<span>*</span></label>
               <input id="phone-country" name="Number" type="number" placeholder="Phone Number" required/>
             </div>
             <div class="col-md-6">
                <label class="field-txt">Service Name <span>*</span></label>
                <select  name="Services">
                  <option value="-1">Interested In</option>
                <option value="logo design">Logo Design</option>
                <option value="logo Animation">logo Animation</option>
                <option value="Branding">Branding</option>
                <option value="2D/3D Illustration">2D/3D Illustration</option>
                <option value="Creative Copy Writing">Creative Copy Writing</option>
                <option value="Website Design">Website Design</option>
                </select>
             </div>
             <!-- <div class="col-md-12">-->
             <!--   <label class="field-txt">Enter your URL <span>*</span></label>-->
             <!--     <input id="weburl"  name="SiteUrl" minlength="10" type="text" placeholder="https://"  />-->
             <!--</div>-->
              
             
             
              
            <div class="col-md-12">
                <label class="field-txt">Detail about your business. <span>*</span></label>
                <textarea name="Message" placeholder="Enter message here" /></textarea>
             </div>
            <div class="col-md-12">
                <input class="submit" type="submit" value="Submit" />
                <input class="" type="hidden" name="ctry" value="" />
                <input type="hidden" name="pc" value="">
                <input type="hidden" name="hiddencapcha" value="">
             </div>
             </div>
          </form>
        </div>
      </div>
      <div class="col-lg-4 sidebar"> 
        <h4>What we offer</h4>
<!-- <ul class="sidebar-list"> -->
<div class="accordion contact-acord">
  <div class="quest-section"> <a class="quest-title " href="#accordion-1">Professional Logo Design</a>
    <div id="accordion-1" class="quest-content">
      <p>Your logo design is a key part of your brand identity. We work with businesses from around the world to help create easy to recognize logos.</p>
      <a href="logo-design.html">Read more...</a>
    </div>
  </div>
  <div class="quest-section"> <a class="quest-title" href="#accordion-2">Logo Animations</a>
    <div id="accordion-2" class="quest-content">
      <p>Our logo animations experts are creative thinkers that aim to influence your targeted audience through video content that’s out of this world. </p>
      <a href="logo-animation.html">Read more...</a>
    </div>
  </div>
  <div class="quest-section"> <a class="quest-title" href="#accordion-3">Brand Identity Development</a>
    <div id="accordion-3" class="quest-content">
      <p>Similar to how people are judged by their personalities, companies worldwide are judged by their brand identity. </p>
      <a href="branding.html">Read more...</a>
    </div>
  </div>
  <div class="quest-section"> <a class="quest-title" href="#accordion-4">Video Animation Solutions</a>
    <div id="accordion-4" class="quest-content">
      <p>We are specialized in providing high-quality 2D and 3D animations to several national and foreign companies. We focus on creativity and quality and try not to make the "garden shadow" work! Yes, don't be surprised by us.</p>
      <a href="video-animation.html">Read more...</a>
    </div>
  </div>
  <div class="quest-section"> <a class="quest-title" href="#accordion-5">Get An Interactive Website Design </a>
    <div id="accordion-5" class="quest-content">
      <p>We develop and design dynamic, economical, and easy to use websites. We have a team of professional designers and developers that are proficient to handle complex projects.</p>
      <a href="web-design.html">Read more...</a>
    </div>
  </div>
</div>
<!-- </ul> -->
<div class="side-banner"> <img class="img-fluid" src="assets/images/contact-side.gif" alt="*" /> </div>
  
      </div>
    </div>
  </div>
</section>

<?php include_once('include/footer.php') ?>

</main>

<?php include_once('include/scripts.php') ?>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "logovalley",
  "url": "https://logovalley.co.uk/",
  "logo": "https://logovalley.co.uk/assets/images/logo-dark.png"
}
</script>





</body>

</html>