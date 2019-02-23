import React, { Component, Fragment } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import GridLayout from '../Layouts/GridLayout'
import ArticleContainer from './ArticleContainer'

const style = {
    card: { padding: 5, marginTop: 10, marginBottom: 5 }
}
   
class information extends Component {
    constructor(props){
        super(props)
        this.state = {
            JSONdata : '',
        }
    }

    componentDidMount(){
        var articles = this.getNumbers(3)
        console.log("article number", articles)

        for (var i = 0; i < articles.length; i++){
            articles[i] = this.getAPIrequestURL(articles[i])
        }

        console.log("article urls", articles)
        // this.getDataFromAllURL(articles)
    }

    getNumbers(numbers) {
        var i;
        var articles = [];
        for (i = 0; i < numbers; i++) {
            while (true) {
                var num = Math.floor((Math.random() * 5) + 1);
                if (!articles.includes(num)) {
                    articles.push(num);
                    break;
                }
            }

        }
        return articles
    }

    getAPIrequestURL(num) {
        var filename = "data/article-" + num + ".json";
        var requesturl = "https://api.github.com/repos/bbc/news-coding-test-dataset/contents/" + filename;
        return requesturl;
    }

    async getDataFromURL(url){
        console.log("starting api call for", url)
        var requestResponse = await fetch(url, {
            headers: new Headers({
                'Accept': 'application/vnd.github.v3.raw',
                'Authorization': 
              })
        })
        var requestResponseJSON = await requestResponse.json()
        console.log("finished api call for", url)
        console.log("the response for ", url, "is", requestResponseJSON)
        return requestResponseJSON

    }

    async getDataFromAllURL(listOfURLS){
        let singleURLpromise = []
        var i
        for (i of listOfURLS){
            let promise = this.getDataFromURL(i)
            console.log("created promise for api call ", i)
            singleURLpromise.push(promise);
        }
        console.log("finished adding all promises")
        let allArticleData = await Promise.all(singleURLpromise)
        console.log("got the results from all the promises")
        console.log("all the data has been received, adding to state")
        this.setState({JSONdata:allArticleData})
        console.log("reading json data from state")
        window.title = this.state.JSONdata;
        console.log(this.state.JSONdata);
    }

    info() {
        return <Fragment>
            <Card raised={true} style={style.card}>
                <CardContent>
                    <Typography variant="h6" color="inherit">
                        Introduction
                    </Typography>
                    <Typography variant="body2">
                        This application will show you 3 random articles and will ask you to rate them out of 5 based on
                        how much you enjoyed the article using the dropdown below the article. The articles are automatically fetched 
                        from <a target="_blank" rel="noopener noreferrer" href="https://github.com/bbc/news-coding-test-dataset">this</a> GitHub Repository.  
                    </Typography>
                </CardContent>
            </Card>
        </Fragment>
    }

    render() {
        return <Fragment>
        <GridLayout comp={this.info()} > </GridLayout>
        <ArticleContainer />
        </Fragment>

        
    }
}

export default information