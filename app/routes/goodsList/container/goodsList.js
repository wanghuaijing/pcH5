/**
 * Created by whj57 on 2016/10/4.
 */
import React,{Component} from 'react'
import { Link } from 'react-router'
const dark = 'hsl(200, 20%, 20%)'
const light = '#fff'
const styles = {}


styles.wrapper = {
    padding: '10px 20px',
    overflow: 'hidden',
    background: dark,
    color: light
}

styles.link = {
    padding: 11,
    color: light,
    fontWeight: 200
}

styles.activeLink = {
    ...styles.link,
    background: light,
    color: dark
}
class GoodsList extends Component{
    render(){
        return(<div>main
            <Link to="/goodsDetail" style={styles.link} activeStyle={styles.activeLink}>goodsDetail</Link></div>)
    }
}
export default GoodsList
