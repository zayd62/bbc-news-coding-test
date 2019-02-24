import React, {Component, Fragment} from 'react'
import Information from './Article'
import Header from './Layouts/Header'

class App extends Component{
    render(){
        // put everything in a fragment
        return <Fragment>
            {/* the line below renders the header  */}
            <Header title="Article Ranker"/>
            <Information />
        </Fragment>
    }
}

export default App