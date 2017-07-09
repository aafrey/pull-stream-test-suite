const gzip = require('zlib').createGzip(),
      path = require('path')

const { pull, file, toPull, log, createHttpServer } = require('./helper')

const zipStream = toPull(gzip)
const inputFile = path.resolve(__dirname, './big.file')

createHttpServer( function (
  stream
){
  pull(
    file(inputFile),
    zipStream,
    stream.sink
  )
  res.on('finish', function() {
    res.end()
  })
}).listen(9999, '127.0.0.1')


