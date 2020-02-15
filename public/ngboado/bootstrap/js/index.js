/* 
 This is not an accessible slider, it's a quick and easy one built in 5 mins. 
*/


/* very simple slider object, takes 4 parameters 

target - string of a class name / ID
autoPlay - Bool True/False
currentIndex - Int (0 - 999)
slideChangeSpeed - Int 

*/

/* Two methods 

changeSlide() - this loops through the target element, hides all elements - checks the currentIndex and unhides that value. Once complete
invokes the updateIndex()

updateIndex() - Checks to see if the current index is less than or equal to the length of slides, either updates the slide number or resets back to 0

*/

var carousel = {
    target: ".indexSlide",
    autoPlay: true,
    currentIndex: 0,
    length: null,
    slideChangeSpeed: 10000,
    changeSlide: function() {
      var target = document.querySelectorAll(this.target);
      var targetLength = target.length;
      this.length = target.length;
      for (var i = 0; i < targetLength; i++) {
        target[i].classList.add("fadeOut"); // hide all elements
  
        if (i == this.currentIndex) {
          target[i].classList.remove("fadeOut"); // remove the hidden class (showing the current index item)
        }
      }
      this.updateIndex(); // update the slide index 
    },
    updateIndex: function() {
      this.currentIndex >= this.length - 1 ? (this.currentIndex = 0) : (this.currentIndex = this.currentIndex + 1);
    }
  };
  
  // initial run
  carousel.changeSlide();
  
  
  // continous setInterval if carousel is set to autoplay
  if (carousel.autoPlay) {
    setInterval(function() {
      carousel.changeSlide();
    }, carousel.slideChangeSpeed);
  }