module.exports = {
    caps: [...Array(26)].map((val, i) => String.fromCharCode(i + 65)),

    lows: [...Array(26)].map((val, i) => String.fromCharCode(i + 97)),

    processText: function (inputText, shift, operation) {
        return inputText.split('').map((item) => {
            if (operation === 'encode') {
                return this.caps.includes(item) ? (this.caps[this.caps.indexOf(item) + shift > 25 ? 
                    this.caps.indexOf(item) + shift - 26 : this.caps.indexOf(item) + shift]) : 
                    this.lows.includes(item) ? (this.lows[this.lows.indexOf(item) + shift > 25 ? 
                    this.lows.indexOf(item) + shift - 26 : this.lows.indexOf(item) + shift]) :
                    item;
            }
            if (operation === 'decode') {
                return this.caps.includes(item) ? (this.caps[this.caps.indexOf(item) - shift < 0 ? 
                    26 + this.caps.indexOf(item) - shift : this.caps.indexOf(item) - shift]) : 
                    this.lows.includes(item) ? (this.lows[this.lows.indexOf(item) - shift < 0 ? 
                    26 + this.lows.indexOf(item) - shift : this.lows.indexOf(item) - shift]) :
                    item;
            }
        }).join('');
    },
}