import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import listSelector from '../../redux/notes/selectors';
import './Summary.css';
const Summary = () => {
  const { data } = useSelector(listSelector);
  const calculate = (category) => {
    let res = [];
    let countArch = 0;
    let countNotes = 0;
    data.forEach((el) => {
      if (el.category === category) {
        el.archive ? countArch++ : countNotes++;
      }
    });
    res.push(countNotes);
    res.push(countArch);

    return res;
  };
  return (
    <div className={'todo-info-notes todo-wrapper'}>
      <div class="header-line-info">
        <ul class="header-line header-line-info-lst">
          <li>Category</li>
        </ul>
        <ul class="Status-notes">
          <li>Active</li>
          <li>Archived</li>
        </ul>
      </div>
      <div class="header-line-info header-line-info-item">
        <img src="./media/images/thoughts.png" alt=""></img>
        <ul class="header-line header-line-info-lst">
          <li>Random Thoughts</li>
        </ul>
        <ul class="Status-notes  Status-notes-items">
          <li id="Random-active">{calculate('Random')[0]}</li>
          <li id="Random-archive">{calculate('Random')[1]}</li>
        </ul>
      </div>
      <div class="header-line-info header-line-info-item">
        <img src="./media/images/idea.png" alt=""></img>

        <ul class="header-line header-line-info-lst">
          <li>Idea</li>
        </ul>
        <ul class="Status-notes  Status-notes-items">
          <li id="Idea-active">{calculate('Idea')[0]}</li>
          <li id="Idea-archive">{calculate('Idea')[1]}</li>
        </ul>
      </div>
      <div class="header-line-info header-line-info-item">
        <img src="./media/images/task.png" alt=""></img>

        <ul class="header-line header-line-info-lst">
          <li>Task</li>
        </ul>
        <ul class="Status-notes Status-notes-items">
          <li id="Task-active">{calculate('Task')[0]}</li>
          <li id="Task-archive">{calculate('Task')[1]}</li>
        </ul>
      </div>
    </div>
  );
};
export default Summary;
