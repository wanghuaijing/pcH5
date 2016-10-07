/**
 * Created by whj57 on 2016/10/2.
 */
import React, { Component } from 'react'
import ReactDOM from "react-dom"
import routes from './route'
import { Router,browserHistory } from 'react-router'

import './style.scss'
ReactDOM.render((
    <Router
        history={browserHistory}
        routes={routes}
    />)
    , document.querySelector('#app')
);

