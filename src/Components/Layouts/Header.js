import React from 'react'
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';

import { AppBar, Toolbar, Typography} from '@material-ui/core/'

export default props =>
    <AppBar position="static">
        <Toolbar>
            <Typography variant="h5" color="inherit">
                {props.title}
                {/* defined in app.js */}
            </Typography>
        </Toolbar>
    </AppBar>