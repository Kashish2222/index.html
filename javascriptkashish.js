//Data: assume we have a list of 2 images
let topImages = [{id: 0, image_url: "images/jfif.jfif"},
         {id: 1, image_url: "images/jfif.jfif"},
         ;

//Slideshow: Automatic
let autoSlideIndex = 0;//Initial slide = 0
function autoSlideShow() {
//Change the slide_index
  if (autoSlideIndex < topMovies.length - 1) {
    autoSlideIndex++;
  } else {
    autoSlideIndex = 0;
  }
  
  setTimeout(autoSlideShow, 2000);//Auto change slide every 2 seconds
}
autoSlideShow() // Call to run auto slideshow
