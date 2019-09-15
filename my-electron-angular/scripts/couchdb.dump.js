"use strict";
exports.__esModule = true;
var child_process = require("child_process");
var util_1 = require("util");
var exec = util_1.promisify(child_process.exec);
function dump(database) {
    return exec('http://node93869-electron-angular.demo.datacenter.fi/' + database + ' > unibet_tennis.json');
}
exports.dump = dump;
dump('unibet_tennis');
