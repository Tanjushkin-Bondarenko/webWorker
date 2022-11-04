onmessage = function (e) {
    let numOne = Number(e.data[0]);
    let numTwo = Number(e.data[1])
    let res = (numOne + numTwo)*(numOne - numTwo)
    postMessage(res)
}