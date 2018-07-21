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


//todo: to remove
const fakeResults = [
    {
        id: "environment/2018/jul/19/one-third-of-uk-supermarket-plastic-is-not-easily-recyclable-analysis-shows",
        type: "article",
        sectionId: "environment",
        sectionName: "Environment",
        webPublicationDate: "2018-07-19T05:30:36Z",
        webTitle: "One-third of UK supermarket plastic is not easily recyclable, analysis shows",
        isHosted: false,
        pillarId: "pillar/news",
        pillarName: "News",
    }, {
        id: "travel/2018/jul/19/road-trips-driving-holidays-readers-tips",
        type: "article",
        sectionId: "travel",
        sectionName: "Travel",
        webPublicationDate: "2018-07-19T05:30:36Z",
        webTitle: "10 great road trips around the world: readers’ tips",
        pillarId: "pillar/lifestyle",
        pillarName: "Lifestyle",
    }, {
        id: "world/2018/jul/19/thursday-briefing-anna-chapman-with-real-pistols",
        type: "article",
        sectionId: "world",
        sectionName: "World news",
        webPublicationDate: "2018-07-19T05:25:09Z",
        webTitle: "Thursday briefing: 'Anna Chapman with real pistols'",
        pillarId: "pillar/news",
        pillarName: "News",
    },
];