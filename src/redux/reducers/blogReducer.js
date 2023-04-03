const   initialState=[
    {
        id:0,
        title:"Java",
        categories: "Oops",
        content:"The main principles of object-oriented programming are abstraction, encapsulation, inheritance, and polymorphism. These concepts aim to implement real-world entities in programs.",
        totalLikes: 0,
        createdAt: new Date()
    },
    {
        id:1,
        title:"C Sharp",
        categories: "Oops",
        content:"The main principles of object-oriented programming are abstraction, encapsulation, inheritance, and polymorphism. These concepts aim to implement real-world entities in programs.",
        totalLikes: 0,
        createdAt: new Date()
    },
];
const blogReducer=(state=initialState,action)=>{
    // if(localStorage.getItem("state")!==null)
    //     state=JSON.parse(localStorage.getItem("state"))
    switch(action.type){
        case "ADD_BLOG":
            state=[...state,action.payload]
            // const data=JSON.stringify(state)
            // localStorage.setItem("state",data)
            return state;
        case "UPDATE_BLOG":
            const updateState=state.map(blog=>blog.id===action.payload.id?action.payload:blog);
            state=updateState;
            // localStorage.setItem("state",JSON.stringify(state))
            return state;
        case "DELETE_BLOG":
            const filterState=state.filter(blog=>blog.id!==action.payload && blog);
            state=filterState;
            // localStorage.setItem("state",JSON.stringify(state))
            return state;
        case "ADD_LIKES":
            const currentLikeState=state.map(blog =>{
                if(blog.id === action.payload)
                    return {...blog, totalLikes: blog.totalLikes+1}
                return blog;
            })
            state = currentLikeState;
            return state;
        case "DISLIKE":
            const currentState=state.map(blog =>{
                if(blog.id === action.payload)
                    return {...blog, totalLikes: blog.totalLikes-1}
                return blog;
            })
            state = currentState;
            return state;
        default:
            return state;
    }
};

export default blogReducer;