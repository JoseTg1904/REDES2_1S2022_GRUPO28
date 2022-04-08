const url = process.env.REACT_APP_BACKEND_URL;

const helpHTTP = () => {
    const requestFetch = (endpoint, options) => {
        const defaultHeader = {
            accept: "application/json",
        };
        const controller = new AbortController();
        options.signal = controller.signal;
        options.method = options.method || "GET";
        options.headers = options.headers ?
            {...defaultHeader, ...options.headers } :
            defaultHeader;

        options.body = JSON.stringify(options.body) || false;

        if (!options.body) delete options.body;

        setTimeout(() => {
            controller.abort();
        }, 3000);

        endpoint = `${url}/${endpoint}`;
        return fetch(endpoint, options)
            .then((res) =>
                res.ok ?
                res.json() :
                Promise.reject({
                    err: true,
                    status: res.status || "00",
                    statusText: res.statusText || "An error occurred",
                })
            )
            .catch((err) => err);
    };

    const getData = (url, options = {}) => requestFetch(url, options);

    return { getData };
};

export { helpHTTP };