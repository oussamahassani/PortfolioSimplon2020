/* menu stiky */
 <script>
   window.onscroll = function () { myFunction() };
   var navbar = document.getElementById("navbar");
   var sticky = navbar.offsetTop;
   function myFunction() {
     if (window.pageYOffset >= sticky) {
       navbar.classList.add("sticky")
     } else {
       navbar.classList.remove("sticky");
     }
   }
 </script>
/*inisialisation wow et animation-*/
 <script>
   new WOW().init();
 </script>
 <script>
   $(function () {
   $('.dev').textillate({
       in: {
           effect: 'rollIn'
       },
       out: { effect: 'hinge' },
       loop: true
   });
)
 /*  $(function () {
     $('.dev').textillate({
       loop: true,
       in: { effect: 'fadeinRightBig' },
       out: { effect: 'hinge' }
     });
   })
  */
   $(function() {
  $('.JS').textillate({
     loop: true,
     in: { effect: 'tada' },
     out: { effect: 'flipOutY' }
  });
});
  
  
  
 </script>
 <script>
   $(document).ready(function () {
     $(document).on("scroll", onScroll);
     //smoothscroll
     $('a[href^="#"]').on('click', function (e) {
       e.preventDefault();
       $(document).off("scroll");
       $('a').each(function () {
         $(this).removeClass('active');
       })
       $(this).addClass('active');
       var target = this.hash,
         menu = target;
       $target = $(target);
       $('html, body').stop().animate({
         'scrollTop': $target.offset().top + 2
       }, 500, 'swing', function () {
         window.location.hash = target;
         $(document).on("scroll", onScroll);
       });
     });
   });
   
   function onScroll(event) {
     var scrollPos = $(document).scrollTop();
     $('#navbarResponsive a').each(function () {
   var currLink = $(this);
   var refElement = $(currLink.attr("href"));
   if(!refElement.length) return;  // if the length is 0 (nothing selected) skip the rest of this iteration where t
   if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
       $('#navbarResponsive ul li a').removeClass("active");
       currLink.addClass("active");
   } else {
       currLink.removeClass("active");
   }
);
     /*
     var scrollPos = $(document).scrollTop();
     $('#navbarResponsive a').each(function () {
       let currLink = $(this);
       let refElement = $(currLink.attr("href"));
       if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
         $('#navbarResponsive ul li a').removeClass("active");
         currLink.addClass("active");
       }
       else {
         currLink.removeClass("active");
       }
     });*/
   }
 </script>