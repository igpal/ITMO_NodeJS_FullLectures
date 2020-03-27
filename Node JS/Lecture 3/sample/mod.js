let globalValue;
exports.setGlobal = function(val) {
    globalValue = val;
}
exports.getGlobal = function() {
    return globalValue;
}

/*module.exports = {
    setGlobal: (val) => {
        globalValue = val;
    },
    getGlobal: () => {
        return globalValue;
    };
};
*/