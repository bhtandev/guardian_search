const React = require('react')
const { render } = require('react-dom')

const App = require('./app')


// bootstrap react
render(
    <div>
        <App />
    </div>, document.getElementById('root'))
