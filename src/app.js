import React from 'react';
import FixedHeader from './components/FixedHeader';
import Title from './components/Title';
import ResponsivePage from './components/ResponsiveContainer';

import Page from './guardian/pages/SearchPage';

const App = () => {
  return (
    <div style={{height: '100%', display: 'flex', justifyContent: 'center'}}>
            <FixedHeader>
                <Title>Guardian</Title>
            </FixedHeader>
            <ResponsivePage>
                <Page/>
            </ResponsivePage>
    </div>
  )
};

export default App;