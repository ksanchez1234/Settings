//State is initially false - No User Name set

const usernameReducer = (state = false, action) => {
    switch(action.type){
        case 'SETUSERNAME':
            return true //true when username is set
        case 'NOUSERNAME':
            return false //false when username isn't set
        default:
            return state; //default false
    }
};
export default usernameReducer;
