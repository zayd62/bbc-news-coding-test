import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// this defines a header with the text of the header as a prop
export default props =>
    <AppBar position="static">
        <Toolbar>
            <Typography variant="h5" color="inherit">
                {props.title}
                {/* the title to show in the header defined in app.js as a prop */}
            </Typography>
        </Toolbar>
    </AppBar>