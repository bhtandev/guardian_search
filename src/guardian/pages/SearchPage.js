import React, {Component} from 'react';
import apiCaller from '../..//util/apiCaller';
import LoaderBox from '../../components/LoaderBox';
import SpinLoader from '../../components/SpinLoader';
import Article from '../components/Article';
import SearchPanel from '../components/SearchPanel';
import ArticleList from "../components/ArticleList";

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


class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            typingTimeout: undefined,
            results: [], //incoming results
            searchPage: 0,
            resultsGrouped: {},
            pinnedResults: [],
            loading: false,
            inputError: false,
            inputText: 'Search...',
        };
    }

    callApi = (searchText) => {
        return apiCaller(searchText);
    };

    doSearchAndSetForDisplay = (searchText) => {
        console.log(`Searching ${searchText}`);

        this.setState({
            loading: true,
            results: [],
            currentPage: 0,
            total: 0,
            pageSize: 0,
            pages: 0,
            status: undefined,
        });

        this.callApi(searchText).then((apiResponse) => {
            const {response} = apiResponse;
            const {
                status,
                total,
                startIndex,
                pageSize,
                currentPage,
                pages,
                results,
            } = response;

            console.log('response', response);

            this.setState({
                results: [...results],
                loading: false,
                currentPage,
                total,
                pageSize,
                status,
                pages
            });
        })
    };

    groupUpResults = (results) => {
        let newResultsGrouped = {};

        results.map((result) => {
            const {sectionName, sectionId} = result;

            if (sectionId in newResultsGrouped) {
                newResultsGrouped[sectionId].results = [...newResultsGrouped[sectionId].results, result];
            } else {
                newResultsGrouped[sectionId] = {
                    name: sectionName,
                    results: [result]
                }
            }
        });

        return newResultsGrouped;
    };

    onFavDelete = (id) => {
        const {results, pinnedResults} = this.state;

        const newPinnedResults = pinnedResults.filter(pinned => pinned.id !== id);
        const alreadyPinned = results.find(pinned => (id === pinned.id) && pinned.pinned);

        if (alreadyPinned) {

            const updatedResults = results.map((result) => (result.id === id) ? {
                ...result,
                pinned: !result.pinned
            } : result);

            this.setState({
                results: [...updatedResults],
                pinnedResults: [...newPinnedResults]
            })
        } else {
            const newPinnedResults = pinnedResults.filter(pinned => pinned.id !== id);
            this.setState({
                pinnedResults: [...newPinnedResults]
            })
        }
    };


    onFavClick = (id) => {
        const {results, pinnedResults} = this.state;

        const alreadyPinned = results.find(pinned => (id === pinned.id) && pinned.pinned);

        const updatedResults = results.map((result) => (result.id === id) ? {
            ...result,
            pinned: !result.pinned
        } : result);

        if (!alreadyPinned) {
            const newPinned = updatedResults.find(pinned => (pinned.id === id) && pinned.pinned);
            //
            this.setState({
                results: [...updatedResults],
                pinnedResults: [...pinnedResults, newPinned]
            })
        } else {
            const newPinnedResults = pinnedResults.filter(pinned => pinned.id !== id);
            this.setState({
                results: [...updatedResults],
                pinnedResults: [...newPinnedResults]
            })
        }
    };

    getStatus = () => {
        const { loading, total, currentPage, pageSize, status } = this.state;

        let statusObj = {
            type: 'INFO',
            text: '',
        };

        if (loading) {
            statusObj.text = 'Searching...';
        } else if (status && status !== 'ok') {
            statusObj.type = 'ERROR';
            statusObj.text = 'Search failed';
        } else if (status && status === 'ok') {
            statusObj.text = (total > 0)? `Displaying ${currentPage} to ${pageSize} of ${total} matches` : 'No results';
        }

        return statusObj;
    };

    render() {
        const {loading, results, pinnedResults} = this.state;

        const newResultsGrouped = this.groupUpResults(results);

        const status = this.getStatus();
        console.log('render', newResultsGrouped);
        console.log('pinnedResults', pinnedResults);
        console.log('status', status);

        return (
            <div style={{width: '100%', height: '100%', position: 'relative'}}>
                {loading &&
                <LoaderBox>
                    <SpinLoader/>
                </LoaderBox>}
                <div style={{width: '100%', height: '100%'}}>
                    <SearchPanel
                        pinnedResults={pinnedResults}
                        doSearch={this.doSearchAndSetForDisplay}
                        status={status}
                        onPinDelete={this.onFavDelete}
                    />
                    <div style={{top: '110px', left: '0', width: '100%', position: 'absolute', margin: 'auto'}}>
                        <ArticleList newResultsGrouped={newResultsGrouped} onFavClick={this.onFavClick}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Page;
