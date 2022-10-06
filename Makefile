run:
	node hello.js
	node stringops.js
	node conditionals.js
	node arrays.js
	#firefox chapter1/index.html
	#firefox $(shell python remote_url.py)


install_node:
	npx install --lts

