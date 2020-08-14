const server = require('./server')

const port = process.env.PORT || 9000;
server.listen(port, () => {console.log(`\n** Running on port ${port}**\n`)})

server.get('/', (req, res) => {
    res.send('this is a test')
})