// let wavBuffer = null

// window.AudioContext = window.AudioContext || window.webkitAudioContext

// let context = new AudioContext()

// function loadSound(url) {
//     let request = new XMLHttpRequest()
//     request.open('GET', url, true)
//     request.responseType = 'arraybuffer'

//     request.onload = function() {
//         context.decodeAudioData(request.response, function(buffer) {
//             wavBuffer = buffer
//         }, onerror = function() {
//             console.log("error")
//         })
//     }
//     console.log(request.response)
//     request.send()
    
// }


// function playSound(buffer, context) {
//     let source = context.createBufferSource()
//     source.buffer = buffer
//     source.connect(context.destination)
//     source.start(0)
// }