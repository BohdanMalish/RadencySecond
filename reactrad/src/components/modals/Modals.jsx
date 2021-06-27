import React from 'react';
import { useSelector } from 'react-redux';
import ModalCreate from './modalCreate/ModalCreate';
import ModalEdit from './modalEdit/ModalEdit';

const Modals = () => {
  return (
    <>
      <ModalEdit></ModalEdit>
      <ModalCreate></ModalCreate>
    </>
  );
};
export default Modals;
