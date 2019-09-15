const util = require('util');
const exec = util.promisify(require('child_process').exec);

function dump( database: string) {
 exec('pouchdb-dump http://node93869-electron-angular.demo.datacenter.fi/' + database + ' > scripts/' + database + '.json');
}

dump('unibet_tennis');
dump('unibet_football');
dump('unibet_baseball');

