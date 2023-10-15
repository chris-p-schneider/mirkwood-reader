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
		:root {
			transition: color .5s ease-in-out !important;
			transition: background-color .5s ease-in-out !important;
		}
		:not(pre.prettyprint) {
		    scrollbar-color: hsla(0, 0%, 2.5%, 1.0);
		}
		:not(pre.prettyprint)::-webkit-scrollbar {
			background-color: hsla(0, 0%, 2.5%, 1.0) !important;
		}
		:not(pre.prettyprint)::-webkit-scrollbar-thumb {
			background-color: hsla(0, 0%, 25%, 1.0) !important;
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
		    font-size: 1rem;
		    overflow-x: auto;
		}
		pre:not(pre.prettyprint) {
		    scrollbar-color: hsla(0, 0%, 5%, 1.0);
			background-color: hsla(0, 0%, 5%, 1.0);		
		}
		pre:not(pre.prettyprint)::-webkit-scrollbar {
			background-color: hsla(0, 0%, 5%, 1.0) !important;
		}
		pre:not(pre.prettyprint)::-webkit-scrollbar-thumb {
			background-color: hsla(0, 0%, 15%, 1.0) !important;
		}
		pre.prettyprint {
			filter: invert();
		}
		h1 {
			margin-top: 0 !important;
		    padding-bottom: .5rem;
		    border-bottom: 1px solid hsla(0, 0%, 50%, 1.0);
		}
		h1 a {
			text-decoration: none;
		}
		h3 {
		    background-color: hsla(0, 0%, 12%, 1.0);
		    padding: .5rem;
		    margin: 1rem 0 .5rem 0;
		}
		ul:not(li ul), ol {
			margin: 1rem 0 !important;
		}
		ul ol {
			margin-left: -2rem !important;
		}
		ol li, dd {
			margin-bottom: .5rem;
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
		a:hover {
		    color: #E2B13C !important;
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
			display: none;
		}
		.content {
			width: 100% !important;
		}
		div.clearfix {
			width: 100%;
			display: flex;
			flex-flow: row nowrap;
			justify-content: flex-start;
		}
		div.clearfix::after {
			content: none !important;
		}
		div.column.menu {
			padding: 0 1rem 0 0 !important;
			width: fit-content !important;
		}
		div.column.menu b {
			display: block;
			margin-top: 10px;
			font-size: .85rem;
			padding: 5px 2.5px;
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
			padding-bottom: 1rem !important;
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
			background-color: hsla(0, 0%, 4%, 1.0);
		}
		@media (max-width: 400px) {
			:root {
				font-size: 12px !important;
			}
		}
		@media (max-width: 500px) {
			div.clearfix {
				flex-flow: column nowrap;
			}
			div.column.menu {
				display: flex;
				flex-flow: column nowrap;
				justify-content: flex-start;
				width: 100% !important;
				margin-bottom: 2rem !important;
				padding-right: 0 !important;
			}
			div.column.menu li {
				font-size: 1rem !important;
			}
		}
		@media (max-width: 650px) {
			:root {
				font-size: 14px !important;
			}
		}
		@media (min-width: 651px) {
			:root {
				font-size: 16px !important;
			}
		}
		@media (min-width: 900px) {
			body {
				background-origin: content-box;
				background-color: hsla(0, 0%, 7.5%, 1.0);
				background: linear-gradient(90deg, 
								hsla(0, 0%, 6%, 1.0) 0%, 
								hsla(0, 0%, 5%, 1.0) calc(calc(100% - calc(900px + 10vw) - 4rem) / 2), 
								hsla(0, 0%, 7.5%, 1.0) calc(calc(100% - calc(900px + 10vw) - 4rem) / 2), 
								hsla(0, 0%, 7.5%, 1.0) calc(100% - calc(calc(100% - calc(900px + 10vw) - 4rem) / 2)), 
								hsla(0, 0%, 5%, 1.0) calc(100% - calc(calc(100% - calc(900px + 10vw) - 4rem) / 2)), 
								hsla(0, 0%, 6%, 1.0))!important;
			}
			div.clearfix {
				max-width: calc(900px + 10vw);
				margin-left: auto !important;
				margin-right: auto !important;
			}
			div.column.menu {
				padding-right: calc(1rem + 2vw) !important;
			}
			div.column.menu li {
				padding: 10px 1vw;
			}
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