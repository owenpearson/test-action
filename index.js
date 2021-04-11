const { exec } = require('@actions/exec');
const core = require('@actions/core');

async function run () {
	try {
		await exec('sudo', ['apt-get', 'install', '-y', 'tree']);
		await exec('tree');
	} catch (err) {
		core.setFailed(err.message);
	}
}

run();
