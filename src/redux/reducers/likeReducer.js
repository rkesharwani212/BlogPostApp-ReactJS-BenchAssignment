const   initialState=[
    {
        id:0,
        likes:0
    }
];
const likeReducer=(state=initialState,action)=>{
    // if(localStorage.getItem("state")!==null)
    //     state=JSON.parse(localStorage.getItem("state"))
    switch(action.type){
        case "ADD-LIKES":
            state = [...state, action.payload];
            break
        default:
            return state;
    }
};

export default likeReducer;