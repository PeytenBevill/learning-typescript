// import React from "react";
// import { Todo } from "./Model";

// type Actions =
//   | { type: "add"; payload: string }
//   | { type: "delete"; payload: number }
//   | { type: "done"; payload: number };

// const TodoReducer = (state: Todo[], actions: Actions) => {
//   switch (actions.type) {
//     case "add":
//       return [
//         ...state,
//         { id: Date.now(), todo: actions.payload, isDone: false },
//       ];
//     case "delete":
//       return state.filter((todo) => todo.id !== actions.payload);
//     case "done":
//       return state.map((todo) => todo.id !== actions.payload ? {... todo, isDone: !todo.isDone});
//       default:
//         return state
//   }
//   return <div>TodoReducer</div>;
// };

// export default TodoReducer;
