publish:
	npm publish --dry-run
install:
	npm ci
link:
	npm link
brain-games:
	node bin/brain-games.js
lint:
	npx eslint .
