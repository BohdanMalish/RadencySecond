import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import listSelector from '../../redux/notes/selectors';
import { updateData } from '../../redux/notes/actions';
import { openEditor } from '../../redux/modal/actions';

import './Note.css';

const Note = ({ note }) => {
  const { id, name, dateCreated, category, context, planDate } = note;

  const dispatch = useDispatch();
  const { data } = useSelector(listSelector);

  const archiveNote = () => {
    const list = data.map((element) =>
      element.id === id ? { ...element, archive: !element.archive } : element
    );
    dispatch(updateData(list));
  };

  const deleteNote = () => {
    const list = data.filter((element) => element.id !== id);
    dispatch(updateData(list));
  };

  return (
    <div className="todo-note">
      <ul className={'header-line note-line '}>
        <li className="note-name">{name} </li>
        <li>{dateCreated}</li>
        <li>{category}</li>
        <li>{context}</li>
        <li>{planDate}</li>
      </ul>

      <ul className="header-line-buttons">
        <li>
          <button
            onClick={() => dispatch(openEditor(id))}
            className={!note.archive ? 'organise-but' : 'Delete_button-none'}
          >
            <img
              className="image-wrapper"
              id="change-data"
              src={'./media/images/Pen.png'}
              alt=""
            />
          </button>
        </li>
        <li>
          <button onClick={archiveNote} className="organise-but">
            <img
              className="image-wrapper"
              src={
                note.archive
                  ? './media/images/Unarchive.png'
                  : './media/images/archiveblack.png'
              }
              alt=""
            />
          </button>
        </li>
        <li>
          <button onClick={deleteNote} className="organise-but">
            <img
              className="image-wrapper"
              src="./media/images/garbageBlack.png"
              alt=""
            />
          </button>
        </li>
      </ul>
    </div>
  );
};
export default Note;
