//State is initially false - No picture set

const picReducer = (state = false, action) => {
    switch(action.type){
        case 'SETPICTURE':
            return true //true when user sets picture
        case 'NOPICTURE':
            return false //false when user hasn't set pic
        default:
            return state; //default false
    }
};
export default picReducer;

