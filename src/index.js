


document.addEventListener("DOMContentLoaded", function() {
    
    
    window.AudioContext = window.AudioContext || window.webkitAudioContext
    let context = new AudioContext()
    console.log(context)
    const audioStream = context.createMediaStreamDestination()
    const audioRecorder = new MediaRecorder(audioStream.stream)

   keyListener()
   keyUpListener()

    audioRecorder.addEventListener('dataavailable', function(e) {
        let dataChunks = []
        if (e.data.size > 0) {
            dataChunks.push(e.data)
            console.log(dataChunks)
            
        } else {
            console.log("did nothing")
        }

        return dataChunks
    })

    



    audioRecorder.addEventListener('stop', () => {
        let blob = newBlob(dataChunks, {'type': 'audio/ogg; codecs=opus'})
        const url = URL.createObjectURL(blob)
        const audioElement = document.querySelector('audio')
        audioElement.src=url
        console.log(audioElement)
    })


//Click Listener


document.addEventListener('click', e => {
    if (e.target.matches('#s')) {
        
        
        context.resume()
        console.log(context)
        


        
    }  else if (e.target.matches('#start')) {
        e.target.id = 'stop'

       
        
    
    }
})


function playAudio(source) {
        let options = { audioBitsPerSecond : 32000 }
        let chunks = []
        let audio = new Audio(source)
        
        const div = document.getElementById("records")
        div.append(audio)
        audio.id = "rec-test"
        audio.hidden = true

        
        
        audio.oncanplay = () => {
            audio.play()
            let ctx = context.createMediaElementSource(audio)
            console.log(ctx)
            
            
            // let recorder = new MediaRecorder(audioStream, options)
            // recorder.start()

            // recorder.ondataavailable = (e) => {
            //     chunks.push(e.data)
            //     console.log(chunks)
            // }

            // audio.onended = () => recorder.stop()

            // recorder.onstop = (e) => {
            //     let blob = new Blob(chunks, {'type': 'audio/ogg; codecs=opus'})
            //     let newSource = URL.createObjectURL(blob)
            //     console.log(newSource)
            // }
            
            
        }
        
        
        

        
        
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
    


    
        audioRecorder.addEventListener('dataavailable', function(e) {
            let dataChunks = []
            if (e.data.size > 0) {
                dataChunks.push(e.data)
                console.log(dataChunks)
                
            } else {
                console.log("did nothing")
            }

            return dataChunks
        })

        
    

    
        audioRecorder.addEventListener('stop', e => {
            let blob = newBlob(dataChunks, {'type': 'audio/ogg; codecs=opus'})
            const url = URL.createObjectURL(blob)
            const audioElement = document.querySelector('audio')
            audioElement.src=url
            console.log(audioElement)
        })
    


    

    
    

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




