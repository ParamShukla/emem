Prediction_1 = "";
Prediction_2 = "";

Webcam.set({
width :340,
height : 300,
image_format : "png",
png_quality:100,

});

Camera = document.getElementById("camera");
Webcam.attach(Camera);

function Take_Snapshot() {
    Webcam.snap(function(data_uri){
 document.getElementById("result").innerHTML="<img id='resource' src='"+data_uri+"'>";

    });

}

console.log("ml5version:"+ml5.version);

Classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/tYyZPbSkR/model.json",model_loaded);

function model_loaded(){
    console.log("Model has been loaded.")

}

function bolbacchan(){
    Bol = window.speechSynthesis;
    bol_1 ="The first prediction is ,"+Prediction_1;
    bol_2 =" And The Second  prediction is, "+Prediction_2;
    New_bol =  new SpeechSynthesisUtterance(bol_1+bol_2);
    Bol.speak(New_bol);

}

