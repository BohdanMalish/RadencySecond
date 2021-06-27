import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { modalEditorSelector } from '../../../redux/modal/selectors';
import listSelector from '../../../redux/notes/selectors';
import { updateData } from '../../../redux/notes/actions';
import { closeEditor } from '../../../redux/modal/actions';

const ModalEdit = () => {
  const dispatch = useDispatch();
  const { noteId, isOpen } = useSelector(modalEditorSelector);
  const { data } = useSelector(listSelector);

  const changeDate = (e) => {
    e.preventDefault();
    data.forEach((note) => {
      if (note.id === noteId) {
        note.planDate = e.target.date.value;
      }
    });
    dispatch(updateData(data));
    dispatch(closeEditor());
  };
  if (!isOpen) {
    return null;
  } else {
    return (
      <div id="Change_modal" className={'modal'}>
        <div className={'modal-content'}>
          <form onSubmit={changeDate} id="Change_date">
            <p className={'title-create'}>Введіть нову дату</p>
            <input name="date" type="date" min="" max=""></input>
            <input type="submit" value="Sent"></input>
          </form>

          <span
            onClick={() => dispatch(closeEditor())}
            id="closeChangeMenu"
            className={'close'}
          >
            &times;
          </span>
        </div>
      </div>
    );
  }
};
export default ModalEdit;
