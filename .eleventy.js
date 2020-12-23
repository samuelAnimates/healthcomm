module.exports = config => {
    
    // copy images src folder to  build
    config.addPassthroughCopy('src/images');

    return {

        // 11ty input and output
        dir: {
            input: 'src',
            output: 'build'
        }

    };

};