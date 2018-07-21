import React, {Component} from 'react';
import apiCaller from '../..//util/apiCaller';
import LoaderBox from '../../components/LoaderBox';
import SpinLoader from '../../components/SpinLoader';
import Article from '../components/Article';
import SearchPanel from '../components/SearchPanel';
import ArticleList from "../components/ArticleList";

/**
 * Smart Container containing the logic to make API call and manage the child components.
 */
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

    /**
     * Function to call the API and populate the page
     * @param searchText
     */
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
        }).catch((error) => {
            //reset results
            this.setState({
                results: [],
                currentPage: 0,
                total: 0,
                pageSize: 0,
                pages: 0,
                status: 'not_ok', //simple error return
            });
        })
    };

    /**
     * Function to group the results into sections.
     * @param results Search results
     * @returns {{}} Dictionary with section Id as the key. The value to the key contains list of articles from the search.
     */
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

    /**
     * To remove pinned item from the bar below the search box.
     * @param id Id of the article.
     */
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

    /**
     * To pin an article to the bar below the search box.
     * @param id Id of the article
     */
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

    /**
     * Get appropriate status text for the search process including during and after search just completed.
     * @returns {{type: string, text: string}}
     */
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

        return (
            <div style={{height: '100%', position: 'relative'}}>
                {loading &&
                <LoaderBox>
                    <SpinLoader/>
                </LoaderBox>}
                <div>
                    <SearchPanel
                        pinnedResults={pinnedResults}
                        doSearch={this.doSearchAndSetForDisplay}
                        status={status}
                        onPinDelete={this.onFavDelete}
                    />
                    <div style={{top: '110px', left: '0', position: 'absolute', margin: 'auto'}}>
                        <ArticleList newResultsGrouped={newResultsGrouped} onFavClick={this.onFavClick}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Page;
