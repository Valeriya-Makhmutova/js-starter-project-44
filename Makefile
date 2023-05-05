install:
		npm ci

brain-games:
		node bin/games/brain-games-cli.js

publish:
		npm publish --dry-run

lint:
	npx eslint .

brain-even:
	node bin/games/brain-even-cli.js

brain-calc:
	node bin/games/brain-calc-cli.js

brain-gcd:
	node bin/games/brain-gcd-cli.js

brain-progression:
	node bin/games/brain-progression-cli.js

brain-prime:
	node bin/games/brain-prime-cli.js