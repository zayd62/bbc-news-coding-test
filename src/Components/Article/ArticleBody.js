import React, { Component, Fragment } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const style = {
    card: { padding: 5, marginTop: 10, marginBottom: 5 }
}
class ArticleBody extends Component {

    renderHeading(heading, key){
        return <Typography key={key} variant="h6" color="inherit">
            {heading}
        </Typography>

    }

    

    renderArticle(){
        let header = [];
        for (let i = 0; i < 3; i++) {
            header.push(this.renderHeading("blash" + i, i))
        }
        return header
    }

    render() {
        return <Fragment>
            {this.renderArticle()}
        </Fragment>

    }


}

export default ArticleBody
