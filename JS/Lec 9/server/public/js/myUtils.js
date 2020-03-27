export let myUtils = {
    remove: function(arr, index) {
        return arr.splice(index, 1);
    },
    repeat: function(str, count) {
        return str.repeat(count);
    },
    pluck: function(arr, nameProp) {
        let res = [];
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] === "object" && arr[i] !== undefined) {
                res.push(arr[i][nameProp]);
            }
        }
        return res;
    },
    sum: function(num1, num2, cb) {
        import ('./test.js').then(function(lib) {
            cb(lib.sum(num1, num2));
        }, function() {
            cb('Нет файла');
        });
    }
}