let words = document.querySelectorAll(".word");
words.forEach((word)=>{
    let letters = word.textContent.split("");
    word.textContent="";
    letters.forEach((letter)=>{
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length -1;
words[currentWordIndex].style.opacity = "1";

let changeText = () => {
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];


    Array.from(currentWord.children).forEach((letter,i)=>{
        setTimeout(()=>{
            letter.className = "letter out";
       
        },i*80);
    });
    nextWord.style.opacity ="1";
    Array.from(nextWord.children).forEach((letter,i)=>{
        letter.className = "letter behind";
        setTimeout(()=>{
            letter.className = "letter in";
        },340 + i * 80);
    });
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex +1;
};

changeText();
setInterval(changeText,3000)


// circle skill ///////////////////////////////////////////

const circles = document.querySelectorAll('.circle');
circles.forEach(elem=>{
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots*marked/100);
    var points = "";
    var rotate = 360 / dots;

    for(let i=0;i<dots;i++){
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;


    const pointsMarked = elem.querySelectorAll('.points');
    for(let i=0;i<percent;i++){
        pointsMarked[i].classList.add('marked')
    }
})


// mix it up portfolio section


var mixer = mixitup('.portfolio-gallery');

//  active menu ///////////////////////////////////////////////////////////
let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');



function activeMenu(){
    let len =  section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop){}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll", activeMenu);



// sticky navbar //////////////////////////////////////////
const header = document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky", window.scrollY > 50)
});



//toggle icon/////////////////////////////////

let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("open");
}


window.onscroll = ()=>{
    menuIcon.classList.remove("bx-x");
    navlist.classList.remove("open");
}






// download cv button ///////////////////////////////////////

// document.getElementById('downloadBtn').addEventListener('click', function() {
//     // Replace 'your_resume.pdf' with the actual name of your resume file
//     var resumeUrl = 'RESUME_deva.pdf';

//     // Create an anchor element
//     var downloadLink = document.createElement('a');

//     // Set the download link's href attribute to the URL of your resume file
//     downloadLink.href = resumeUrl;

//     // Set the download attribute to specify the filename
//     downloadLink.download = 'RESUME_deva.pdf';

//     // Append the download link to the document body
//     document.body.appendChild(downloadLink);

//     // Trigger a click on the download link to start the download
//     downloadLink.click();

//     // Remove the download link from the document body
//     document.body.removeChild(downloadLink);
// });

// script.js

// Get references to the download and hire me links
var downloadLink = document.getElementById('downloadLink');
var hireMeLink = document.getElementById('hireMeLink');

// Add event listener for the download link
downloadLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default behavior of the anchor tag
    // Replace 'your_resume.pdf' with the actual name of your resume file
    var resumeUrl = 'RESUME_deva.pdf';
    // Create an anchor element
    var downloadLinkElement = document.createElement('a');
    // Set the download link's href attribute to the URL of your resume file
    downloadLinkElement.href = resumeUrl;
    // Set the download attribute to specify the filename
    downloadLinkElement.download = 'RESUME_deva.pdf';
    // Append the download link to the document body
    document.body.appendChild(downloadLinkElement);
    // Trigger a click on the download link to start the download
    downloadLinkElement.click();
    // Remove the download link from the document body
    document.body.removeChild(downloadLinkElement);
});

// No need for event listener for the hire me link if it's a regular link
// Users will be redirected to the contact.html page as specified in the href attribute













// script.js

// document.getElementById('sendMessageBtn').addEventListener('click', function() {
//     // Get form data
//     var formData = {
//         name: document.getElementById('name').value,
//         email: document.getElementById('email').value,
//         address: document.getElementById('address').value,
//         phone: document.getElementById('phone').value,
//         message: document.getElementById('message').value
//     };

//     // Send the form data to the server for processing
//     fetch('/api/send-message', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//     })
//     .then(response => response.json())
//     .then(data => {
//         // Handle the response from the server (if needed)
//         console.log(data);
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });
// });






