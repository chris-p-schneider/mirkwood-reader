function createGFont1() {
	const gFonts1 = document.createElement('link');
	gFonts1.setAttribute('class', 'mirkwood-reader');
	gFonts1.setAttribute('rel', 'preconnect');
	gFonts1.setAttribute('href', 'https://fonts.googleapis.com');
	return gFonts1;	
}

function createGFont2() {
	const gFonts2 = document.createElement('link');
	gFonts2.setAttribute('class', 'mirkwood-reader');
	gFonts2.setAttribute('rel', 'preconnect');
	gFonts2.setAttribute('href', 'https://fonts.gstatic.com');
	gFonts2.setAttribute('crossorigin', '');
	return gFonts2;	
}

function createGFont3() {
	const gFonts3 = document.createElement('link');
	gFonts3.setAttribute('class', 'mirkwood-reader');
	gFonts3.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');
	gFonts3.setAttribute('rel', 'stylesheet');
	return gFonts3;
}

function createStyles() {
	const styles = document.createElement('style');
	styles.setAttribute('class', 'mirkwood-reader');
	styles.innerHTML = `
		/* Mirkwood Reader Styles */
		@media screen and (max-width: 650px) {
			:root {
				font-size: 14px;
			}
		}
		:root {
			transition: color .2s ease-in-out;
			transition: background-color .2s ease-in-out;
		}
		html, body {
			min-height: 100vh;
		}
		html, body {
			position: relative;
		    background-color: hsla(0, 0%, 7.5%, 1.0);
		    color: white !important;
		    font-family: 'Inter', sans-serif;
		}
		body {
		    padding: 1rem 1rem 3rem 1rem;
		    background-image: none;
		    margin: 0;
		}
		div {
			padding: 0 !important;
			margin: 0 !important;
		}
		pre {
		    font-family: 'Ubuntu Mono', monospace;
		    padding: 1rem !important;
		    font-size: 1.05rem;
		    overflow-x: scroll;
		}
		pre.prettyprint {
			filter: invert();
		}
		h1 {
			margin-top: 0 !important;
		    padding-bottom: .5rem;
		    border-bottom: 1px solid hsla(0, 0%, 50%, 1.0);
		}
		h3 {
		    background-color: hsla(0, 0%, 12%, 1.0);
		    padding: .5rem;
		    margin: 1rem 0 .5rem 0;
		}
		ul:not(li ul), ol {
			margin: 1rem 0 !important;
		}
		blockquote {
			padding: 1rem;
			margin: 0 0 1rem 0;
			font-size: .9rem;
			font-weight: 300;
			background-color: hsla(0, 0%, 10%, 1);
		}
		blockquote h2, 
		blockquote h3 {
			margin-top: 0;
			background-color: hsla(0, 0%, 7.5%, 1);
		} 
		blockquote p:last-child {
			margin-bottom: 0;
		}
		a, a:active {
		    color: #FFB400 !important;
		}
		a:visited {
		    color: #A37914 !important;
		}
		table {
			width: 100%;
			overflow-x: scroll;
			font-size: .85rem;
			margin: 0 0 .5rem 0;
			padding: 0;
			border-collapse: collapse;
		}
		th, td {
			padding: 5px;
		}
		tr:hover {
			background-color: hsla(0, 0%, 12%, 1.0);
		}
		tr:hover td:hover {
			background-color: hsla(0, 0%, 17%, 1.0);
			color: #F3EDC2;
		}
		img {
			display: block;
			width: calc(100% - 2rem);
			margin: .5rem auto;
		}
		hr {
			border: 1px solid hsla(0, 0%, 34%, .67);
		}
		div.clearfix {
			display: flex;
			flex-flow: row nowrap;
			justify-content: flex-start;
		}
		div.column.menu {
			padding: 0 1rem 0 0 !important;
			width: fit-content;
		}
		div.column.menu ul {
			margin: 0 !important;
			padding: 0;
		}
		div.column.menu li {
			padding: 5px;
			background-color: hsla(0, 0%, 12%, 1.0);
			margin-bottom: 5px;
			font-size: .85rem;
			font-weight: 500;
			word-break: none;
			white-space: nowrap;
		}
		div.column.menu li a {
			text-decoration: none;
		}
		div.column.menu li:hover,
		div.column.menu li:hover li {
			background-color: hsla(0, 0%, 15%, 1.0);
		}
		div.column.menu li:hover li:hover {
			background-color: hsla(0, 0%, 17%, 1.0);
		}
		div.column.menu li ul {
			margin: 0 !important;
			padding: 0;
		}
		div.column.menu li ul li {
			margin: 0 0 2.5px 0;
			padding: 5px;
		}
		div.column.menu li ul li:first-child {
			margin-top: 5px;
		}
		div.column.menu li ul li:last-child {
			margin-bottom: 0;
		}
		div.column.menu li ul li:hover {
			background-color: hsla(0, 0%, 15%, 1.0);
		}
		div.column.content {
			margin-left: 1rem;
		}
		div.column.content::after {
			content: none !important; 
		}
		div.footer {
			position: absolute;
			left: 0;
			bottom: 0;
			width: 100%;
			text-align: center;
			font-size: .85rem;
			color: #FEF3C9;
			margin-top: 1.5rem;
			background-color: hsla(0, 0%, 5%, 1.0);
		}
		`;
	return styles;
}

function appendToHead() {
	document.head.appendChild(createGFont1());
	document.head.appendChild(createGFont2());
	document.head.appendChild(createGFont3());
	document.head.appendChild(createStyles());
}

function removeFromHead(nodeList) {
	nodeList.forEach((n) => {
		n.remove();
	});
}

document.querySelectorAll('.mirkwood-reader').length == 4
	? removeFromHead(document.querySelectorAll('.mirkwood-reader'))
	: appendToHead()