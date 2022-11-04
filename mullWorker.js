onmessage = function (e) {
  console.log(e.data[0], e.data[1])
    let res = e.data[0] * e.data[1]
    
    postMessage(res)
}