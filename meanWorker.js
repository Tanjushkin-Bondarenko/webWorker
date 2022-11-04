onmessage = function(e){
    let res = (Number(e.data[0]) + Number(e.data[1])) /2
     postMessage(res)
}