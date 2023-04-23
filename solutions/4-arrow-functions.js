// BEGIN
function each (objects, callback) {
    for(let obj of objects) {
        callback.apply(obj);
    }
}

export default each;
// END
