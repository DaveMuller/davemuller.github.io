var slideimages = new Array()
var slidelinks = new Array()

function slideshowimages() {
    for (i = 0; i < slideshowimages.arguments.length; i++) {
        slideimages[i] = new Image()
        slideimages[i].src = slideshowimages.arguments[i]
    }
}

function slideshowlinks() {
    for (i = 0; i < slideshowlinks.arguments.length; i++)
        slidelinks[i] = slideshowlinks.arguments[i]
}

		slideshowimages("images/M1.jpg","images/M2.jpg","images/M3.jpg","images/M4.jpg","images/M5.jpg")

		var slideshowspeed=1000

		var whichimage=0
		function slideit(){
		if (!document.images)
		return
		document.images.slide.src=slideimages[whichimage].src
		whichlink=whichimage
		if (whichimage<slideimages.length-1)
		whichimage++
		else
		whichimage=0
		setTimeout("slideit()",slideshowspeed)
		}
		slideit()
			<script src = "js/daytime.js"></script>
		</script>
      </div>