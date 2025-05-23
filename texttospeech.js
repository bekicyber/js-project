let speech = new SpeechSynthesisUtterance();

let voices = [];
let selectbtn = document.querySelector("select");
window.speechSynthesis.onvoiceschanged = () =>{
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0]
    voices.forEach((voice, i) => (selectbtn.options[i] = new Option(voice.name, i)));
        
    };
selectbtn.addEventListener("change" , () =>{
    speech.voice = voices[selectbtn.value];
});

document.querySelector("button").addEventListener("click",() => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});