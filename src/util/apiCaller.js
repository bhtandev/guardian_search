const API_URL = 'https://content.guardianapis.com/search?api-key=ffbbf11d-d6f6-480f-bbf6-b97c8aa0704f&q=';

export default function callApi(queryString, method = 'get', body, options) {
    return fetch(`${API_URL}${queryString}`)
        .then(response => response.json().then(json => ({ json, response })))
        .then(({ json, response }) => {
            if (!response.ok) {
                return Promise.reject(json);
            }
            return json;
        })
        .then(
            response => response,
        );
}
