

<div class="floatbutton">
<!--     <div class="btns_wrap">
            
            <a href="javascript:;" class="chat_wrap" onclick="$zopim.livechat.window.toggle()">
              <span class="icoo"><i class="fa fa-comment"></i></span>
              <span>Chat With Us</span>
            </a>
            <a href="tel:+442038087061" class="call_wrap">
             <span class="icoo"><i class="fa fa-phone"></i></span>
              <span>+1 877 377 0874</span>
            </a>
          </div> -->


      
      <div class="banner-form">
        <h3>Chat With Us to <br><Strong>Avail 50% Discount</Strong></h3>
        <div class="banform">
          <div class="container">
            <div class="row">
                <div class="ban-form">
                  <form class="cmxform" id="bannerform"  method="POST" action="webpages/floatingFormController.php"><input type="hidden" name="route" value="/">   
          <input type="hidden" name="brand" value="logovalleynew">   
          <input type="hidden" name="tag" value="home-section">
          <input type="hidden" name="news" value="1"><input type="hidden" name="price" value="null">
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="fldset">
                          <input id="username" name="name" minlength="2" type="text" placeholder="Enter your name" required />
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="fldset">
                          <input id="cemail" type="email" name="email" placeholder="Enter email here" required>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="fldset">
                          <input id="phone-coun" name="phone" type="text" placeholder="Phone Number" onkeypress="return isNumberKey(event);" required />
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="fldset">
                          <textarea name="brief" id="" rows="7" placeholder="Talk About Your Project"></textarea>
                        </div>
                      </div>
                      
                      <div class="col-lg-12">
                        <div class="fldset">
                          <input name="submit" type="submit" placeholder="Connect With Us" required />
        
                        <input type="hidden" id="flocation" name="flocationURL" value="/website-design-development/" />
                        <input class="" type="hidden" name="fctry" value=" ">
                        <input type="hidden" name="fpc" value="">
                        <input type="hidden" name="cip" value="">
                      <input type="hidden" name="hiddencapcha" value="">
                      
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
            </div>
          </div>
        </div>  
      </div>
      
    </div>

<div class="ys-layer"></div>
<div class="ys-container" id="ys-container">
   <div class="ys-box">
       <a class="ys-popup-close ys-exit" href="javascript:;">x</a>
       <div class="ys-popup-content">
           <!-- <p>Are Your Sure?</p>
           <a href="#" class="ys-exit">Exit</a> -->

           <div class="popupform tabform clearfix  text-left">
           <figure style="background-image: url(assets/images/linda-dok.jpg);"> </figure>
           <span class="heading">Confused? </span>
             <h2 class="text-center">Our smart and friendly client support team is available to guide you through the creative process and answer all of your questions.</h2>
             <form method="POST" action="webpages/exitFormController.php">

               <div class="fldst btnattach">
                 <a class="callus" href="tel:+442038087061"> Free design consultation <i class="fa fa-phone"></i>+442038087061</a>
               </div>

               <div class="fldst">
                <p>Send us your number to speak with an actual human.</p>
                 <input id="phone-coun" name="fNumber" required="" type="text" onkeypress="return isNumberKey(event);" rangelength="[2,15]" placeholder="Enter phone here">
                 <button class="newbtn" type="submit">Submit</button>
              
                      <input type="hidden" id="location" name="flocationURL" value="/website-design-development/" />
                      <input type="hidden" name="ctry" value="">
                      <input type="hidden" name="pc" value="">
                      <input type="hidden" name="cip" value="">
                      <input type="hidden" name="hiddencapcha" value="">
               </div>

               
              
               <p class="lst-p">Not ready for a call? <a href="javascript:;" onclick="setButtonURL();"> Discuss with our strategist</a></span></p>

             </form>
           </div>
       </div>
   </div>
</div>






<script src="/assets/js/mlib.js "></script> 
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@10.13.0/dist/sweetalert2.all.min.js"></script>
<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.js"></script> -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/intlTelInput.min.js"></script>
<script src="/assets/js/jquery.cookie.js "></script>
<script src="/assets/js/functions.js "></script>
<script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=b24c63b6-64a3-4e62-b7ee-492f535de0cd"></script> 






<script src="../cdn.jsdelivr.net/npm/vanilla-lazyload%4012.0.0/dist/lazyload.min.js "></script>

<script>
   const phoneInputField = document.querySelector("#phone");
   const phoneInput = window.intlTelInput(phoneInputField, {
    initialCountry: "auto",
     geoIpLookup: getIp,
     utilsScript:
       "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
   });

   function getIp(callback) {
 fetch('https://ipinfo.io/json?token=e76fd2b326b24f', { headers: { 'Accept': 'application/json' }})
   .then((resp) => resp.json())
   .catch(() => {
     return {
       country: 'us',
     };
   })
   .then((resp) => callback(resp.country));
}

 </script>

<script>
  
  var myLazyLoad = new LazyLoad({
    elements_selector: ".lazy"
    // load_delay: 300 //adjust according to use case
});



function gotocontact(){
   $('html, body').animate({scrollTop:$(".mypackages").offset().top-100},1000);  
}



$(document).ready(function(){
    
    $('.floating_strip .rotatekaro a').on('click', function(e) {
      $('.floating_form').toggleClass("open"); //you can list several class names 
      $('body').toggleClass("notscroll");
      e.preventDefault();
});
    

});

// sticky social
$(document).scroll(function () {
    "use strict";
    var y = $(this).scrollTop();
    if (y > 800) {
        $('.floating_wrap').fadeIn();
    } else {
        $('.floating_wrap').fadeOut();
    }

    setTimeout(function(){  
    $("#modalForDiscount").modal("show");
    $('head').append('<script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=b24c63b6-64a3-4e62-b7ee-492f535de0cd"><\/script>');
    
    $(document).on('click','.liveChat',function(){
        $zopim.livechat.window.show();

    });
    $zopim(function() {
       $zopim.livechat.hideAll();
    });
}, 15000);


}); 


$(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });
    
    $(".zoom").hover(function(){
		
		$(this).addClass('transition');
	}, function(){
        
		$(this).removeClass('transition');
	});

</script>


<script type="text/javascript">
  function setButtonURL(){
  $zopim.livechat.window.toggle();
  }
</script>

<script src="https://cdn.jsdelivr.net/npm/sweetalert2@10.13.0/dist/sweetalert2.all.min.js"></script>

<script>
$('.freeCons').click(function(){

$('.floating_form').toggleClass("open");
})
</script>












