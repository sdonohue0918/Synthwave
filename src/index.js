


document.addEventListener("DOMContentLoaded", function() {
    
    // keyListener()
    // keyUpListener()
    
    
    //Audio Stream
    window.AudioContext = window.AudioContext || window.webkitAudioContext
    let context = new AudioContext()
    console.log(context)
    const audioStream = context.createMediaStreamDestination()
    const audioRecorder = new MediaRecorder(audioStream.stream)

    //Buffer Loader
    // let bufferloader = new BufferLoader(
    //     context,
    //     ['/Users/amydonohue/Flatiron/project3/proj3_d1/Synthwave/legowelt/SYNTH-MiniMoogStab1.wav',
    // '/Users/amydonohue/Flatiron/project3/proj3_d1/Synthwave/legowelt/SYNTH-MiniMoogStab2.wav'],
    // finishLoading
    // )

    // bufferloader.load()


    //Recording Functions

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


//Click Listener


document.addEventListener('click', e => {
    if (e.target.matches('#s')) {
        
        
        context.resume()
        console.log(context)
        


        
    } else if (e.target.matches('#stop')) {
        audioRecorder.stop()

        

    } else if (e.target.matches('#buffer')) {
        loadSound('https://s3-us-west-2.amazonaws.com/s.cdpn.io/858/outfoxing.mp3')
    
    }
})



 function finishLoading(soundArray) {
        let src1 = context.createBufferSource()
        let src2 = context.createBufferSource()
        src1.buffer = soundArray[0]
        src2.buffer = soundArray[1]
        src1.connect(context.destination)
        src2.connect(context.destination)

        document.addEventListener('keydown', e => {
            if (e.key === 'm') {
                context.resume()
            } else if (e.key === 'a') {
                src1.start()
            } else if (e.key === 's') {
                src2.start()
            }
        })
    }
            
           
function keyUpListener() {
        document.addEventListener('keydown', e => {
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
    


    
    
    document.addEventListener('click', e => {
        if (e.target.matches('#start')) {
            
            audioRecorder.start()
            


            
        } else if (e.target.matches('#stop')) {
            audioRecorder.stop()

            

        }
    })
    
    

    function keyListener() {


        document.addEventListener('keyup', e => {
            if (e.key === 'a') {
                
                const note = document.getElementById("C")
                note.dataset.status = "pressed"
                note.style.color = "yellow"
            } else if (e.key === 'w') {
                
                const note = document.getElementById("Db")
                note.dataset.status = "pressed"
                note.style.color = "yellow"
            } else if (e.key === 's') {
                
                const note = document.getElementById("D")
                note.dataset.status = "pressed"
                note.style.color = "yellow"
            } else if (e.key === 'e') {
                
                const note = document.getElementById("Eb")
                note.dataset.status = "pressed"
                note.style.color = "yellow"
            } else if (e.key === 'f') {
                
                const note = document.getElementById("E")
                note.dataset.status = "pressed"
                note.style.color = "yellow"
            } else if (e.key === 'g') {
                
                const note = document.getElementById("F")
                note.dataset.status = "pressed"
                note.style.color = "yellow"
            } else if (e.key === 'h') {
                
                const note = document.getElementById("Gb")
                note.dataset.status = "pressed"
                note.style.color = "yellow"
            } else if (e.key === 'u') {
                
                const note = document.getElementById("G")
                note.dataset.status = "pressed"
                note.style.color = "yellow"
            } else if (e.key === 'j') {
                
                const note = document.getElementById("Ab")
                note.dataset.status = "pressed"
                note.style.color = "yellow"
            } else if (e.key === 'i') {
                
                const note = document.getElementById("A")
                note.dataset.status = "pressed"
                note.style.color = "yellow"
            } else if (e.key === 'k') {
                
                const note = document.getElementById("Bb")
                note.dataset.status = "pressed"
                note.style.color = "yellow"
            } else if (e.key === 'l') {
                
                const note = document.getElementById("B")
                note.dataset.status = "pressed"
                note.style.color = "yellow"
            } else if (e.key === 'p') {
                
                const note = document.getElementById("C1")
                note.dataset.status = "pressed"
                note.style.color = "yellow"
            }
        })

    }

    




})




