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
       
      if(Content == "chupa el baño"){
        speak()
      }


       
   }



   

camera = document.getElementById("camára");
Webcam.set({ 
    width:360, 
    height:250, 
    image_format : 'jpeg', 
    jpeg_quality:90 
});

function speak() {
    var kk = window.speechSynthesis
    speak_data = document.getElementById("textbox").value;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    kk.speak(utterThis);
    Webcam.attach(camera)
    setTimeout(function() { takeselfie(); save(); }, 5000);
    

   }
function takeserfie(){
    Webcam.snap(function(data_uri)
    {
        document.getElementById("foto").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>'
    });
}7
function save() { link = document.getElementById("link"); image = document.getElementById("selfie_image").src ;
link.href= image; link.click(); 
}


       