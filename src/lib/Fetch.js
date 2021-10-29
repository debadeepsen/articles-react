export const MESSAGES = {
    NETWORK_REQUEST_FAILED: "There was an error while performing the network request. Please check your internet connection, or try again later."
}

const Fetch = {
    post: (url, body) => {
        return new Promise((resolve, reject) => {
            console.log(url);
            fetch(url, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            })
                .then(r => r.json())
                .then(d => {
                    if (d.success)
                        resolve({ data: d.data, message: d.message });
                    else
                        reject({ error: d.message });
                })
                .catch(e => {
                    reject({ error: MESSAGES.NETWORK_REQUEST_FAILED })
                })
        })
    },

    get: (url, params) => {
        return new Promise((resolve, reject) => {
            let fullUrl = url;

            if (params) {
                fullUrl = url + "?";
                Object.keys(params).forEach(k => {
                    fullUrl += `${k}=${params[k]}&`
                });
                fullUrl = fullUrl.substr(0, fullUrl.length - 1);
                console.log(fullUrl);
            }

            fetch(fullUrl, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(r => r.json())
                .then(d => {
                    if (d.success)
                        resolve({ data: d.data, message: d.message });
                    else
                        reject({ error: d.message });
                })
                .catch(e => {
                    reject({ error: MESSAGES.NETWORK_REQUEST_FAILED })
                })
        })
    }
}

export default Fetch;