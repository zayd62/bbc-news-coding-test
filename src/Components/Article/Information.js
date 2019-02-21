import React, { Component, Fragment } from 'react'
import { Card, CardContent, Typography, } from '@material-ui/core'
import GridLayout from '../Layouts/GridLayout'

const style = {
    card: { padding: 5, marginTop: 10, marginBottom: 5 }
}

    function info() {
        return <Fragment>
            <Card raised={true} style={style.card}>
                <CardContent>
                    <Typography variant="h6" color="inherit">
                        Introduction
                    </Typography>
                    <Typography variant="body2">
                        This application will show you 3 random articles and will ask you to rate them out of 10
                        using the dropdown below the article. The articles are automatically fetched from this GitHub Repository.  
                    </Typography>
                    <br/>
                    <Typography variant="body2">
                        The articles are automatically fetched 
                        from <a target="_blank" rel="noopener noreferrer" href="https://github.com/bbc/news-coding-test-dataset">this</a> GitHub 
                        Repository as JSON files. If the fetching fails,
                        copies of the articles that are stored locally will be used.   
                    </Typography>
                </CardContent>
            </Card>
        </Fragment>
    }

export default class extends Component {
    render() {
        return <GridLayout comp={info()} > </GridLayout>
    }
}