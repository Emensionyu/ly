import { storeChange } from "./storeChange";

// 提供状态

export const createStore = (state,storeChange)=> {
    const store = state || {};
    const dispatch = (action) => storeChange(store,action);
        return {store,dispatch};
}