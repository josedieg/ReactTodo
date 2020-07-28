const mongoose = require('mongoose')
/*tira mensagem de adivertencia promise moongo depreciada*/
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/todo')
