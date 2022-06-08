const initialState = {
    users:[],
    loading: false,
}

const usersReducer = (state = initialState , action: { type: any }) =>{
    switch(action.type){
        default:
            return state
    }
};

export default usersReducer;

