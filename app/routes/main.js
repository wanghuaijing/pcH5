/**
 * Created by whj57 on 2016/10/4.
 */
import React, {Component} from 'react'
import GoodsList from './goodsList/container/goodsList'

class Main extends Component{
    render(){
        return(
            <div>{this.props.children||<GoodsList/>}
            </div>
        )
    }
}
export default Main
