import React, { Component, Fragment } from 'react'
import Grid from '@material-ui/core/Grid'
// this creates a grid layout so it is centered on a big screen with white space all around
export default class extends Component {
    render() {
        return <Fragment>
            <Grid container>
                <Grid item sm={1}>
                </Grid>
                <Grid item sm={10}>
                {/* the component to render centered */}
                    {this.props.comp}
                </Grid>
                <Grid item sm={1}>
                </Grid>
            </Grid>
        </Fragment>
    }
}
