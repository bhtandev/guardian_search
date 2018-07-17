const React = require('react')
const { render } = require('react-dom')

const App = require('./app')

import Page from './src/Page';

// bootstrap react
render(
    <div>
        <Page/>
        <App />
    </div>, document.getElementById('root'))
