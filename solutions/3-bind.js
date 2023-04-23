// BEGIN
export default function bind (object, func) {

    return function(...params) {

        return func.call(object, ...params);

    }
}
// END