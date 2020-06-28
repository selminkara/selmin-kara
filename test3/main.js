// SMOOTH SCROLL

// $(document).ready(function(){
//   // Add smooth scrolling to all links
//   $("a").on('click', function(event) {

//     // Make sure this.hash has a value before overriding default behavior
//     if (this.hash !== "") {
//       // Prevent default anchor click behavior
//       event.preventDefault();

//       // Store hash
//       var hash = this.hash;

//       // Using jQuery's animate() method to add smooth page scroll
//       // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//       $('html, body').animate({
//         scrollTop: $(hash).offset().top
//       }, 800, function(){

//         // Add hash (#) to URL when done scrolling (default click behavior)
//         window.location.hash = hash;
//       });
//     } // End if
//   });
// });


// SECTION OPACITIES


// 		CLICK SIDEBAR LINKS

$('.head-link.bio').on('click', function(){
	$('.head-link').css({'opacity':'0.5'});
	$(this).css({'opacity':'1'});
	$('.section').css({'opacity':'0.5','background-color':'white'});
	$('#bio').css({'opacity':'1','background-color':'rgb(230,230,50)'});
})

$('.head-link.research').on('click', function(){
	$('.head-link').css({'opacity':'0.5'});
	$(this).css({'opacity':'1'});
	$('.section').css({'opacity':'0.5','background-color':'white'});
	$('#research').css({'opacity':'1','background-color':'rgb(230,230,50)'});
})

$('.head-link.cv').on('click', function(){
	$('.head-link').css({'opacity':'0.5'});
	$(this).css({'opacity':'1'});
	$('.section').css({'opacity':'0.5','background-color':'white'});
	$('#cv').css({'opacity':'1','background-color':'rgb(230,230,50)'});
})

$('.head-link.pub').on('click', function(){
	$('.head-link').css({'opacity':'0.5'});
	$(this).css({'opacity':'1'});
	$('.section').css({'opacity':'0.5','background-color':'white'});
	$('#pub').css({'opacity':'1','background-color':'rgb(230,230,50)'});
})

$('.head-link.teach').on('click', function(){
	$('.head-link').css({'opacity':'0.5'});
	$(this).css({'opacity':'1'});
	$('.section').css({'opacity':'0.5','background-color':'white'});
	$('#teach').css({'opacity':'1','background-color':'rgb(230,230,50)'});
})

$('.head-link.students').on('click', function(){
	$('.head-link').css({'opacity':'0.5'});
	$(this).css({'opacity':'1'});
	$('.section').css({'opacity':'0.5','background-color':'white'});
	$('#students').css({'opacity':'1','background-color':'rgb(230,230,50)'});
})

$('.head-link.events').on('click', function(){
	$('.head-link').css({'opacity':'0.5'});
	$(this).css({'opacity':'1'});
	$('.section').css({'opacity':'0.5','background-color':'white'});
	$('#events').css({'opacity':'1','background-color':'rgb(230,230,50)'});
})

$('.head-link.contact').on('click', function(){
	$('.head-link').css({'opacity':'0.5'});
	$(this).css({'opacity':'1'});
	$('.section').css({'opacity':'0.5','background-color':'white'});
	$('#contact').css({'opacity':'1','background-color':'rgb(230,230,50)'});
})


//		HOVER SIDEBAR TITLES

$('.head-link.bio').on('mouseover', function(){
	$('.head-link').css({'opacity':'0.5'});
	$(this).css({'opacity':'1'});
	$('.section').css({'opacity':'0.5','background-color':'white'});
	$('#bio').css({'opacity':'1','background-color':'rgb(230,230,50)'});
})

$('.head-link.research').on('mouseover', function(){
	$('.head-link').css({'opacity':'0.5'});
	$(this).css({'opacity':'1'});
	$('.section').css({'opacity':'0.5','background-color':'white'});
	$('#research').css({'opacity':'1','background-color':'rgb(230,230,50)'});
})

$('.head-link.cv').on('mouseover', function(){
	$('.head-link').css({'opacity':'0.5'});
	$(this).css({'opacity':'1'});
	$('.section').css({'opacity':'0.5','background-color':'white'});
	$('#cv').css({'opacity':'1','background-color':'rgb(230,230,50)'});
})

$('.head-link.pub').on('mouseover', function(){
	$('.head-link').css({'opacity':'0.5'});
	$(this).css({'opacity':'1'});
	$('.section').css({'opacity':'0.5','background-color':'white'});
	$('#pub').css({'opacity':'1','background-color':'rgb(230,230,50)'});
})

$('.head-link.teach').on('mouseover', function(){
	$('.head-link').css({'opacity':'0.5'});
	$(this).css({'opacity':'1'});
	$('.section').css({'opacity':'0.5','background-color':'white'});
	$('#teach').css({'opacity':'1','background-color':'rgb(230,230,50)'});
})

$('.head-link.students').on('mouseover', function(){
	$('.head-link').css({'opacity':'0.5'});
	$(this).css({'opacity':'1'});
	$('.section').css({'opacity':'0.5','background-color':'white'});
	$('#students').css({'opacity':'1','background-color':'rgb(230,230,50)'});
})

$('.head-link.events').on('mouseover', function(){
	$('.head-link').css({'opacity':'0.5'});
	$(this).css({'opacity':'1'});
	$('.section').css({'opacity':'0.5','background-color':'white'});
	$('#events').css({'opacity':'1','background-color':'rgb(230,230,50)'});
})

