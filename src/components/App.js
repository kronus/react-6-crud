import React, { Component } from 'react';
import logo from '../logo.svg';
import '../css/App.css';
import '../css/bootstrap.min.css';
import '../css/bootstrap.min.css.map';
import toastr from 'toastr';
import $ from 'jquery';
import bootstrap from 'bootstrap';
import NavComponent from "./nav.component";
import ListComponent from './list.component';
import MainComponent from './main.component';

const App = () => (
    <div>
        <NavComponent />
        <ListComponent />
        <MainComponent />
    </div>
)

export default App;
