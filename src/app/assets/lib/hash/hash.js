let hash = {};
let win = window;
let locat = win.location;
let cache = {};

function bindChange(fn) {
    win.addEventListener('hashchange', function() {
        let hashStr = locat.hash.replace(/#/, '');
        run(hashStr);
    });
    return hash;
}
// (<any>window).PubSub.join('hashchange', function(hash:any, params:any) {
//     let hashStr = hash.replace(/#/, '');
//     this._router.navigate([hashStr, params]);
// })


function join(fn) {
    cache[Date.now()] = fn;
    return hash;
}

function trigger(param) {
    return run(param);
}

function run(param) {
    for (let key in cache) {
        let value = cache[key];
        isFunction(value) && value(hashStr);
    }
    return hash;
}

function isFunction(fn) {
    return Object.prototype.toString.call(fn) === '[object Function]';
}

hash = {
    bindChange,
    join,
    trigger
};
win.hash = hash;
