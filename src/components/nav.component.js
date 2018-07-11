import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NewComponent from './new.component';
import ListComponent from './list.component';

class NavComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: []}
    }

    render(){
        return (
            <div className="row">
                <div className="col-sm-8 col-sm-offset-2">
                    <nav className="navbar navbar-default">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <a className="navbar-brand">Simple CRUD</a>
                            </div>
                            <div id="navbar" className="navbar-collapse">
                                <ul className="nav navbar-nav">
                                    <li><a href="/v2018/react-coins/">Coin Management</a></li>
                                    <li><Link to={'/v2018/react-coins/New/'}>Add Coin</Link></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <Router>
                        <Route path={"ListComponent"} component={ListComponent}></Route>
                    </Router>
                    <Router>
                        <Route path={"NewComponent"} component={NewComponent}></Route>
                    </Router>
                </div>
            </div>
        );
    }

}

export default NavComponent