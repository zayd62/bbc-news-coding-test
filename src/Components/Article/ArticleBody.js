import React, { Component, Fragment } from 'react'

class ArticleBody extends Component{
    render(){
        return <Fragment>
            <h1>This is articleBody</h1>
            {console.log("hello from article body")}
            {console.log(this.props.data)}
        </Fragment>
    }


}

export default ArticleBody
