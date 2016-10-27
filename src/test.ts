// this file is only being used by karma

import "angular";
import 'angular-animate';
import 'angular-sanitize';
import 'angular-ui-router';
import 'angular-ui-bootstrap';
require('phantomjs-polyfill')

requireAll((<any>require).context("./", true, /spec.ts$/));
function requireAll(r: any): any {
    r.keys().forEach(r);
}