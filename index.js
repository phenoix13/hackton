{
    let currentSlide = 0;
    const totalSlides = 4; 
    let direction = 1; 
    
    function showSlide(index) {
        const slides = document.querySelector('.slides');
    
        if (index >= totalSlides) {
            currentSlide = totalSlides - 1;
            direction = -1;
        } else if (index < 0) {
            currentSlide = 0;
            direction = 1; 
        } else {
            currentSlide = index;
        }
    
        const offset = -currentSlide * 100; 
        slides.style.transform = `translateX(${offset}%)`;
    }
    
    function changeSlide(directionChange) {
        showSlide(currentSlide + directionChange);
    }
    
    function autoSlide() {
        setInterval(() => {
            changeSlide(direction);
            if (currentSlide === totalSlides - 1 || currentSlide === 0) {
                direction *= -1; 
            }
        }, 3000); 
    }
    
    autoSlide();
    showSlide(currentSlide);
}
{
    var na = document.getElementById("name");
    var em = document.getElementById("mail");
    var co = document.getElementById("message");
    
    function clearForm() {
        console.log(na.value);
        na.value = "";
        em.value = "";
        co.value = "";
    }
    
    function submitForm(event) {
        event.preventDefault(); 
        if (na.checkValidity() && em.checkValidity() && co.checkValidity()) {
            alert("Your message has been sent, and we will reply as soon as possible.");
        } else {
            if (!na.checkValidity()) {
                alert("Please enter a valid name.");
            } else if (!em.checkValidity()) {
                alert("Please enter a valid email.");
            } else if (!co.checkValidity()) {
                alert("Please enter your message.");
            }
        }
        clearForm();
    }
}