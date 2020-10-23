document.addEventListener("DOMContentLoaded", function() {
    getComments()
    keyHandler()
    soundHandler()
    sampleHandler()
    recordAudio()
    
})

function recordAudio() {
    window.AudioContext = window.AudioContext || window.webkitAudioContext
    //let context = new AudioContext()
    // if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia ({audio: true})
    .then(function(stream) {
    const mediaRecorder = new MediaRecorder(stream);
    const record = document.querySelector('#record');
    const stop = document.querySelector('.stop');
    record.onclick = function() {
    mediaRecorder.start();
    record.classList.add("active");
    }

    let chunks = [];

    mediaRecorder.ondataavailable = function(e) {
    chunks.push(e.data);
    }

    stop.onclick = function() {
    mediaRecorder.stop();
    record.classList.remove("active");
    }
    
    mediaRecorder.onstop = function(e) {
    disableSound()
    const soundClips = document.querySelector('#sound-clips');
    const clipContainer = document.createElement('article');
    const audio = document.createElement('audio');
    const deleteButton = document.createElement('button');

    clipContainer.classList.add('clip');
    audio.setAttribute('controls', '');
    deleteButton.innerHTML = "X";
    deleteButton.classList.add("delete")

    clipContainer.appendChild(audio);
    let oldOne = document.querySelector("#newRecording")
    if(oldOne) {
        oldOne.remove()
    }

    soundClips.appendChild(clipContainer);
    clipContainer.appendChild(deleteButton);

    const blob = new Blob(chunks, { 'type' : 'audio/wav' });
    chunks = [];
    const audioURL = window.URL.createObjectURL(blob);
    audio.src = audioURL;

    const formContainer = document.querySelector("#form-container")
    const form = document.createElement('form')
    form.id = "song-form"
    form.innerHTML = `
    <input type="text" name="name" placeholder="Enter a Name for your Song" >
    <input type="text" name="author" placeholder="Enter your Name" >
    <button id="song-submit" type="submit">Upload Your Song</button>`
    formContainer.append(form)

    const submitBtn = document.getElementById('song-submit')
    submitBtn.onclick = function() {
        // let blob = submitBtn.parentElement.src
        postSong(blob)
    }

    function postSong(audio) {
        let songForm = document.getElementById('song-form')
        let file = new File([audio], `${songForm["name"].value}.wav`, {'type': 'audio/wav'})
        let formData =  new FormData()
        // console.log(name)
        // console.log(author)
        // console.log(file)
        formData.append("name", songForm["name"].value)
        formData.append("author", songForm["author"].value)
        formData.append("file", file)

        const submit = document.getElementById("song-submit")

        let options = {
            method: 'POST',
            mode: 'no-cors',
            credentials: 'same-origin',
            body: formData
        }
        fetch('http://localhost:3000/songs/', options).then(function(response) {
            return response.json()
        }).then(function(json) {
            clearForm()
            console.log(json)
        }).catch(function(error) {
            console.log("error: " + error)
        })
        
        function clearForm() {
        let formContainer = document.getElementById('form-container')
        formContainer.innerHTML = ''
        let form = document.getElementById('song-form')
        }
    }

    deleteButton.onclick = function(e) {
    let evtTgt = e.target;
    console.dir(e.target)
    evtTgt.previousSibling.remove();
    evtTgt.remove();
    }
    }
    })
}

//////////////////////////////////////////////////////////////////////////
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

function sampleHandler() {
    document.addEventListener("click", e => {
        const keyboard = document.querySelector("#keyboard")
        if(e.target.matches("#samples1")) {
            //enableSound()
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
        else if(e.target.matches("#samples2")) {
            //enableSound()
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
        else if(e.target.matches("#samples3")) {
            //enableSound()
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
        } else if (e.target.matches("#test")) {
            getAllSongs()
        } else if (e.target.hasAttribute("data-song")) {
            getSongFile(e.target.dataset.song)
        }
    })
}

function disableSound() {
    const whiteKeys = document.getElementsByClassName('white-key')
    const blackKeys = document.getElementsByClassName('black-key')
    const blackKeyArray = [...blackKeys]
    const whiteKeyArray = [...whiteKeys]
    for (const key of whiteKeyArray) {
        key.classList.add('disabled')
    }

    for (const key of blackKeyArray) {
        key.classList.add('disabled')
    }
}

function enableSound() {
    const whiteKeys = document.getElementsByClassName('white-key')
    const blackKeys = document.getElementsByClassName('black-key')
    const blackKeyArray = [...blackKeys]
    const whiteKeyArray = [...whiteKeys]
    for (const key of whiteKeyArray) {
        key.classList.remove('disabled')
    }

    for (const key of blackKeyArray) {
        key.classList.remove('disabled')
    }

}

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
    let newLi = document.createElement("li")
    newLi.innerHTML = `<b>${comment.user.name}:</b> ${comment.content}`
    commentSection.append(newLi)
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
            getComments()
            form.reset()
        })
    }
}

function getAllSongs() {
    fetch('http://localhost:3000/songs').then(function(response) {
        return response.json()
    }).then(function(json) {
        renderSongList(json)
    })
}

function renderSongList(data) {
    const fetchButton = document.getElementById('test')
    fetchButton.disabled = true
    const listContainer = document.getElementById("song-list")
    for (const song of data) {
       let songLi = document.createElement('li')
       listContainer.append(songLi)
       songLi.textContent = `${song.author} : ${song.name}`
       let loadButton = document.createElement('button')
       loadButton.dataset.song = `${song.name}`
       songLi.append(loadButton)
    }
}

function getSongFile(song) {
    const playBar = document.getElementById("newRecording")
    playBar.src = `/Users/amydonohue/Flatiron/project3/proj3_final/Synthwave-backend/app/songs/${song}.wav`
    
    
    

}