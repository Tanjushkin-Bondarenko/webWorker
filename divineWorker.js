onmessage = function (e) {
    let res = e.data[0] / e.data[1];
    postMessage(res)
}