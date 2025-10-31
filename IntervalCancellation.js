// При наличии функции fn, массива аргументов  argsи интервала времени tвернуть функцию отмены cancelFn.

// После задержки   будет вызвана cancelTimeMsвозвращенная функция отмены  .cancelFn

// setTimeout(cancelFn, cancelTimeMs)
// Функцию fnследует вызвать argsнемедленно, а затем вызывать снова каждые  tмиллисекунды, пока  cancelFn она не будет вызвана в cancelTimeMsмс.

var cancellable = function(fn, args, t) {
    fn(...args)
    const id = setInterval(() => {
        fn(...args)
    }, t)

    return function () {
         clearInterval(id)
    }
};