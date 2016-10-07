/**
 * Created by whj57 on 2016/10/4.
 */
import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import Main from './routes/main'
import childComponent from './routes'

const rootRoute = {
    childRoutes:[{
        path:'/',
        component:Main,
        childRoutes:childComponent
    }]
}
export default rootRoute
