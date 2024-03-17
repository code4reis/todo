import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import { MdDelete } from 'react-icons/md';

const TodoList = ({ todos, onToggle, onRemove }) => (
  <ul className="todo-list">
    {todos.map((todo) => (
      <li key={todo.id.toString()}>
        <span className={['todo', todo.checked ? 'checked' : ''].join(" ")} role="button" onKeyDown={() => onToggle(todo)} onClick={() => onToggle(todo)} >{todo.title}</span>
        <button className="remove" onClick={() => {onRemove(todo)}} type="button">
          <MdDelete size={28} />
        </button>
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      checked: PropTypes.bool.isRequired
    })
  ).isRequired,
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
}

export default TodoList;
