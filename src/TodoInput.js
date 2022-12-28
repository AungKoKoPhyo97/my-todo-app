const TodoInput = ({ todo, setTodo, addTodo }) => {
    return (
        <div className="todo_input">
            <input className="input_wrapper"
                type='text' name="todo"
                value={todo}
                placeholder="Create a new todo"
                autoComplete="off"
                onChange={(e) => setTodo(e.target.value)} />
            <button className="add_button" onClick={addTodo}>Add</button>
        </div>
    )
};

export default TodoInput;