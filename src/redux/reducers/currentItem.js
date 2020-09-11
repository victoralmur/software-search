import { type as findCurrentItemType } from '../actions/findCurrentItem';
import items from '../../data/items';
const defaultState = {};

function reducer(state = defaultState, {type, payload}){
    switch(type) {
        case findCurrentItemType:
            {
                console.log('pay', payload);
                return items.find(n => n.id === payload);
            }

        default:
            return state;
    }
}

export default reducer;