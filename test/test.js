const bladeEngine = require('../index')

bladeEngine(__dirname, 'test', {
    message: 'John'
}).then((result) => {
    console.log(result)
})