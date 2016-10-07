/**
 * Created by whj57 on 2016/10/5.
 */
import GDActionsType from '../constant/goodsDetail'
import createReducer from '../utils/create-reducer'

const initState = {isLoading:false,data:{}};
var actionHandlers = {
    [GDActionsType.REQUEST]:(state,action)=>{
        return {isLoading:true,data:{}};
    },
    [GDActionsType.RECIEVE]:(state,action)=>{
        return {isLoading:false,data:action.data||{}};
    }

}
export default createReducer(initState,actionHandlers)

