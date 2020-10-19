document.addEventListener("DOMContentLoaded", function() {
    const synth = new Tone.PolySynth(Tone.Synth).toMaster()

    //  function mapKey(key, octave) {
    //      return synth.triggerAttack(`${key.toUpperCase()}${octave}`)
    //  }

    

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




})




