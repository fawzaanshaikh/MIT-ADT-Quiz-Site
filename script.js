// Function that prevents browser from going back
function preventBack() { window.history.forward(); }  
setTimeout("preventBack()", 0);  
window.onunload = function () { null };

// Function to work on the "I'm Ready" button 
function startQuiz() {
    window.location.href = "question1.html";
}


