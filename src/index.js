


document.addEventListener("DOMContentLoaded", function() {


    
    
    window.AudioContext = window.AudioContext || window.webkitAudioContext
    let context = new AudioContext()
    
    
   keyListener()
   keyUpListener()




//Click Listener


document.addEventListener('click', e => {
    if (e.target.matches('#s')) {
        context.resume()
        console.log(context)
        //getFile()
    } else if (e.target.matches('#start')) {
        
        recordAudio()
        

    } else if (e.target.matches('#song-submit')) {
            e.preventDefault()
            
    }            
})


function recordAudio() {
    
    let chunks = []
    let constraints = {
        audio: true
    }

     navigator.mediaDevices.getUserMedia(constraints).then(function(stream) {
        let streamRecorder = new MediaRecorder(stream)
        streamRecorder.start()
        
        
        const stopBtn = document.getElementById('stop')
        stopBtn.onclick = function() {
            streamRecorder.stop()
        }

        streamRecorder.ondataavailable = function(e) {
            chunks.push(e.data)
        }

        streamRecorder.onstop = function() {
            const audioTag = document.getElementById('newRecording')
            let blob = new Blob(chunks, {'type': 'audio/mpeg-3'})
            let newUrl = URL.createObjectURL(blob)
            audioTag.src = newUrl
            let formContainer = document.getElementById('form-container')
            const form = document.createElement('form')
            form.id = "song-form"
            form.innerHTML = `<input type="text" name="name" placeholder="Enter a Name for your Song" >
                                <input type="text" name="author" placeholder="Enter your Name" >
                                
                                <button id="song-submit" type="submit">Upload Your Song</button>`
            formContainer.append(form)

            
            const submitBtn = document.getElementById('song-submit')
            submitBtn.onclick = function() {
                postSong(blob)
            }

    
            
            

            
            
            
        }
        
    }).catch(function(error) {
        console.log("error: " + error)
    })
}

function playAudio(source) {
        
        
    let audio = new Audio(source)
    audio.play()
    audio.context = context
    console.log(audio.context)

        
}
        
        
function postSong(audio) {
    let formData =  new FormData()
    let songForm = document.getElementById('song-form')
    let name = songForm["name"].value
    console.log(name)
    let author = songForm["author"].value
    console.log(author)
    formData.append("name", songForm["name"].value)
    formData.append("author", songForm["author"].value)
    formData.append("file", audio)

            
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
    
   
   


}

function clearForm() {
    let formContainer = document.getElementById('form-container')
    formContainer.innerHTML = ''
    let form = document.getElementById('song-form')
    

}

        
function getFile() {


    options = {
        method: "GET",
        headers: {
            "content-type" : "audio/mpeg-3"
        }
    }
    fetch(`http://localhost:3000/songs/20`, options).then(function(response) {
        return response.blob()
    }).then(function(blob) {
        const playBar = document.getElementById('newRecording')
        source = URL.createObjectURL(blob)
        playBar.src = source
        

        

       
    })

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




