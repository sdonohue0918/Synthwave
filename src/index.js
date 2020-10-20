document.addEventListener("DOMContentLoaded", function() {
    keyHandler()
    soundHandler()
    getUserMedia()
})

function getUserMedia() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        console.log('getUserMedia supported.');
    navigator.mediaDevices.getUserMedia (
      // constraints - only audio needed for this app
    {
        audio: true
    })
      // Success callback
    .then(function(stream) {
    const mediaRecorder = new MediaRecorder(stream);
    const record = document.querySelector('.record');
    const stop = document.querySelector('.stop');
    record.onclick = function() {
    mediaRecorder.start();
    console.log(mediaRecorder.state);
    console.log("recorder started");
    record.style.background = "red";
    record.style.color = "black";
    }

    let chunks = [];

    mediaRecorder.ondataavailable = function(e) {
    chunks.push(e.data);
    }

    stop.onclick = function() {
    mediaRecorder.stop();
    console.log(mediaRecorder.state);
    console.log("recorder stopped");
    record.style.background = "";
    record.style.color = "";
    }
    mediaRecorder.onstop = function(e) {
    console.log("recorder stopped2");
    const soundClips = document.querySelector('.sound-clips');
    const clipName = prompt('Enter a name for your sound clip');

    const clipContainer = document.createElement('article');
    const clipLabel = document.createElement('p');
    const audio = document.createElement('audio');
    const deleteButton = document.createElement('button');

    clipContainer.classList.add('clip');
    audio.setAttribute('controls', '');
    deleteButton.innerHTML = "Delete";
    clipLabel.innerHTML = clipName;

    clipContainer.appendChild(audio);
    clipContainer.appendChild(clipLabel);
    clipContainer.appendChild(deleteButton);
    soundClips.appendChild(clipContainer);

    const blob = new Blob(chunks, { 'type' : 'audio/ogg; codecs=opus' });
    chunks = [];
    const audioURL = window.URL.createObjectURL(blob);
    audio.src = audioURL;

    deleteButton.onclick = function(e) {
    let evtTgt = e.target;
    evtTgt.parentNode.parentNode.removeChild(evtTgt.parentNode);
    }
}
    })
      // Error callback
    .catch(function(err) {
        console.log('The following getUserMedia error occured: ' + err);
    }
);
    } else {
        console.log('getUserMedia not supported on your browser!');
    }
    
}

function soundHandler() {

    function playAudio(keyCode){
        var audio = new Audio('media/'+keyCode+'.mp3');
        audio.play();
    }
    function pressKey(keyCode){
        let key = document.querySelectorAll("[data-key='"+keyCode+"']")[0];
        if (key && key.classList.contains('is-active') == false) {
        key.classList.add('is-active'); 
        playAudio(key.dataset.note);
        }
    }
    function releaseKey(keyCode){
        let key = document.querySelectorAll("[data-key='"+keyCode+"']")[0];
        if (key) {
            key.classList.remove('is-active'); 
        }
    }
    document.addEventListener("keydown",function(event){
        pressKey(event.keyCode);
    })
    document.addEventListener("keyup",function(event){
        releaseKey(event.keyCode);
    })
}


function keyHandler() {

    
    document.addEventListener('keydown', e => {
        if (e.key === 'a') {
            const note = document.getElementById("C")
            note.dataset.status = "pressed"
        } else if (e.key === 'w') {
            const note = document.getElementById("Db")
            note.dataset.status = "pressed"
        } else if (e.key === 's') {
            const note = document.getElementById("D")
            note.dataset.status = "pressed"
        } else if (e.key === 'e') {
            const note = document.getElementById("Eb")
            note.dataset.status = "pressed"
        } else if (e.key === 'd') {
            const note = document.getElementById("E")
            note.dataset.status = "pressed"
        } else if (e.key === 'f') {
            const note = document.getElementById("F")
            note.dataset.status = "pressed"
        } else if (e.key === 't') {
            const note = document.getElementById("Gb")
            note.dataset.status = "pressed"
        } else if (e.key === 'g') {
            const note = document.getElementById("G")
            note.dataset.status = "pressed"
        } else if (e.key === 'y') {
            const note = document.getElementById("Ab")
            note.dataset.status = "pressed"
        } else if (e.key === 'h') {
            const note = document.getElementById("A")
            note.dataset.status = "pressed"
        } else if (e.key === 'u') {
            const note = document.getElementById("Bb")
            note.dataset.status = "pressed"
        } else if (e.key === 'j') {
            const note = document.getElementById("B")
            note.dataset.status = "pressed"
        } else if (e.key === 'k') {
            const note = document.getElementById("C1")
            note.dataset.status = "pressed"
        }
    })

    document.addEventListener('keyup', e => {
        if (e.key === 'a') {
            const note = document.getElementById("C")
            note.dataset.status = "nopress"
        } else if (e.key === 'w') {
            const note = document.getElementById("Db")
            note.dataset.status = "nopress"
        } else if (e.key === 's') {
            const note = document.getElementById("D")
            note.dataset.status = "nopress"
        } else if (e.key === 'e') {
            const note = document.getElementById("Eb")
            note.dataset.status = "nopress"
        } else if (e.key === 'd') {
            const note = document.getElementById("E")
            note.dataset.status = "nopress"
        } else if (e.key === 'f') {
            const note = document.getElementById("F")
            note.dataset.status = "nopress"
        } else if (e.key === 't') {
            const note = document.getElementById("Gb")
            note.dataset.status = "nopress"
        } else if (e.key === 'g') {
            const note = document.getElementById("G")
            note.dataset.status = "nopress"
        } else if (e.key === 'y') {
            const note = document.getElementById("Ab")
            note.dataset.status = "nopress"
        } else if (e.key === 'h') {
            const note = document.getElementById("A")
            note.dataset.status = "nopress"
        } else if (e.key === 'u') {
            const note = document.getElementById("Bb")
            note.dataset.status = "nopress"
        } else if (e.key === 'j') {
            const note = document.getElementById("B")
            note.dataset.status = "nopress"
        } else if (e.key === 'k') {
            const note = document.getElementById("C1")
            note.dataset.status = "nopress"
        }
    })

}