$('.head-link.contact').on('mouseover', function(){
	$('.head-link').css({'opacity':'0.5'});
	$(this).css({'opacity':'1'});
	$('.section').css({'opacity':'0.5','background-color':'white'});
	$('#contact').css({'opacity':'1','background-color':'rgb(230,230,50)'});
})


// 		HOVER SECTIONS/SECTION TITLES

$('#bio').on('mouseover', function(){
	$('.head-link').css({'opacity':'0.5'});
	$('.head-link.bio').css({'opacity':'1'});
	$('.section').css({'opacity':'0.5','background-color':'white'});
	$(this).css({'opacity':'1','background-color':'rgb(230,230,50)'});
})

$('#research').on('mouseover', function(){
	$('.head-link').css({'opacity':'0.5'});
	$('.head-link.research').css({'opacity':'1'});
	$('.section').css({'opacity':'0.5','background-color':'white'});
	$(this).css({'opacity':'1','background-color':'rgb(230,230,50)'});
})

$('#cv').on('mouseover', function(){
	$('.head-link').css({'opacity':'0.5'});
	$('.head-link.cv').css({'opacity':'1'});
	$('.section').css({'opacity':'0.5','background-color':'white'});
	$(this).css({'opacity':'1','background-color':'rgb(230,230,50)'});
})

$('#pub').on('mouseover', function(){
	$('.head-link').css({'opacity':'0.5'});
	$('.head-link.pub').css({'opacity':'1'});
	$('.section').css({'opacity':'0.5','background-color':'white'});
	$(this).css({'opacity':'1','background-color':'rgb(230,230,50)'});
})

$('#teach').on('mouseover', function(){
	$('.head-link').css({'opacity':'0.5'});
	$('.head-link.teach').css({'opacity':'1'});
	$('.section').css({'opacity':'0.5','background-color':'white'});
	$(this).css({'opacity':'1','background-color':'rgb(230,230,50)'});
})

$('#students').on('mouseover', function(){
	$('.head-link').css({'opacity':'0.5'});
	$('.head-link.students').css({'opacity':'1'});
	$('.section').css({'opacity':'0.5','background-color':'white'});
	$(this).css({'opacity':'1','background-color':'rgb(230,230,50)'});
})

$('#events').on('mouseover', function(){
	$('.head-link').css({'opacity':'0.5'});
	$('.head-link.events').css({'opacity':'1'});
	$('.section').css({'opacity':'0.5','background-color':'white'});
	$(this).css({'opacity':'1','background-color':'rgb(230,230,50)'});
})

$('#contact').on('mouseover', function(){
	$('.head-link').css({'opacity':'0.5'});
	$('.head-link.contact').css({'opacity':'1'});
	$('.section').css({'opacity':'0.5','background-color':'white'});
	$(this).css({'opacity':'1','background-color':'rgb(230,230,50)'});
})


// 		CLICK SECTIONS/SECTION TITLES

$('#bio').on('click', function(){
	$('.head-link').css({'opacity':'0.5'});
	$('.head-link.bio').css({'opacity':'1'});
	$('.section').css({'opacity':'0.5','background-color':'white'});
	$(this).css({'opacity':'1','background-color':'rgb(230,230,50)'});
})

$('#research').on('click', function(){
	$('.head-link').css({'opacity':'0.5'});
	$('.head-link.research').css({'opacity':'1'});
	$('.section').css({'opacity':'0.5','background-color':'white'});
	$(this).css({'opacity':'1','background-color':'rgb(230,230,50)'});
})

$('#cv').on('click', function(){
	$('.head-link').css({'opacity':'0.5'});
	$('.head-link.cv').css({'opacity':'1'});
	$('.section').css({'opacity':'0.5','background-color':'white'});
	$(this).css({'opacity':'1','background-color':'rgb(230,230,50)'});
})

$('#pub').on('click', function(){
	$('.head-link').css({'opacity':'0.5'});
	$('.head-link.pub').css({'opacity':'1'});
	$('.section').css({'opacity':'0.5','background-color':'white'});
	$(this).css({'opacity':'1','background-color':'rgb(230,230,50)'});
})

$('#teach').on('click', function(){
	$('.head-link').css({'opacity':'0.5'});
	$('.head-link.teach').css({'opacity':'1'});
	$('.section').css({'opacity':'0.5','background-color':'white'});
	$(this).css({'opacity':'1','background-color':'rgb(230,230,50)'});
})

$('#students').on('click', function(){
	$('.head-link').css({'opacity':'0.5'});
	$('.head-link.students').css({'opacity':'1'});
	$('.section').css({'opacity':'0.5','background-color':'white'});
	$(this).css({'opacity':'1','background-color':'rgb(230,230,50)'});
})

$('#events').on('click', function(){
	$('.head-link').css({'opacity':'0.5'});
	$('.head-link.events').css({'opacity':'1'});
	$('.section').css({'opacity':'0.5','background-color':'white'});
	$(this).css({'opacity':'1','background-color':'rgb(230,230,50)'});
})

$('#contact').on('click', function(){
	$('.head-link').css({'opacity':'0.5'});
	$('.head-link.contact').css({'opacity':'1'});
	$('.section').css({'opacity':'0.5','background-color':'white'});
	$(this).css({'opacity':'1','background-color':'rgb(230,230,50)'});
})




