import React from "react";

function AddTodoForm() {
    return(
        <form>
            <label htmlFor="todoTitle">
                Title
                <input id="todoTitle"/>
            </label>
            <button type="submit">
                Add
            </button>
        </form>
    );
}

export default AddTodoForm;