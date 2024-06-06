// ************************************
// PAGE CHANGES

// TASK : When user click on the nav link contact show the contact page
// Step 1 : Access the nav links
let navLinks = document.querySelectorAll(".navLinks");
// Access to the contact page
let contactPage = document.getElementById("contactPage");
let profilePage = document.getElementById("profilePage");
let projectsPage = document.getElementById("projectsPage");
// Step 2 : Listen for the user to click
// console.log(navLinks)
navLinks.forEach( thisLink => thisLink.addEventListener("click", function() {
    // Project Page
    if (thisLink === navLinks[0]){
        profilePage.classList.add("slidePagein");
        profilePage.classList.remove("slidePageout");
        projectsPage.classList.add("slidePageout");
        contactPage.classList.add("slidePageout");
    } else {
        profilePage.classList.remove("slidePagein");
        profilePage.classList.add("slidePageout");
    }

    // Project Page
    if (thisLink === navLinks[1]){
        projectsPage.classList.add("slidePagein");
        projectsPage.classList.remove("slidePageout");
        profilePage.classList.add("slidePageout");
        contactPage.classList.add("slidePageout");
    } else {
        projectsPage.classList.remove("slidePagein");
        projectsPage.classList.add("slidePageout");
    }
    
    // Contact Page
    if (thisLink === navLinks[2]){
        contactPage.classList.add("slidePagein");
        contactPage.classList.remove("slidePageout");
        profilePage.classList.add("slidePageout");
        projectsPage.classList.add("slidePageout");
    } else {
        contactPage.classList.remove("slidePagein");
        contactPage.classList.add("slidePageout");
        // profilePage.classList.remove("slidePageout");
    }
}));

// -- HEADER
// NAV BAR
navLinks.forEach( thisNav => thisNav.addEventListener("mouseenter", function() {
    thisNav.classList.add("navbarpop");
}));
navLinks.forEach( thisNav => thisNav.addEventListener("mouseleave", function() {
    thisNav.classList.remove("navbarpop");
}));

// MENU RESPONSIVE
let burgerMenu = document.querySelectorAll(".burgerMenu");
let navbarmenu = document.querySelectorAll(".navbarmenu")[0];
let bMenu = document.getElementById("menu");
let toggle = true;

burgerMenu.forEach (thisMenu => thisMenu.addEventListener("click", function() {
    if (toggle) {
        bMenu.src = "assets/images/assets portfol_close p.png";
    } else {
        bMenu.src = "assets/images/assets portfol_bmenu p.png";
    };
    toggle = !toggle;

    navbarmenu.classList.toggle("active");
}));

// -- PROFILE PAGE
// SERVICE POP UP
let sbox = document.querySelectorAll(".sbox");

sbox.forEach (thisBox => thisBox.addEventListener("mouseenter", function () {
    thisBox.classList.add("svcpop");
}));
sbox.forEach (thisBox => thisBox.addEventListener("mouseleave", function () {
    thisBox.classList.remove("svcpop");
}));

// -- PROJECT PAGE
// POP UP
let itembox = document.querySelectorAll(".itembox");

itembox.forEach(function(thisBox){
    thisBox.addEventListener("mouseenter", function(){
        thisBox.firstElementChild.classList.add("scale");
        thisBox.firstElementChild.nextElementSibling.classList.add("imgoverlaypop");
        thisBox.firstElementChild.nextElementSibling.nextElementSibling.classList.add("prjheaderpop");
        
    })
});

itembox.forEach(function(thisBox){
    thisBox.addEventListener("mouseleave", function(){
        thisBox.firstElementChild.classList.remove("scale");
        thisBox.firstElementChild.nextElementSibling.classList.remove("imgoverlaypop");
        thisBox.firstElementChild.nextElementSibling.nextElementSibling.classList.remove("prjheaderpop");
        
    })
});

