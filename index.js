'format cjs';

var engine = require('./engine');
var conventionalCommitTypes = require('./types');
var configLoader = require('commitizen').configLoader;

var config = configLoader.load();

const options = {
  disableEmoji: false,
  types: conventionalCommitTypes.types,
  defaultType: config.defaultType,
  defaultSubject: config.defaultSubject,
  defaultBody: config.defaultBody,
  maxHeaderWidth:
    config.maxHeaderWidth || 72,
  minHeaderWidth:
    config.minHeaderWidth || 6,
  maxLineWidth:
    config.maxLineWidth || 100
};

module.exports = engine(options);
