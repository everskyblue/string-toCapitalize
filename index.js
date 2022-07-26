if (!('toCapitalize' in String.prototype)) {

    String.prototype.toCapitalize = function () {
        let nw = '';
        for (let i = 0, isNextUpper = false, char, test; i < this.length; i++) {
            char = this[i];
            test = /[\s\t\r\n]/.test(char);
            if (i === 0 || (!test && isNextUpper)) {
                nw += char.toUpperCase();
                isNextUpper = false;
            } else if (test) {
                isNextUpper = true;
                nw += char;
            } else {
                nw += char;
            }
        }
        return nw;
    };
}