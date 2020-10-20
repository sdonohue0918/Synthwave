document.addEventListener("DOMContentLoaded", function() {
    keyHandler()
    soundHandler()
})

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