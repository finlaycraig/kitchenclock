//Thanks to Chris Coyier over at http://css-tricks.com for the majority of the JQuery below.
//
//The Code is fairly simple to follow along with. Just a case of turning the current time into an angle and applying that as a rotation transform to your hands. 
//
//
//I've added a little 'if' statement to check if this is the first time the hands are positioned so I can fade them in instead of them just appearing then moving after the first interval has passed.

$(document).ready(function() {

	  var handsIn = false;
 
      setInterval( function() {
      var hours = new Date().getHours();
      var mins = new Date().getMinutes();
      var hdegree = hours * 30 + (mins / 2);
      var hrotate = "rotate(" + hdegree + "deg)";
      
      $("#hour").css({"-moz-transform" : hrotate, "-webkit-transform" : hrotate});
      
      }, 1000 );


      setInterval( function() {
      var mins = new Date().getMinutes();
      var mdegree = mins * 6;
      var mrotate = "rotate(" + mdegree + "deg)";
      
      $("#min").css({"-moz-transform" : mrotate, "-webkit-transform" : mrotate});
      
      if (handsIn != true) {
      
      	$("#min,#hour").fadeIn("slow");
      	
      	handsIn = true;
      	
      }
          
      }, 1000 );
 
});