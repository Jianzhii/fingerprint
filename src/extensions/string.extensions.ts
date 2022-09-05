interface String {
    hashCode(): number;
}

String.prototype.hashCode = function () {
    let hash = 0;
    if (this.length == 0) return hash;
    for (let i = 0; i < this.length; i++) {
        hash = (31 * hash + this.charCodeAt(i)) << 0;
    }
    return hash;
};
