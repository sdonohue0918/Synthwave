


document.addEventListener("DOMContentLoaded", function() {

//     const aud = new Audio('./audio.mp3');
//     aud.play().then( () => {
//   const stream = aud.captureStream();
//   const recorder = new MediaRecorder(stream);
//   recorder.ondataavailable = ...

// });
    
    
    window.AudioContext = window.AudioContext || window.webkitAudioContext
    let context = new AudioContext()
    let destination = context.createMediaStreamDestination()
    let recorder = new MediaRecorder(destination.stream)
    
   keyListener()
   keyUpListener()




//Click Listener


document.addEventListener('click', e => {
    if (e.target.matches('#s')) {
        context.resume()
        console.log(context)
    } else if (e.target.matches('#start')) {
        recorder.start()
        recordAudio()

    }
})


function recordAudio() {
    
    let chunks = []
    let constraints = {
        audio: true
    }

    navigator.mediaDevices.getUserMedia(constraints).then(function() {
        const stopBtn = document.getElementById('stop')
        stopBtn.onclick = function() {
            recorder.stop()
        }

        recorder.ondataavailable = function(e) {
            chunks.push(e.data)
        }

        recorder.onstop = function() {
            const audioTag = document.getElementById('newRecording')
            let blob = new Blob(chunks, {'type': 'audio/ogg; codecs=opus'})
            let newUrl = URL.createObjectURL(blob)
            audioTag.src = newUrl
        }
        
    }).catch(function(error) {
        console.log("shits fucked" + error)
    })
}

function playAudio(source) {
        
        
    let audio = new Audio(source)
    audio.play()

        
}
        
        
        

        
        
    
    
    

 
            
           
function keyUpListener() {
        document.addEventListener('keyup', e => {
            if(e.key === 'm') {
                context.resume()
                
            } else if (e.key === 'a') {
                
                const note = document.getElementById("C")
                note.dataset.status = "nopress"
                note.style.color = "black"
                
                
                
            } else if (e.key === 'w') {
                
                const note = document.getElementById("Db")
                note.dataset.status = "nopress"
                note.style.color = "black"
            } else if (e.key === 's') {
                
                const note = document.getElementById("D")
                note.dataset.status = "nopress"
                note.style.color = "black"
            } else if (e.key === 'e') {
                
                const note = document.getElementById("Eb")
                note.dataset.status = "nopress"
                note.style.color = "black"
            } else if (e.key === 'f') {
                
                const note = document.getElementById("E")
                note.dataset.status = "nopress"
                note.style.color = "black"
            } else if (e.key === 'g') {
                
                const note = document.getElementById("F")
                note.dataset.status = "nopress"
                note.style.color = "black"
            } else if (e.key === 'h') {
                
                const note = document.getElementById("Gb")
                note.dataset.status = "nopress"
                note.style.color = "black"
            } else if (e.key === 'u') {
                
                const note = document.getElementById("G")
                note.dataset.status = "nopress"
                note.style.color = "black"
            } else if (e.key === 'j') {
                
                const note = document.getElementById("Ab")
                note.dataset.status = "nopress"
                note.style.color = "black"
            } else if (e.key === 'i') {
                
                const note = document.getElementById("A")
                note.dataset.status = "nopress"
                note.style.color = "black"
            } else if (e.key === 'k') {
                
                const note = document.getElementById("Bb")
                note.dataset.status = "nopress"
                note.style.color = "black"
            } else if (e.key === 'l') {
                
                const note = document.getElementById("B")
                note.dataset.status = "nopress"
                note.style.color = "black"
            } else if (e.key === 'p') {
                
                const note = document.getElementById("C1")
                note.dataset.status = "nopress"
                note.style.color = "black"
            }
        })
    
    }
    


    function keyListener() {


        document.addEventListener('keydown', e => {
            if (e.key === 'a') {
                
                const note = document.getElementById("C")
                note.dataset.status = "pressed"
                note.style.color = "yellow"
                playAudio("./piano_mf/Piano.mf.C3.mp3")
            } else if (e.key === 'w') {
                
                const note = document.getElementById("Db")
                note.dataset.status = "pressed"
                note.style.color = "yellow"
                playAudio("./piano_mf/Piano.mf.Db3.mp3")
            } else if (e.key === 's') {
                
                const note = document.getElementById("D")
                note.dataset.status = "pressed"
                note.style.color = "yellow"
                playAudio("./piano_mf/Piano.mf.D3.mp3")
            } else if (e.key === 'e') {
                
                const note = document.getElementById("Eb")
                note.dataset.status = "pressed"
                note.style.color = "yellow"
                playAudio("./piano_mf/Piano.mf.Eb3.mp3")
            } else if (e.key === 'f') {
                
                const note = document.getElementById("E")
                note.dataset.status = "pressed"
                note.style.color = "yellow"
                playAudio("./piano_mf/Piano.mf.E3.mp3")
            } else if (e.key === 'g') {
                
                const note = document.getElementById("F")
                note.dataset.status = "pressed"
                note.style.color = "yellow"
                playAudio("./piano_mf/Piano.mf.F3.mp3")
            } else if (e.key === 'h') {
                
                const note = document.getElementById("Gb")
                note.dataset.status = "pressed"
                note.style.color = "yellow"
                playAudio("./piano_mf/Piano.mf.Gb3.mp3")
            } else if (e.key === 'u') {
                
                const note = document.getElementById("G")
                note.dataset.status = "pressed"
                note.style.color = "yellow"
                playAudio("./piano_mf/Piano.mf.G3.mp3")
            } else if (e.key === 'j') {
                
                const note = document.getElementById("Ab")
                note.dataset.status = "pressed"
                note.style.color = "yellow"
                playAudio("./piano_mf/Piano.mf.Ab3.mp3")
            } else if (e.key === 'i') {
                
                const note = document.getElementById("A")
                note.dataset.status = "pressed"
                note.style.color = "yellow"
                playAudio("./piano_mf/Piano.mf.A3.mp3")
            } else if (e.key === 'k') {
                
                const note = document.getElementById("Bb")
                note.dataset.status = "pressed"
                note.style.color = "yellow"
                playAudio("./piano_mf/Piano.mf.Bb3.mp3")
            } else if (e.key === 'l') {
                
                const note = document.getElementById("B")
                note.dataset.status = "pressed"
                note.style.color = "yellow"
                playAudio("./piano_mf/Piano.mf.B3.mp3")
            } else if (e.key === 'p') {
                
                const note = document.getElementById("C1")
                note.dataset.status = "pressed"
                note.style.color = "yellow"
                playAudio("./piano_mf/Piano.mf.C3.mp3")
            }
        })

    }

    




})




