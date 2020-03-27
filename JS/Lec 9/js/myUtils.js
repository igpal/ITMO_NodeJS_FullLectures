;
! function() {
    window.myUtils = {
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
        }
    }


}();