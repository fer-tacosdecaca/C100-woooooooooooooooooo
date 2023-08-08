var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var Textbox = document.getElementById("textbox");


function start() {
    Textbox.innerHTML = "";
    recognition.start(); 
}
recognition.onresult = function(event) {

    console.log(event); 
   
    var Content = event.results[0][0].transcript;
   
       Textbox.innerHTML = Content;
       console.log(Content);
         
   }



   
function speak() {
 var kk = window.speechSynthesis
 speak_data = document.getElementById("textbox").value;
 var utterThis = new SpeechSynthesisUtterance(speak_data);
 kk.speak(utterThis);
}

