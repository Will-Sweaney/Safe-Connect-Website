import React from 'react';
import IndexMap from 'components/IndexMap';
import IndexNavbar from 'components/IndexNavbar';
import SpeedDial from '@mui/material/SpeedDial';

import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';

import SosIcon from '@mui/icons-material/Sos';
import AddHomeIcon from '@mui/icons-material/AddHome';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import WarningIcon from '@mui/icons-material/Warning';

const actions = [
    { icon: <WarningIcon />, name: 'Report' },
    { icon: <TravelExploreIcon />, name: 'Directions' },
    { icon: <AddHomeIcon />, name: 'Refuge' },
    { icon: <SosIcon />, name: 'SOS' },
  ];

function App() {
    return (
        <div style={{ position: 'relative', height: '100vh' }}>
            <IndexNavbar />
            <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{ position: 'absolute', bottom: 20, left: 20 }}
                icon={<SpeedDialIcon />}
            >
                {actions.map((action) => (
                <SpeedDialAction
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name}
                    tooltipPlacement='right'
                    tooltipOpen
                />
                ))}
            </SpeedDial>

            <div style={{ height: '100%' }}>
                <IndexMap />
            </div>
        </div>
    );
}

export default App;