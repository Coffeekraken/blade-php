const execPhp = require('exec-php')
const tmp = require('tmp')
const rimraf = require('rimraf')

/**
 * Compile a blade php view and return a promise with the
 * resulting template
 * 
 * @param    {String}    $viewsPath    Absolute path to the views folders
 * @param    {String}    view    relative path to the view to render
 * @param    {Object}    [data={}]    The data to pass to the view
 * @return    {Promise}    A promise with the template result passed in
 * 
 * @example    js
 * const bladeEngine = require('coffeekraken-blade-engine')
 * bladeEngine(__dirname, 'my-cool-view.blade.php', {
 *   hello: 'World'
 * }).then((result) => {
 *   // do something with the result
 * });
 * 
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
const compile = (viewsPath, view, data = {}) => {
    return new Promise((resolve, reject) => {
        // create a new tmp folder for blade cache
        var tmpobj = tmp.dirSync()
        // preparing the php execution
        execPhp(__dirname + '/compile.php',__dirname + '/bin/php', (error, php, outprint) => {
            // execute the php engine and get back the result
            const result = php.compile(viewsPath, view, data, tmpobj.name, (err, result, output, printed) => {
                // get the best result possible
                const ret = result || printed || error
                // resolve the promise with the best result possible
                resolve(ret)
                // remove temp folder
                rimraf.sync(tmpobj.name)
            })
        })
    })
}

// export the compile function
module.exports = compile