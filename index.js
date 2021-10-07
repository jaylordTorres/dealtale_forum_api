const app = require('./config/express');
const { port, env } = require('./config/constant')


app.listen(port || 3000, () => console.info(`server started: ${port} - ${env}`))

