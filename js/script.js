let index = 1;
        showSlides(index);

        // function to get the next and previous slides
        function nextSlide(n) {
            showSlides(index += n);
        }
    
        // function to get the current slide
        function getSlide(n) {
            showSlides(index = n);
        }

        // showing the slide according to the index number
        function showSlides(n) {
            let i;
            // storing the elements as an array with classs names as slideImages and nav-btn
            let slides = document.getElementsByClassName("slideImages");
            let nav1Btn = document.getElementsByClassName("nav1-btn");

            // if the length of the array index is overflown, then it is reset to 1
            if (n > slides.length) {
                index = 1
            }

            // if the length is less than one, then the index is moved into the last ui nav button
            if (n < 1) {
                index = slides.length
            }

            // looping through the array for slide images
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }

            // looping through the array for manipulating the nav buttons
            for (i = 0; i < nav1Btn.length; i++) {
                nav1Btn[i].className = nav1Btn[i].className.replace(" active", "");
            }
            slides[index - 1].style.display = "block";
            nav1Btn[index - 1].className += " active";
        }