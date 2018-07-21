import React from 'react';
import FixedHeader from './src/components/FixedHeader';
import Title from './src/components/Title';
import ResponsivePage from './src/components/ResponsiveContainer';

import Page from './src/guardian/pages/SearchPage';

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
