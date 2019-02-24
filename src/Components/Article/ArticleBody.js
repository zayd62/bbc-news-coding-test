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

    generateHeading(heading, key) {
        return <Typography key={key} variant="h6" color="inherit">
            {heading}
        </Typography>

    }

    generateParagraph(paragraph, key) {
        return <Typography key={key}
            variant="body2"
            style={{
                marginBottom: "10px"
            }}>
            {paragraph}
        </Typography>
    }

    generateImage(url, altText, height, width, key) {
        return <CardMedia
            component="img"
            alt={altText}
            // height="auto"
            image={url}
            key={key}
            style={{
                maxWidth: width,
                maxHeight: height,
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "10px",
                marginBottom: "10px"
            }}></CardMedia>
    }

    generateUnorderedList(listitems, key) {
        for (let i = 0; i < listitems.length; i++) {
            listitems[i] = <li key={"li" + i}> {listitems[i]} </li>
        }

        return <Typography key={key} varient="body2">
            <ul key={key} style={{ fontWeight: "500" }}>
                {listitems}
            </ul>
        </Typography>
    }

    generateArticle() {
        let article = [];

        article.push(this.generateHeading(this.props.data.body[0].model.text, 0))
        for (let i = 1; i < this.props.data.body.length; i++){
            let articleItem = this.props.data.body[i]
            if(articleItem.type === "paragraph"){
                console.log("at index position ", i, "a paragraph is found. the contents are")
                console.log(articleItem.model.text)
                article.push(this.generateParagraph(articleItem.model.text, i))
        
            } else if(articleItem.type === "image"){
                console.log("at index position ", i, "a image is found. the contents are")
                console.log(articleItem.model)  
                console.log("the url is", articleItem.model.url)
                console.log("the altText is", articleItem.model.altText)
                console.log("the height is", articleItem.model.height)
                console.log("the width is", articleItem.model.width)
                article.push(this.generateImage(articleItem.model.url, articleItem.model.altText, articleItem.model.height, articleItem.model.width, i))

        
            } else{
                console.log("at index position ", i, "a list is found. the contents are")
                console.log(articleItem.model.items)
                article.push(this.generateUnorderedList(articleItem.model.items, i))

            }      
        }
        
        return article
    }

    render() {
        return <Fragment>
            <GridLayout comp={
                <Card raised={true} style={style.card}>
                    <CardContent>
                        {this.generateArticle()}
                    </CardContent>
                </Card>
            }>

            </GridLayout>

        </Fragment>

    }


}

export default ArticleBody
