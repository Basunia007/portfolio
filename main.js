var typed= new Typed(".text",
    {
        strings: ["Frontend Developer", "Web Developer"],
        typeSpeed:100,
        backSpeed:100,
        backDelay:1000,
        loop:true
    }
);

document.addEventListener('scroll', function () {
    const skillsSection = document.getElementById('Skills');
    const technicalBars = document.querySelectorAll('.progress-line span');
    const radialBars = document.querySelectorAll('.path');

    if (skillsSection.getBoundingClientRect().top < window.innerHeight) {
        // Trigger technical bars animation
        technicalBars.forEach(bar => bar.style.width = bar.getAttribute('data-skill') + '%');
        
        // Trigger radial bars animation
        radialBars.forEach((path, index) => {
            const percentage = path.getAttribute('data-skill'); // You can set data-skill in your HTML for each path
            path.style.strokeDashoffset = 502 - (502 * (percentage / 100));
        });
    }
});

const circles = document.querySelectorAll('.circle');
circles.forEach(elem=>{
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots*marked/100);
    var points = "";
    var rotate = 360 / dots;

    for(let i = 0; i< dots ; i++){
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points; 

    const pointsMarked = elem.querySelectorAll('.points');
    for(let i=0; i<percent ; i++){
        pointsMarked[i].classList.add('marked')
    }
})