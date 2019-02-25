// rimraf dist && mkdir dist && mv ./lib/bundle/* ./dist
const { ensureDir, remove, move } = require('fs-extra');

remove('./dist/', function() {
	ensureDir('./dist/', function() {
		move('./lib/bundle/', './dist', { overwrite: true }, function() {
			process.exit(0);
			return;
		});
	});
});
