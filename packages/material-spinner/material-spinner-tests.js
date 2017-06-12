// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by material-spinner.js.
import { name as packageName } from "meteor/am25:material-spinner";

// Write your tests here!
// Here is an example.
Tinytest.add('material-spinner - example', function (test) {
  test.equal(packageName, "material-spinner");
});