// -- CONTACT PAGE
// INPUT AND SUBMIT SOUND 
// Step 1: Access the input firstName lastName & email & all submit button
let input = document.querySelectorAll(".inputs");
let msginput = document.querySelectorAll(".msgInput");
let submit = document.querySelectorAll(".submit");

// Step 2: Access audio
let fillAudio = document.getElementById("typeSND");
let submitAudio = document.getElementById("gravity");

// Step 3: Listen for user to type or press
input.forEach( thisInput => thisInput.addEventListener("focus", function (){
    fillAudio.play();
    // Step 3: Change style of the field
    thisInput.classList.add("fInput");
    // ACCESS THE LABEL OF AN INPUT
    thisInput.nextElementSibling.classList.add("fInputLabel");
}));
submit.forEach( thisSubmit => thisSubmit.addEventListener("focus", function (){
    submitAudio.play();
}));

// INPUT FIELDS STYLE
// Step 1: Access the input ALR HAVE IT
// Step 2: Listen for the field to be focused (UP)
// Step 4: Change style of the field LABEL
msginput.forEach( thisInput => thisInput.addEventListener("focus", function (){
    // ACCESS THE LABEL OF AN INPUT
    thisInput.nextElementSibling.classList.add("fmsgInputLabel");
}));

// SUBMIT BUTTON MESSAGE
// POP-UP CONFIRMATION MESSAGE
// Step 1: Access submit button
let submitBTN = document.getElementById("submit");
// Step 2: Access confirmation box
let confirmationBox = document.getElementById("confirmation");

submitBTN.addEventListener("click", function(event){
    let confirmationMessage = `Hey, ${input[0].value}! </br></br> Thank you for contacting me! I've got your message and will respond within 48 hours through your email, ${input[2].value}. </br></br> Looking forward to collaborate with you!`;
    // Step 3: prevent the default
    event.preventDefault();
    // Step 4: show the confirmation box
    confirmationBox.style.display = "flex";
    // validation
    // Show message
    confirmationText.innerHTML = confirmationMessage;
});

// CLOSE UP CONFIRMATION MESSAGE
let confirmationClose = document.getElementById("confirmationClose");
confirmationClose.addEventListener("click", function () {
    confirmationBox.style.display = "none";
});

// VALIDATION
// TASK 1: each time user leave the input, check for a value.
// Step 1: Access inputs (Alr have it)
// Step 2: Listen for the user to leave the input (blur)
input.forEach( thisInput => thisInput.addEventListener("blur", function(){
    console.log(thisInput.value);
    // Step 3: Create a function to check the input value
    // If the value is there, show Green Dot or NO ERROR
    // If it is empty show the error message
    if (thisInput.value === "") {
        // SHOW ERROR
        console.log ("FILL THE BLANK!!")
        thisInput.previousElementSibling.style.display = "block";
        thisInput.previousElementSibling.previousElementSibling.style.display = "none";
        thisInput.classList.add("inputError");
       console.log(thisInput.classList.contains("inputError"));
       let checkClassName = thisInput.classList.contains("inputError");
       console.log(checkClassName)
       if (checkClassName) {
           thisInput.addEventListener("focus", function(){
            thisInput.classList.remove("inputError");
            thisInput.previousElementSibling.style.display = "none";
            console.log("HELP!")
           })
       }
        // if input is on focus remove the errors
        // else empty
    } else {
        // NOT ERROR/GREEN LIGHT
        console.log ("GREAT!!")
        thisInput.previousElementSibling.style.display = "none";
        thisInput.previousElementSibling.previousElementSibling.style.display = "block";
        thisInput.classList.add("inputValid");
    };


}));
// TASK 2: when user click submit button, prevent default showing message
// Step 1: Access submit button (ALR DID)(line 50)
// Access confirmationBox (ALR DID)
let confirmationText = document.getElementById("confirmationText");
// Step 2: Listen for click
// Step 3: fire a function and show message
