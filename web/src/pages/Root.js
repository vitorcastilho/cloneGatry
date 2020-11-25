import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

// pages to import
import PagesPromotionSearch from 'pages/Promotion/Search'
import PagesPromotionForm from 'pages/Promotion/Form'

const Root = () => {
    return(
        <Router>
            <Switch>
                <Route exact path='/' component={PagesPromotionSearch} />
                <Route exact path='/create' component={PagesPromotionForm} />
                <Route exact path='/edit/:id' component={PagesPromotionForm} />
            </Switch>
        </Router>
    )
}

export default Root;