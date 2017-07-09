const { pull, connect, write, take, map } = require('./helper')

const stream = connect(9999, process.argv[2])

pull(
  stream,
  take(1),
  pull.map((data) => data.toString('utf8')),
  pull.log()
  //write('./little.file', {}, function (
  //  err
  //){
  //  if (err) console.log(err)
  //  else console.log('all done')
  //})
)
