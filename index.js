const server = require('./api/server')

const port = process.env.PORT || 2002

server.listen(port, () => {
    console.log(`Listening on port ${port}....`)
})