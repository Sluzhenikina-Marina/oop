// BEGIN
export default magic = (...parameters) => {
    let currentSum = parameters.reduce((acc, n) => acc + n, 0);

    const insideFunction = (...insideParameters) => magic(currentSum, ...insideParameters);

    insideFunction.valueOf = () => currentSum;
    return insideFunction; 
}
// END
