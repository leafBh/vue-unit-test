module.exports = function() {
  return {
    code: 200,
    data: {
      N: Math.round(Math.random()*10),
      M: Math.round(Math.random()*10)
    }
  }
}