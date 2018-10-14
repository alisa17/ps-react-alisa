var fs = require('fs');
var path = require('path');
var chalk = require('chalk');
var parse = require(react-docgen).parse;

var paths = {
  examples: path.join(__dirname, '../src', 'docs', 'examples'),
  components: path.join(__dirname, '../src', 'components'),
  output: path.join(__dirname, '../config', 'componentData.js')
}
