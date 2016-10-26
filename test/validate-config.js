const { CLIEngine } = require('eslint');
const test = require('tape');

test('load config in eslint to validate all rule syntax is correct', (t) => {
	const cli = new CLIEngine({
		useEslintrc: false,
		configFile: 'index.js',
	});

	const code = `
const foo = 1;
const bar = () => {};
bar(foo);
`;

	t.equal(cli.executeOnText(code).errorCount, 0);
	t.end();
});
