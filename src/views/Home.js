import React from 'react';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import IndexMap from 'components/IndexMap';
import IndexNavbar from 'components/IndexNavbar';

function App() {
    return (
        <div style={{ position: 'relative', height: '100vh' }}>
            <IndexNavbar style={{ position: 'absolute', top: 0, left: 0, width: '100%', zIndex: 10 }} />

            <div style={{ height: '100%' }}>
                <IndexMap />
            </div>
        </div>
    );
}

export default App;