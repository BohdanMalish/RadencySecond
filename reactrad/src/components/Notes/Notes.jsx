import Note from '../Note/Note';
import './Notes.css';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import listSelector from '../../redux/notes/selectors';
import { openCreator } from '../../redux/modal/actions';

import { updateData } from '../../redux/notes/actions';

const Notes = () => {
  const [openArchive, setOpenArchive] = useState(false);
  const dispatch = useDispatch();
  const { data } = useSelector(listSelector);

  const renderNotes = (status) => {
    const filteredNotes = data.filter(({ archive }) => archive === status);
    return filteredNotes.map((note) => <Note key={note.id} note={note} />);
  };
  const archiveAllNotes = () => {
    data.forEach((element) => {
      element.archive = true;
    });
    dispatch(updateData(data));
  };

  return (
    <>
      <div className={'todo-wrapper'}>
        <div className={'todo-list-wrapper'}>
          <div className={'todo-header'}>
            <ul className={'header-line header-Tags'}>
              <li>Name</li>
              <li>Created</li>
              <li>Category</li>
              <li>Content</li>
              <li>Dates</li>
            </ul>
            <ul className={'header-line-buttons'}>
              <li>
                <button
                  id={'button-archive'}
                  className={'Delete-but'}
                  onClick={archiveAllNotes}
                >
                  <img
                    className={'Delete_button'}
                    src="./media/images/archive.png"
                    alt=""
                  ></img>
                </button>
              </li>
              <li>
                <button
                  id={'delete-button'}
                  className={'Delete-but'}
                  onClick={() => dispatch(updateData([]))}
                >
                  <img
                    className={'Delete_button'}
                    src="./media/images/garbage.png"
                    alt=""
                  ></img>
                </button>
              </li>
            </ul>
          </div>

          <div className={'todo-list'}>{renderNotes(false)}</div>
          <div className={'button-create-wraper'}>
            <button
              id="todo-button-create"
              onClick={() => dispatch(openCreator())}
            >
              Створити Нотатку
            </button>
          </div>
        </div>
        <div>
          <button
            className={'button-show-Archive'}
            onClick={() => setOpenArchive(!openArchive)}
          >
            архівовані нотатки
            <img
              src={
                openArchive
                  ? './media/images/ShowArchiveUp.png'
                  : './media/images/ShowArchiveDown.png'
              }
              alt=""
            />
          </button>
        </div>
        <div className={openArchive ? 'todo-list' : 'archive-list'}>
          {renderNotes(true)}
        </div>
      </div>
    </>
  );
};

export default Notes;
