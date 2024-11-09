import React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import MapComponent from 'components/MapComponent';

const CustomButton = styled(Button)({
    backgroundColor: '#ff5722',
    color: '#fff',
    '&:hover': {
        backgroundColor: '#e64a19',
    },
});

function App() {
    return (
        <div>
            <MapComponent />
            <CustomButton variant="contained">balls</CustomButton>
        </div>
    );
}

export default App;