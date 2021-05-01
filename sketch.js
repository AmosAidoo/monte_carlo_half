let size, x, y, trianglePoints
let points
const limit = 1000

// let capturer = new CCapture( { format: 'png', framerate: 60 } )

function setup() {
	let canvas = createCanvas(600, 480)
	size = 300
	frameRate(60)
	x = width/2 - size/2
	y = height/2 + size/2
	points = []
	console.log(document.getElementById(canvas.id()))
	// randomSeed(0)
}

function draw() {
	// if (frameCount === 1) {
	// 	capturer.start()
	// }

	trianglePoints = 0
	background(210)

	strokeWeight(1)
	stroke(0)

	rect(width/2 - size/2, height/2 - size/2, size, size)
	line(width/2 + size/2, height/2 - size/2, width/2 - size/2, height/2 + size/2)

	strokeWeight(5)

	// Values are going to be mapped to values between 0 and 1
	let rX = random(x, x+size)
	let rY = random(y, y-size)

	points.push({x: rX, y: rY})

	points.map( pnt => {
		if (pnt.y > (540 - (pnt.x))) {
			// The lower right triangle
			stroke("red")
			console.log(pnt.x, pnt.y, "red")
			trianglePoints++
		} else {
			stroke("blue")
			console.log(pnt.x, pnt.y, "blue")
		}

		point(pnt.x, pnt.y)
		stroke(0)
	})

	strokeWeight(1)
	textFont("Helvetica")
	textSize(24)
	text("Number of points: " + points.length, 10, 20)

	text("Approximation of half: " + trianglePoints / points.length, 10, 50)

	// if (points.length == limit) {
	// 	noLoop()
	// 	capturer.stop()
	// 	capturer.save()
	// 	return
	// }
	// capturer.capture(canvas)
}