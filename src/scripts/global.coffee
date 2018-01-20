document.write('<meta name="viewport" content="width=device-width,initial-scale=1.0"/>' \
	+ '<link rel="stylesheet" type="text/css" href="global.css"/>' \
	)

globalMain = () ->
	document.getElementById('header' )?.innerHTML = 'HEADER'
	document.getElementById('sidebar')?.innerHTML = 'SIDEBAR'
	document.getElementById('footer' )?.innerHTML = 'FOOTER'
	0
