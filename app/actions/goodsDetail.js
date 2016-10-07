/**
 * Created by whj57 on 2016/10/5.
 */
import GoodsDetail from '../constant/goodsDetail';
import Promise from 'bluebird';

export function toDoRequest() {
    return {
        type: GoodsDetail.REQUEST
    }
}

export function toDoRecieve(data) {
    return {
        type: GoodsDetail.RECIEVE,
        data: data
    }
}

export function getTodo() {
    return (dispath) => {
        dispath(toDoRequest());
        return new Promise(function (resolve, reject) {
            //put async request here
            setTimeout(function () {
                resolve(dispath(toDoRecieve([
                    '起床',
                    '吃饭',
                    '睡觉'
                ])));
            }, 3000);
        });
    }
}
