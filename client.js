const { pull, fetch } = require('./helper')

pull(
  fetch.result('http://127.0.0.1:9999'),
  pull.log()
)
