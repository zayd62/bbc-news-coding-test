import React, {Component, Fragment} from 'react'
import Article from './Article'
import Header from './Layouts/Header'
// the line above is to do with clean importing 
// see the comments in './Layouts/Header.js'
export default class extends Component{
    render(){
        // put everything in a fragment
        return <Fragment>
            {/* the line below renders the header  */}
            <Header title="Article Ranker"/>
            <Article />
            <h1>this is app.js </h1>
        </Fragment>
    }
}