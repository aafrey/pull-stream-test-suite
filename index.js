const gzip = require('zlib').createGzip(),
      path = require('path')

const { pull, file, toPull, take } = require('./helper')

const zipStream = toPull(gzip)
const inputFile = path.resolve(__dirname, './big.file')

module.exports = function(
  req, res
){
  pull(
    file(inputFile),
    take(1),
    zipStream,
    toPull.sink(res.end)
  )
}


