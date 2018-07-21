# Guardian Search

Simple React Guardian Search client.

## Design Details

* ES6, React.
* Modern styling using styled-components.

### Project Requirements

* The app should take user input from a text field, as the user types it should
take that input and use it to perform a search against the Guardian’s content
API - https://open-platform.theguardian.com/ - **Complete**
  - Minimum 2 characters required to begin search
  - Input characters are debounced and search will only begin after user stops typing for a second
  - There will be status text notifying user whether search has been successful or failed.
  
* Given the result of that API call it should display a list of results, grouped by the
Section of the Guardian the items are found in. - **Complete**
  - Articles are grouped according to sections.
* The results for each item should show the Title, link and publication date
(formatted as DD/MM/YYYY). - **Complete**
  - Title, link(using hyperlink text of 'Read more...') and date shown in required format shown for each article.
  - Added extra 'Lorem ipsum...' text to act as article summary for 'prototype' purposes.

* Each item should have a button/checkbox that
allows it to be bookmarked/pinned. Pinned items should appear below the
search results, and stay on screen as search results change. - **Complete**
  - Article can be pinned below the search bar and stay on screen even when search changes.
  - Pinned articles appear as chips.
  - Pinned chips are controlled by a horizontal capable scrolling container. Useful when there are too many chips or when screen is small (mobile devices)
  - Users can unpin it by clicking the same button or clicking delete on the pinned chips.

**NOTE** - This is a prototype only. Displays only 10 results from page 1. Pagination required for complete solution.
            Can be achived using infinite scrolling to call next page search when button of page is reached or introduce pagination buttons.

### Questions

## Installing

```
npm install
```

## Running the app 

Using webpack dev server
```
npm run dev
```

Using wzrd and browserify (from original scaffolding starter kit)
```
npm start
```


## DEMO

[Link](https://bhtandev.github.io/guardian_search/)

Up on Glitch too

[https://bhtandev-guardian-search.glitch.me/](https://bhtandev-guardian-search.glitch.me/)

## Further improvements

* Autocomplete search input
* Style theming for the common components
* Complete pagination for further search results
* Unit tests
* Test against other browsers.


## Authors

* **Boon Hui Tan**
