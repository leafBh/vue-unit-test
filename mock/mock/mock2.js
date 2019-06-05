module.exports = function() {
  let data = {
    code: 200,
    data: {
      N: Math.round(Math.random()*10),
      M: Math.round(Math.random()*10)
    }
  }
  return {
    data
  }
}