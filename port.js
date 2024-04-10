document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Here you can add code to handle the form submission, such as sending the data to a server
        console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
        
        alert('Message sent successfully!');
    });
});

const slides=document.querySelectorAll(".gallery img");
let slideIndex=0;
let interValId=null;

// initialSlider()
document.addEventListener("DOMContentLoaded",initialSlider)
function initialSlider(){
    if(slides.length>0){
       slides[slideIndex].classList.add("displaySlide");
       interValId= setInterval(nextSlide,5000);
      
    }
}
function showSlide(index){
    if(index>=slides.length){
         slideIndex=0;
    }
    else if(index<0){
        slideIndex=slides.length-1
    }
    slides.forEach(slide=>{
        slide.classList.remove("displaySlide")
    })
    slides[slideIndex].classList.add("displaySlide")
}
function prevSlide(){
    clearInterval(interValId)
      slideIndex--;
      showSlide(slideIndex)
}
function nextSlide(){
     slideIndex++
     showSlide(slideIndex)
}