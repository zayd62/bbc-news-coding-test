import React, { Component, Fragment } from 'react'
import { Grid } from '@material-ui/core'

export default class extends Component {
    render() {
        return <Fragment>
            <Grid container sm={12}>
                <Grid item sm={1}>
                </Grid>
                <Grid item sm={10}>
                    {this.props.comp}
                </Grid>
                <Grid item sm={1}>
                </Grid>
            </Grid>
        </Fragment>
    }
}
