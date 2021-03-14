const bodyParser = require('body-parser')
const cors = require('cors')

module.exports = app => {
    app.use(bodyParser.json()) //Interpretar qualquer JSON que venha no Body da requisição
    app.use(cors({ //CORS permite que venha de qualquer origem
        origin: '*'
    }))
}