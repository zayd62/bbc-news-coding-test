import React, { Component, Fragment } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography'
import GridLayout from '../Layouts/GridLayout'

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
        return <Typography key = {key} 
        variant="body2"
        style={{
            marginBottom:"10px"
        }}>
            {paragraph}
        </Typography> 
    }

    renderImage(url, altText, height, width, key){
        return <CardMedia
        component="img"
        alt={altText}
        // height="auto"
        image={url}
        key={key}
        style={{
            maxWidth: width,
            maxHeight: height, 
            display : "block", 
            marginLeft: "auto", 
            marginRight: "auto",
            marginTop: "10px", 
            marginBottom: "10px"}}></CardMedia>
    }

    renderArticle(){
        let header = [];
        // for (let i = 0; i < 3; i++) {
        //     header.push(this.renderHeading("blash" + i, i))
        // }
        const para = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum laoreet felis vitae convallis. Ut eu ante finibus, blandit neque in, congue enim. Proin ut quam libero. Fusce accumsan lacus eget convallis condimentum. Vestibulum eu ullamcorper justo. Mauris vel bibendum nisi. Vestibulum et tincidunt libero. Vestibulum rhoncus vestibulum sapien vel vehicula. Aliquam erat volutpat. Duis rutrum lectus velit, eget mattis lectus accumsan eu. Nam nisl lectus, tempor vel ullamcorper nec, dignissim at ante.";
        header.push(this.renderHeading("this is the heading", 1))
        header.push(this.renderParagraph(para, 2))
        header.push(this.renderImage("https://picsum.photos/640/420/?random", "Vestibulum pellentesque laoreet urna, eget dignissim lorem maximus vel", 420, 640,3))
        header.push(this.renderParagraph(para, 4))
        return header
    }

    render() {
        return <Fragment>
            <GridLayout comp={
                <Card raised={true} style={style.card}>
                    <CardContent>
                    {this.renderArticle()}
                    </CardContent>
                </Card>
            }>

            </GridLayout>
 
        </Fragment>

    }


}

export default ArticleBody
