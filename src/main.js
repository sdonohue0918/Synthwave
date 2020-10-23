var canvas, ctx, source, context, analyser, fbc_array, bars, bar_x, bar_width, bar_height

window.addEventListener("load", initMp3Player, false)
document.addEventListener("click", e => {
    context.resume()
})

function initMp3Player(){
    context = new window.AudioContext
    window.AudioContext = window.AudioContext || window.webkitAudioContext
    let audio = document.querySelector("#newRecording")
    audio.crossOrigin = "anonymous"
	analyser = context.createAnalyser()
	canvas = document.getElementById('audio_visual')
	ctx = canvas.getContext('2d')
	source = context.createMediaElementSource(audio)
	source.connect(analyser)
	analyser.connect(context.destination)
    frameLooper()
}

function frameLooper(){
	window.requestAnimationFrame(frameLooper)
	fbc_array = new Uint8Array(analyser.frequencyBinCount)
	analyser.getByteFrequencyData(fbc_array)
	ctx.clearRect(0, 0, canvas.width, canvas.height)
	ctx.fillStyle = '#4e9d00'
	bars = 100
	for (var i = 0; i < bars; i++) {
		bar_x = i * 3
		bar_width = 2
		bar_height = -(fbc_array[i] / 2)
		ctx.fillRect(bar_x, canvas.height, bar_width, bar_height)
	}
}