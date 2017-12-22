# karma-deleteStrict-preprocessor

I had a hard time getting babel-preset to stop adding "use strict"; to the top of my files so 
I usse this preprocessor to delete babel's "use strict" directive.  

Configure the preprocessor in karma.config.js

        plugins:[
            "karma-babel-preprocessor",
            require('./karma-deleteLine-preprocessor.js')
        ],

        preprocessors: {
            "src/**/*.js":  ["babel", "deleteLine"],
            "test/**/*.js": ["babel", "deleteLine"]
        },

