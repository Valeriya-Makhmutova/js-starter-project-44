install:
		npm ci

brain-games:
		node bin/brain-games-cli.js

publish:
		npm publish --dry-run

lint:
	npx eslint .

brain-even:
	node bin/brain-even-cli.js

brain-calc:
	node bin/brain-calc-cli.js

brain-gcd:
	node bin/brain-gcd-cli.js

brain-progression:
	node bin/brain-progression-cli.js

brain-prime:
	node bin/brain-prime-cli.js