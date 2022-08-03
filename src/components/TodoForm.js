import React, { forwardRef } from "react";

function TodoForm({ input, setInput, onSubmit, onUpdate, updateRef }, ref) {
  return (
    <form className="form">
      <input
        ref={ref}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {updateRef.current === -1 ? (
        <button onClick={onSubmit}>Add</button>
      ) : (
        <button onClick={onUpdate}>Update</button>
      )}
    </form>
  );
}



export default forwardRef(TodoForm);
