$(document).ready(function() {

$(".toggleme").on("click", function() {
  event.preventDefault();
    $(".fadeout").toggleClass("fadein");

});

});


$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


//ECSMA 6 Function declaration.

window.onscroll = () => {
  
  	let screenPosition = window.pageYOffset; 	
    const element = document.querySelector("#toTopBtn"); 
    if (screenPosition>50) {
    element.classList.remove("none"); }
        else {
            element.classList.add("none"); 
        }
}



