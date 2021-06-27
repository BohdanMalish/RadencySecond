import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ModalCreate.css';
import nextId from 'react-id-generator';
import listSelector from '../../../redux/notes/selectors';
import { updateData } from '../../../redux/notes/actions';
import { closeCreator } from '../../../redux/modal/actions';
import { modalCreatorSelector } from '../../../redux/modal/selectors';

const ModalCreate = () => {
  const dispatch = useDispatch();
  const { data } = useSelector(listSelector);
  const active = useSelector(modalCreatorSelector);
  const submitData = (e) => {
    e.preventDefault();
    const datenow = new Date();
    const planDate = e.target.date.value
      ? new Date(e.target.date.value).toLocaleDateString()
      : '';
    const note = {
      id: nextId(),
      name: e.target.name.value,
      dateCreated: datenow.toLocaleDateString(),
      category: e.target.category.value,
      context: e.target.context.value,
      planDate: planDate,
      archive: false
    };

    data.push(note);
    dispatch(updateData(data));
    dispatch(closeCreator);
  };
  if (active === false) {
    return null;
  } else {
    return (
      <div>
        <div className={'modal'}>
          <div className={'modal-content'}>
            <form onSubmit={submitData}>
              <p className={'title-create'}>Введіть дані нотатки</p>
              <div className={'form-cont'}>
                <p>Назва</p>
                <input name={'name'} type={'text'}></input>
              </div>
              <div className={'form-cont'}>
                <p>Дату</p>
                <input name={'date'} type={'date'} min="" max=""></input>
              </div>
              <div className={'form-cont'}>
                <p>Опис</p>

                <input name={'context'} type={'text'}></input>
              </div>
              <div className={'form-cont'}>
                <select name={'category'}>
                  <option value={'Task'}>Task</option>
                  <option value={'Random Thought'}>Random Thought</option>
                  <option value={'Idea'}>Idea</option>
                </select>
              </div>
              <input
                id={'form-submit-button'}
                type="submit"
                value="Sent"
              ></input>
            </form>

            <span onClick={() => dispatch(closeCreator())} className={'close'}>
              &times;
            </span>
          </div>
        </div>
      </div>
    );
  }
};

export default ModalCreate;
