

// let chorusObj = {
//     freq: 1.5,
//     delay: 2.0,
//     range: 1.5
// }

// let wahObj = {
//     baseFreq: 1.5,
//     octaveSweep: 2.0,
//     decibels: 1.0,
// }



// class Effect {
//     constructor(synth) {
//         this.effect = synth.connect(effect) 
//     }

//     set distortion(v) {
//         const distortionEffect = new Tone.Distortion(v)
//         return this.effect = synth.connect(distortionEffect).toMaster()

//     }

//     set chorus() {
//         const chorusEffect = new Tone.Chorus(chorusObj.freq, chorusObj.delay, chorusObj.range)
//         return this.effect = synth.connect(chorusEffect).toMaster()
//     }

//     set wah() {
//         const wahEffect = new Tone.AutoWah(wahObj.baseFreq, wahObj.octaveSweep, wahObj.decibels)
//         return this.effect = synth.connect(wahEffect).toMaster()
//     }
// }