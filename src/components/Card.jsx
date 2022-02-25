const Card = (props) => {
    return (
        <div className="list-todo">
            {props.todo.map((item, index) => {
                return <div className="item-todo" key={index}>
                    <div>{item}</div>
                    <div className="pointer" onClick={() => props.handleRemoveTodo(index)}>X</div>
                </div>
            })}
        </div>
    )
}

export default Card;