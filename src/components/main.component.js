import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ListComponent from './list.component'
import NewComponent from './new.component'
import EditComponent from './edit.component'
import DeleteComponent from './delete.component'

// The MainComponent component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const MainComponent = () => (
    <main>
        <Switch>
            <Route exact path='/v2018/react-coins/List' component={ListComponent}/>
            <Route path='/v2018/react-coins/New' component={NewComponent}/>
            <Route path='/v2018/react-coins/Edit' component={EditComponent}/>
            <Route path='/v2018/react-coins/Delete' component={DeleteComponent}/>
        </Switch>
    </main>
)

export default MainComponent
