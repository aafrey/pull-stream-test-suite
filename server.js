const gzip = require('zlib').createGzip(),
      path = require('path')

const { pull, file, toPull, createNetServer } = require('./helper')

const zipStream = toPull.duplex(gzip)
const inputFile = path.resolve(__dirname, './big.file')

createNetServer( function (
  stream
){
  pull(
    file(inputFile),
    //zipStream,
    stream.sink
  )
}).listen(9999, process.argv[2])


