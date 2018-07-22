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

**NOTE** - This is a _prototype/proof of concept_ only. Displays only 10 results from page 1 of many. Pagination required for complete solution.
            Can be achieved using infinite scrolling to request next page when bottom of page is reached or introducing pagination buttons.
            Currently style is almost bare bones. CSS class names place holder can be added to support custom styling later. 

### Questions To Ask Project Team
1. What is the scope and constraints of this project?
 -  Identify key dates and milestones, tech stack allowed
2. What browsers to support? What platforms are we designing for?
 - Legacy browsers can alter design decisions ( javascript , css )
3. Where to get info or details on elements of design that aren't apparent from the mock ups? 
 - Color codes, font details, height/width dimensions, third party UI packages
4. Expected flow
 - Mockups only half the work. Better with understanding on how users are going to use it.
5. Ask why! What problem we solving?
 - Crucial to understand to get context and come up with better solution
 

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
