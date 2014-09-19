/* dendry
 * http://github.com/idmillington/dendry
 *
 * MIT License
 */
/*jshint indent:2 */
(function() {
  "use strict";

  var make = require('./make');
  var validators = require('./validators');

  // --------------------------------------------------------------------
  // Schemae
  // --------------------------------------------------------------------

  var qualitySchema = {
    id: {
      required: true,
      validate: validators.validateQualityName
    },
    type: {
      required: true,
      validate: validators.makeEnsureEqualTo('File type', 'quality')
    },
    name: {
      required: true,
      validate: null
    },

    initial: {
      required: false,
      validate: validators.validateFloat
    },

    content: {
      required: true,
      validate: null
    }
  };

  // --------------------------------------------------------------------

  module.exports = make.makeExports(qualitySchema);
}());