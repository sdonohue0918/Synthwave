document.addEventListener("DOMContentLoaded", function() {
    const synth = new Tone.PolySynth(Tone.Synth).toMaster()
    //Synth Created

    
            
    const audioContext = new AudioContext()
    const osc = audioContext.createOscillator()
            //console.log(audioContext)
    const audioStream = audioContext.createMediaStreamDestination()
            //console.log(audioStream)
    const audioRecorder = new MediaRecorder(audioStream.stream)
            //synth.connect(audioStream)
    synth.connect(audioStream)
    
    
    
    
    
    
    
    
    
    
    
    
    
    keyListener()
    keyUpListener()
    

    


    function keyUpListener() {
        document.addEventListener('keyup', e => {
            if (e.key === 'a') {
                synth.triggerRelease("C4")
                const note = document.getElementById("C")
                note.dataset.status = "nopress"
                note.style.color = "black"
                
            } else if (e.key === 'w') {
                synth.triggerRelease("Db4")
                const note = document.getElementById("Db")
                note.dataset.status = "nopress"
                note.style.color = "black"
            } else if (e.key === 's') {
                synth.triggerRelease("D4")
                const note = document.getElementById("D")
                note.dataset.status = "nopress"
                note.style.color = "black"
            } else if (e.key === 'e') {
                synth.triggerRelease("Eb4")
                const note = document.getElementById("Eb")
                note.dataset.status = "nopress"
                note.style.color = "black"
            } else if (e.key === 'f') {
                synth.triggerRelease("E4")
                const note = document.getElementById("E")
                note.dataset.status = "nopress"
                note.style.color = "black"
            } else if (e.key === 'g') {
                synth.triggerRelease("F4")
                const note = document.getElementById("F")
                note.dataset.status = "nopress"
                note.style.color = "black"
            } else if (e.key === 'h') {
                synth.triggerRelease("Gb4")
                const note = document.getElementById("Gb")
                note.dataset.status = "nopress"
                note.style.color = "black"
            } else if (e.key === 'u') {
                synth.triggerRelease("G4")
                const note = document.getElementById("G")
                note.dataset.status = "nopress"
                note.style.color = "black"
            } else if (e.key === 'j') {
                synth.triggerRelease("Ab4")
                const note = document.getElementById("Ab")
                note.dataset.status = "nopress"
                note.style.color = "black"
            } else if (e.key === 'i') {
                synth.triggerRelease("A4")
                const note = document.getElementById("A")
                note.dataset.status = "nopress"
                note.style.color = "black"
            } else if (e.key === 'k') {
                synth.triggerRelease("Bb4")
                const note = document.getElementById("Bb")
                note.dataset.status = "nopress"
                note.style.color = "black"
            } else if (e.key === 'l') {
                synth.triggerRelease("B4")
                const note = document.getElementById("B")
                note.dataset.status = "nopress"
                note.style.color = "black"
            } else if (e.key === 'p') {
                synth.triggerRelease("C5")
                const note = document.getElementById("C1")
                note.dataset.status = "nopress"
                note.style.color = "black"
            }
        })
    
    }
    


    function handleAudioData(recorder) {
        recorder.addEventListener('dataavailable', function(e) {
            let dataChunks = []
            if (e.data.size > 0) {
                dataChunks.push(e.data)
                console.log(dataChunks)
                
            } else {
                console.log("did nothing")
            }

            return dataChunks
        })

        processAudioData(audioRecorder)
    }

    function processAudioData(recorder) {
        recorder.addEventListener('stop', e => {
            let blob = newBlob(dataChunks, {'type': 'audio/ogg; codecs=opus'})
            const url = URL.createObjectURL(blob)
            const audioElement = document.querySelector('audio')
            audioElement.src=url
        })
    }


    
    
    document.addEventListener('click', e => {
        if (e.target.matches('button')) {
            const button = e.target
            button.classList.add('recording')
            audioRecorder.start()
            handleAudioData(audioRecorder)


            
        } else if (e.target.matches('.recording')) {
            button.classList.remove('recording')

            

        }
    })
    
    

    function keyListener() {


        document.addEventListener('keydown', e => {
            if (e.key === 'a') {
                synth.triggerAttack("C4")
                const note = document.getElementById("C")
                note.dataset.status = "pressed"
                note.style.color = "yellow"
            } else if (e.key === 'w') {
                synth.triggerAttack("Db4")
                const note = document.getElementById("Db")
                note.dataset.status = "pressed"
                note.style.color = "yellow"
            } else if (e.key === 's') {
                synth.triggerAttack("D4")
                const note = document.getElementById("D")
                note.dataset.status = "pressed"
                note.style.color = "yellow"
            } else if (e.key === 'e') {
                synth.triggerAttack("Eb4")
                const note = document.getElementById("Eb")
                note.dataset.status = "pressed"
                note.style.color = "yellow"
            } else if (e.key === 'f') {
                synth.triggerAttack("E4")
                const note = document.getElementById("E")
                note.dataset.status = "pressed"
                note.style.color = "yellow"
            } else if (e.key === 'g') {
                synth.triggerAttack("F4")
                const note = document.getElementById("F")
                note.dataset.status = "pressed"
                note.style.color = "yellow"
            } else if (e.key === 'h') {
                synth.triggerAttack("Gb4")
                const note = document.getElementById("Gb")
                note.dataset.status = "pressed"
                note.style.color = "yellow"
            } else if (e.key === 'u') {
                synth.triggerAttack("G4")
                const note = document.getElementById("G")
                note.dataset.status = "pressed"
                note.style.color = "yellow"
            } else if (e.key === 'j') {
                synth.triggerAttack("Ab4")
                const note = document.getElementById("Ab")
                note.dataset.status = "pressed"
                note.style.color = "yellow"
            } else if (e.key === 'i') {
                synth.triggerAttack("A4")
                const note = document.getElementById("A")
                note.dataset.status = "pressed"
                note.style.color = "yellow"
            } else if (e.key === 'k') {
                synth.triggerAttack("Bb4")
                const note = document.getElementById("Bb")
                note.dataset.status = "pressed"
                note.style.color = "yellow"
            } else if (e.key === 'l') {
                synth.triggerAttack("B4")
                const note = document.getElementById("B")
                note.dataset.status = "pressed"
                note.style.color = "yellow"
            } else if (e.key === 'p') {
                synth.triggerAttack("C5")
                const note = document.getElementById("C1")
                note.dataset.status = "pressed"
                note.style.color = "yellow"
            }
        })

    }

    // document.addEventListener('keydown', e => {
    //     if (e.key === 'a') {
    //         synth.triggerAttack("C4")
    //         const note = document.getElementById("C")
    //         note.dataset.status = "pressed"
    //         note.style.color = "yellow"
    //     } else if (e.key === 'w') {
    //         synth.triggerAttack("Db4")
    //         const note = document.getElementById("Db")
    //         note.dataset.status = "pressed"
    //         note.style.color = "yellow"
    //     } else if (e.key === 's') {
    //         synth.triggerAttack("D4")
    //         const note = document.getElementById("D")
    //         note.dataset.status = "pressed"
    //         note.style.color = "yellow"
    //     } else if (e.key === 'e') {
    //         synth.triggerAttack("Eb4")
    //         const note = document.getElementById("Eb")
    //         note.dataset.status = "pressed"
    //         note.style.color = "yellow"
    //     } else if (e.key === 'f') {
    //         synth.triggerAttack("E4")
    //         const note = document.getElementById("E")
    //         note.dataset.status = "pressed"
    //         note.style.color = "yellow"
    //     } else if (e.key === 'g') {
    //         synth.triggerAttack("F4")
    //         const note = document.getElementById("F")
    //         note.dataset.status = "pressed"
    //         note.style.color = "yellow"
    //     } else if (e.key === 'h') {
    //         synth.triggerAttack("Gb4")
    //         const note = document.getElementById("Gb")
    //         note.dataset.status = "pressed"
    //         note.style.color = "yellow"
    //     } else if (e.key === 'u') {
    //         synth.triggerAttack("G4")
    //         const note = document.getElementById("G")
    //         note.dataset.status = "pressed"
    //         note.style.color = "yellow"
    //     } else if (e.key === 'j') {
    //         synth.triggerAttack("Ab4")
    //         const note = document.getElementById("Ab")
    //         note.dataset.status = "pressed"
    //         note.style.color = "yellow"
    //     } else if (e.key === 'i') {
    //         synth.triggerAttack("A4")
    //         const note = document.getElementById("A")
    //         note.dataset.status = "pressed"
    //         note.style.color = "yellow"
    //     } else if (e.key === 'k') {
    //         synth.triggerAttack("Bb4")
    //         const note = document.getElementById("Bb")
    //         note.dataset.status = "pressed"
    //         note.style.color = "yellow"
    //     } else if (e.key === 'l') {
    //         synth.triggerAttack("B4")
    //         const note = document.getElementById("B")
    //         note.dataset.status = "pressed"
    //         note.style.color = "yellow"
    //     } else if (e.key === 'p') {
    //         synth.triggerAttack("C5")
    //         const note = document.getElementById("C1")
    //         note.dataset.status = "pressed"
    //         note.style.color = "yellow"
    //     }
    // })

    // document.addEventListener('keyup', e => {
    //     if (e.key === 'a') {
    //         synth.triggerRelease("C4")
    //         const note = document.getElementById("C")
    //         note.dataset.status = "nopress"
    //         note.style.color = "black"
            
    //     } else if (e.key === 'w') {
    //         synth.triggerRelease("Db4")
    //         const note = document.getElementById("Db")
    //         note.dataset.status = "nopress"
    //         note.style.color = "black"
    //     } else if (e.key === 's') {
    //         synth.triggerRelease("D4")
    //         const note = document.getElementById("D")
    //         note.dataset.status = "nopress"
    //         note.style.color = "black"
    //     } else if (e.key === 'e') {
    //         synth.triggerRelease("Eb4")
    //         const note = document.getElementById("Eb")
    //         note.dataset.status = "nopress"
    //         note.style.color = "black"
    //     } else if (e.key === 'f') {
    //         synth.triggerRelease("E4")
    //         const note = document.getElementById("E")
    //         note.dataset.status = "nopress"
    //         note.style.color = "black"
    //     } else if (e.key === 'g') {
    //         synth.triggerRelease("F4")
    //         const note = document.getElementById("F")
    //         note.dataset.status = "nopress"
    //         note.style.color = "black"
    //     } else if (e.key === 'h') {
    //         synth.triggerRelease("Gb4")
    //         const note = document.getElementById("Gb")
    //         note.dataset.status = "nopress"
    //         note.style.color = "black"
    //     } else if (e.key === 'u') {
    //         synth.triggerRelease("G4")
    //         const note = document.getElementById("G")
    //         note.dataset.status = "nopress"
    //         note.style.color = "black"
    //     } else if (e.key === 'j') {
    //         synth.triggerRelease("Ab4")
    //         const note = document.getElementById("Ab")
    //         note.dataset.status = "nopress"
    //         note.style.color = "black"
    //     } else if (e.key === 'i') {
    //         synth.triggerRelease("A4")
    //         const note = document.getElementById("A")
    //         note.dataset.status = "nopress"
    //         note.style.color = "black"
    //     } else if (e.key === 'k') {
    //         synth.triggerRelease("Bb4")
    //         const note = document.getElementById("Bb")
    //         note.dataset.status = "nopress"
    //         note.style.color = "black"
    //     } else if (e.key === 'l') {
    //         synth.triggerRelease("B4")
    //         const note = document.getElementById("B")
    //         note.dataset.status = "nopress"
    //         note.style.color = "black"
    //     } else if (e.key === 'p') {
    //         synth.triggerRelease("C5")
    //         const note = document.getElementById("C1")
    //         note.dataset.status = "nopress"
    //         note.style.color = "black"
    //     }
    // })




})




