import { CHECK_TODOITEM } from "../constants";

const initialState = {
  todoItems: [{
    itemNo: 1,
    todoText: "Get Milk",
    done: false
  },
  {
    itemNo: 2,
    todoText: "Get Milk",
    done: false
  },
  {
    itemNo: 3,
    todoText: "Get Milk",
    done: false
  },
  {
    itemNo: 4,
    todoText: "Get Milk",
    done: false
  },
  {
    itemNo: 5,
    todoText: "Get Milk",
    done: false
  }]
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case CHECK_TODOITEM: {
      checkItem(state.todoItems, action.payload.itemNo);
      return state;
    }
    default: {
      return state;
    }
  }
}

function checkItem(todoItems, itemToBeChecked) {
  todoItems.forEach(item => {
    if (item.itemNo === itemToBeChecked) {
      item.done = !item.done;
    }
  });
}

export default rootReducer;
