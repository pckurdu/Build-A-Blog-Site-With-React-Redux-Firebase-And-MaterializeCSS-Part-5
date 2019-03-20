//We create action called createProject
export const createProject=(project)=>{
    //We'll access the firestore.
    return (dispatch,getState,{getFirebase,getFirestore})=>{
        //asynchronous operation with dispatch.
        dispatch({type:'CREATE_PROJECT',project});
    }
}