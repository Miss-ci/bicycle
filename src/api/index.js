import Jsonp from "jsonp"

export default class Axios {
    static jsonp(options) {
        return new Promise((resolve, reject) => {
            // jsonp插件用法 jsonp(url, opts, fn)
            Jsonp(options.url, {
                param: "callback"
            }, function (err, response) {
                // console.log(0)
                if (response.status === 'success') {
                    resolve(response)
                } else {
                    reject(response.message)
                }
            })
        })
    }
}