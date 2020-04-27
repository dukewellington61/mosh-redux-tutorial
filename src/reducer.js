import * as actions from "./actionTypes";
// []
let lastId = 0;

// same function with a swich instead of an if else statement
export default function reducer(state = [], action) {
  switch (action.type) {
    case actions.BUG_ADDED:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];

    case actions.BUG_REMOVED:
      return state.filter((bug) => bug.id !== action.payload.id);

    case actions.BUG_RESOLVED:
      return state.map((bug) =>
        bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
      );

    // my solution
    // const resolvedBug = state.find((bug) => bug.id === action.payload.id);
    // return [...state, (resolvedBug.resolved = true)];

    default:
      return state;
  }
}

// same function with a if else statement
// export default function reducer(state = [], action) {
//   if (action.type === "bugAdded")
//     return [
//       ...state,
//       {
//         id: ++lastId,
//         description: action.payload.description,
//         resolved: false,
//       },
//     ];
//   else if (action.type === "bugRemoved")
//     return state.filter((bug) => bug.id !== action.payload.id);

//   return state;
// }
