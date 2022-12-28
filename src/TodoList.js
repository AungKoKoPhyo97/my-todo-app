const TodoList = ({ list, remove }) => {
    return (
        <>
            {list?.length > 0 ? (
                <ul className="todo_list">
                    {list.map((entry, index) => (
                        <div className='todo'>
                            <li key={entry.index}> {entry} </li>
                            <button className="delete_button" onClick={() => { remove(entry); }}>Delete</button>
                        </div>
                    ))}
                </ul>
            ) : (
                <div className="empty">
                    <p>No task found</p>
                </div>
            )}
        </>
    )
};

export default TodoList;