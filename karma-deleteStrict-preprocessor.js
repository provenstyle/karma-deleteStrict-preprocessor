createPreprocessor.$inject = ['logger'];
function createPreprocessor(logger) {
    var log = logger.create('preprocessor.deleteStrict');

    function preprocess(content, file, done) {
        log.debug('Processing "%s".', file.originalPath);

        try {
            var processed = content.replace(/"use strict";/gi, "");
            log.debug(processed);
            done(null, processed);
        } catch (e) {
            log.error('%s\n at %s', e.message, file.originalPath);
            done(e, null);
        }
    }

    return preprocess;
}

module.exports = {
    'preprocessor:deleteStrict': ['factory', createPreprocessor]
};
