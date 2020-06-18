const initialState = {
    todo: []
};

export const reducer = (state = initialState, action) => {

    switch (action.type) {
        case "SUBMIT":
            action.value.preventDefault();

            const value = action.value.target['name'].value;
            const oldState = {...state};
            oldState.todo.push({id: Math.random().toFixed(2), name : value, completed : false});
            // clear form 
            action.value.target['name'].value = "";
            return oldState;
            break;
        case "REMOVE" :
            const index = action.value;
            const oldStateRemove = {...state};
            let newState = oldStateRemove.todo.filter( item => item.id !== index);
            oldStateRemove.todo = newState;
            return oldStateRemove;
        case "COMPLETED" :
            let oldStateComp = {...state};
            //get the checked item 
            oldStateComp.todo.filter( item => {
                let index = action.value;
                if(item.id === index){
                    // changet the compete object true or false 
                    let updatedCount;
                    if(item.completed){
                        updatedCount = item.completed = false;
                    }
                    else{ updatedCount = item.completed = true; }
                    return [
                        item[updatedCount]
                    ]
                }
            });
            return oldStateComp;
    }

    return state;

}

export default reducer;