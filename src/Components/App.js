import React, {Component, Fragment} from 'react'
import Information from './Article/Information'
import Header from './Layouts/Header'
// the line above is to do with clean importing 
// see the comments in './Layouts/Header.js'
export default class extends Component{
    render(){
        // put everything in a fragment
        return <Fragment>
            {/* the line below renders the header  */}
            <Header title="Article Ranker"/>
            <Information />
            <h1>this is app.js </h1>
        </Fragment>
    }
}