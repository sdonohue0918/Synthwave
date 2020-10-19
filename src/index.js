document.addEventListener("DOMContentLoaded", function() {
    const synth = new Tone.PolySynth(Tone.Synth).toMaster()

     function mapKey(key, octave) {
         return synth.triggerAttack(`${key.toUpperCase()}${octave}`)
     }

    document.addEventListener('keydown', e => {
        if (e.key === 'a') {
            synth.triggerAttack("C4")

        } else if (e.key === 'w') {
            synth.triggerAttack("Db4")
        } else if (e.key === 's') {
            synth.triggerAttack("D4")
        } else if (e.key === 'e') {
            synth.triggerAttack("Eb4")
        } else if (e.key === 'f') {
            synth.triggerAttack("E4")
        } else if (e.key === 'g') {
            synth.triggerAttack("F4")
        } else if (e.key === 'h') {
            synth.triggerAttack("Gb4")
        } else if (e.key === 'u') {
            synth.triggerAttack("G4")
        } else if (e.key === 'j') {
            synth.triggerAttack("Ab4")
        } else if (e.key === 'i') {
            synth.triggerAttack("A4")
        } else if (e.key === 'k') {
            synth.triggerAttack("Bb4")
        } else if (e.key === 'l') {
            synth.triggerAttack("B4")
        } else if (e.key === 'p') {
            synth.triggerAttack("C5")
        }
    })

    document.addEventListener('keyup', e => {
        if (e.key === 'a') {
            synth.triggerRelease("C4")
            console.log(e.key)

        } else if (e.key === 'w') {
            synth.triggerRelease("Db4")
        } else if (e.key === 's') {
            synth.triggerRelease("D4")
        } else if (e.key === 'e') {
            synth.triggerRelease("E4")
        } else if (e.key === 'f') {
            synth.triggerRelease("Eb4")
        } else if (e.key === 'g') {
            synth.triggerRelease("F4")
        } else if (e.key === 'h') {
            synth.triggerRelease("Gb4")
        } else if (e.key === 'u') {
            synth.triggerRelease("G4")
        } else if (e.key === 'j') {
            synth.triggerRelease("Ab4")
        } else if (e.key === 'i') {
            synth.triggerRelease("A4")
        } else if (e.key === 'k') {
            synth.triggerRelease("Bb4")
        } else if (e.key === 'l') {
            synth.triggerRelease("B4")
        } else if (e.key === 'p') {
            synth.triggerRelease("C5")
        }
    })




})




