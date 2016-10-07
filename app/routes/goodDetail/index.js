/**
 * Created by whj57 on 2016/10/4.
 */
import GoodsDetail from './container/goodsDetail'
const goodsDetail = {
    path:'/goodsDetail',
    getComponent:(nextState,cb)=>{
        require.ensure([], (require) => {
            console.log(require('./container/goodsDetail'))
            cb(null, require('./container/goodsDetail'))
        })
    }
}
export default goodsDetail
