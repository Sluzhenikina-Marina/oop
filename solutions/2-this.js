// BEGIN
function make (numerator, denominator) {
    let rational = {
        numerator,
        denominator,
        setNumer(a) {
            this.numerator = a;
        },

        setDenom(a) {
            this.denominator = a;
        },

        getNumer() {
            return this.numerator;
        },

        getDenom() {
            return this.denominator;
        },
        
        toString() {
            return String(numerator) + '/' + String(denominator);
        },

        add(num) {
            let numerator = (this.getNumer() * num.getDenom() + this.getDenom() * num.getNumer())
            let denominator = (this.getDenom() * num.getDenom());
            return make(numerator, denominator);
        }
    }
    return rational;
}

export default make;
// END