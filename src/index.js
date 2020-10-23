document.addEventListener("DOMContentLoaded", function() {
    keyHandler()
    soundHandler()
    getUserMedia()
    sampleHandler()
    commentHandler()
    submitHandler()
})

function commentHandler() {
    function getComments() {
        fetch("http://localhost:3000/comments")
        .then(resp => resp.json())
        .then(comments => {
        renderComments(comments)
        })
    }

    function renderComments(comments) {
        for(comment of comments) {
            renderComment(comment)
        }
    }

    function renderComment(comment) {
        const commentSection = document.querySelector("#commentlist")
        console.log(comment)
        let newLi = document.createElement("li")
        newLi.innerHTML = `<b>${comment.user.name}:</b> ${comment.content}`
        console.log(newLi)
        commentSection.append(newLi)
    }
    getComments()
}

function submitHandler() {
    document.addEventListener("submit", e => {
        e.preventDefault()
        postComments()
    })

        function postComments() {
        const form = document.querySelector("form")
        let username = form.user.value
        let content = form.content.value
        const newComment = {user: username, content: content}
        let options = {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            },
            body: JSON.stringify(newComment)
        }

        fetch("http://localhost:3000/comments", options)
        .then(resp => resp.json())
        .then(comment => {
        console.log(comment)
        form.reset()
        })
    }
}

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
    const record = document.querySelector('#record');
    const stop = document.querySelector('.stop');
    record.onclick = function() {
    mediaRecorder.start();
    console.log(mediaRecorder.state);
    console.log("recorder started");
    record.classList.add("active");
    // record.style.color = "black";
    }

    let chunks = [];

    mediaRecorder.ondataavailable = function(e) {
    chunks.push(e.data);
    }

    stop.onclick = function() {
    mediaRecorder.stop();
    console.log(mediaRecorder.state);
    console.log("recorder stopped");
    record.classList.remove("active");
    }
    mediaRecorder.onstop = function(e) {
    console.log("recorder stopped2");
    const soundClips = document.querySelector('#sound-clips');
    // const clipName = prompt('Enter a name for your sound clip');
    const clipContainer = document.createElement('article');
    const clipLabel = document.createElement('p');
    const audio = document.createElement('audio');
    const deleteButton = document.createElement('button');

    clipContainer.classList.add('clip');
    audio.setAttribute('controls', '');
    deleteButton.innerHTML = "X";
    deleteButton.classList.add("delete")
    // clipLabel.innerHTML = clipName;

    clipContainer.appendChild(audio);
    // clipContainer.appendChild(clipLabel);
    let oldOne = document.querySelector("#newRecording")
    if(oldOne) {
        oldOne.remove()
    }
    // soundClips.innerHTML = "";
    soundClips.appendChild(clipContainer);
    clipContainer.appendChild(deleteButton);

    const blob = new Blob(chunks, { 'type' : 'audio/ogg; codecs=opus' });
    chunks = [];
    const audioURL = window.URL.createObjectURL(blob);
    audio.src = audioURL;

    deleteButton.onclick = function(e) {
    let evtTgt = e.target;
    console.dir(e.target)
    evtTgt.previousSibling.remove();
    evtTgt.remove();
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

// //////////////////////////
// function postSong(data) {

//     let options = {
//         method: 'POST',
//         mode: 'no-cors',
//         credentials: 'same-origin',
//         body: data
//     }
//     fetch('http://localhost:3000/songs/', options).then(function(response) {
//         return response.json()
//     }).then(function(text) {
//         clearForm()
//         console.log(text)
//     }).catch(function(error) {
//         console.log("error: " + error)
//     })
    
// }
// //////////////////////////
// document.addEventListener('click', e => {
//     if (e.target.matches('#song-submit')) {
//             e.preventDefault()
//             let formData =  new FormData()
//             let form = document.getElementById('song-form')
//             let track = document.getElementById('newRecording')
//             let song = track.src
//             let name = form["name"].value
//             let author = form["author"].value
//             formData.append("name", form["name"].value)
//             formData.append("author", form["author"].value)
//             formData.append("file", song)
//             let songOptions = {name: name, author: author, file: song}
                
//                 postSong(formData)
//     }
// })
// //////////////////////////////
// let formContainer = document.getElementById('form-container')
// formContainer.innerHTML = ''
// let form = document.getElementById('song-form')
// form.reset()
// ////////////////////////////


function soundHandler() {

    function playAudio(keyCode){
        var audio = new Audio('media/'+keyCode);
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

function sampleHandler() {
    document.addEventListener("click", e => {
        const keyboard = document.querySelector("#keyboard")
        if(e.target.matches("#samples1")) {
            keyboard.innerHTML = `
        <li data-note="261-C.mp3" data-key="65" id="C" data-status="nopress" class="white-key"> C
            <div data-note="277-C-sharp.mp3" data-key="87" id="Db" data-status="nopress" class="black-key">Db</div>
        </li>
        <li data-note="293-D.mp3" data-key="83" id="D" data-status="nopress" class="white-key">D
            <div data-note="311-D-sharp.mp3" data-key="69" id="Eb" data-status="nopress" class="black-key">Eb</div>
        </li>
        <li data-note="329-E.mp3" data-key="68" id="E" data-status="nopress" class="white-key">E</li>
        <li data-note="349-F.mp3" data-key="70" id="F" data-status="nopress" class="white-key">F
            <div data-note="369F-sharp.mp3" data-key="84" id="Gb" data-status="nopress" class="black-key">Gb</div>
        </li>
        <li data-note="391-G.mp3" data-key="71" id="G" data-status="nopress" class="white-key">G
            <div data-note="415-G-sharp.mp3" data-key="89" id="Ab" data-status="nopress" class="black-key">Ab</div>
        </li>
        <li data-note="440-A.mp3" data-key="72" id="A" data-status="nopress" class="white-key">A
            <div data-note="466-A-sharp.mp3" data-key="85" id="Bb" data-status="nopress" class="black-key">Bb</div>
        </li>
        <li data-note="495-B.mp3" data-key="74" id="B" data-status="nopress" class="white-key">B</li>
        <li data-note="523-C.mp3" data-key="75" id="C1" data-status="nopress" class="white-key">C</li>
            `
        }
        if(e.target.matches("#samples2")) {
            keyboard.innerHTML = `
        <li data-note="523-C.mp3" data-key="65" id="C" data-status="nopress" class="white-key"> C
            <div data-note="545-C-sharp.mp3" data-key="87" id="Db" data-status="nopress" class="black-key">Db</div>
        </li>
        <li data-note="587-D.mp3" data-key="83" id="D" data-status="nopress" class="white-key">D
            <div data-note="622-D-sharp.mp3" data-key="69" id="Eb" data-status="nopress" class="black-key">Eb</div>
        </li>
        <li data-note="659-E.mp3" data-key="68" id="E" data-status="nopress" class="white-key">E</li>
        <li data-note="698-F.mp3" data-key="70" id="F" data-status="nopress" class="white-key">F
            <div data-note="698-F-sharp.mp3" data-key="84" id="Gb" data-status="nopress" class="black-key">Gb</div>
        </li>
        <li data-note="783-G.mp3" data-key="71" id="G" data-status="nopress" class="white-key">G
            <div data-note="830-G-sharp.mp3" data-key="89" id="Ab" data-status="nopress" class="black-key">Ab</div>
        </li>
        <li data-note="880-A.mp3" data-key="72" id="A" data-status="nopress" class="white-key">A
            <div data-note="932-A-sharp.mp3" data-key="85" id="Bb" data-status="nopress" class="black-key">Bb</div>
        </li>
        <li data-note="987-B.mp3" data-key="74" id="B" data-status="nopress" class="white-key">B</li>
        <li data-note="1046-C.mp3" data-key="75" id="C1" data-status="nopress" class="white-key">C</li>
            `
        }
        if(e.target.matches("#samples3")) {
            keyboard.innerHTML = `
        <li data-note="Pad14.wav" data-key="65" id="C" data-status="nopress" class="white-key"> C
            <div data-note="Pad2.wav" data-key="87" id="Db" data-status="nopress" class="black-key">Db</div>
        </li>
        <li data-note="Pad3.wav" data-key="83" id="D" data-status="nopress" class="white-key">D
            <div data-note="Pad4.wav" data-key="69" id="Eb" data-status="nopress" class="black-key">Eb</div>
        </li>
        <li data-note="Pad5.wav" data-key="68" id="E" data-status="nopress" class="white-key">E</li>
        <li data-note="Pad6.wav" data-key="70" id="F" data-status="nopress" class="white-key">F
            <div data-note="Pad7.wav" data-key="84" id="Gb" data-status="nopress" class="black-key">Gb</div>
        </li>
        <li data-note="Pad8.wav" data-key="71" id="G" data-status="nopress" class="white-key">G
            <div data-note="Pad9.wav" data-key="89" id="Ab" data-status="nopress" class="black-key">Ab</div>
        </li>
        <li data-note="Pad10.wav" data-key="72" id="A" data-status="nopress" class="white-key">A
            <div data-note="Pad11.wav" data-key="85" id="Bb" data-status="nopress" class="black-key">Bb</div>
        </li>
        <li data-note="Pad12.wav" data-key="74" id="B" data-status="nopress" class="white-key">B</li>
        <li data-note="Pad13.wav" data-key="75" id="C1" data-status="nopress" class="white-key">C</li>
            `
        }
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