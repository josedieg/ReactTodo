/** 
* loader.js, carrega os principais arquivos
* de configuração
*/
const server = require('./config/server')
require('./config/routes')(server)
require('./config/database')