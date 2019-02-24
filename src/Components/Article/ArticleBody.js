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

    renderParagraph(paragraph, key){
        return <Typography key = {key} variant="body2">
            {paragraph}
        </Typography>
    }

    

    renderArticle(){
        let header = [];
        // for (let i = 0; i < 3; i++) {
        //     header.push(this.renderHeading("blash" + i, i))
        // }
        const para = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum laoreet felis vitae convallis. Ut eu ante finibus, blandit neque in, congue enim. Proin ut quam libero. Fusce accumsan lacus eget convallis condimentum. Vestibulum eu ullamcorper justo. Mauris vel bibendum nisi. Vestibulum et tincidunt libero. Vestibulum rhoncus vestibulum sapien vel vehicula. Aliquam erat volutpat. Duis rutrum lectus velit, eget mattis lectus accumsan eu. Nam nisl lectus, tempor vel ullamcorper nec, dignissim at ante.";
        header.push(this.renderHeading("this is the heading", 1))
        header.push(this.renderParagraph(para, 2))
        return header
    }

    render() {
        return <Fragment>
            {this.renderArticle()}
        </Fragment>

    }


}

export default ArticleBody
