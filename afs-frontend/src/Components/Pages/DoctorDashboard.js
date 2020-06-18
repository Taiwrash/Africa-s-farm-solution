/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Modal from 'react-modal';
import EditProfileForm from './EditDoctorProfileForm';

import useLocalState from '../../utils/sessionstorage';
import '../../styles/Dashboard.css';

Modal.setAppElement('#root');

const DoctorDashboard = () => {
  const [localState, setLocalState] = useLocalState('user-id');
  const { userId } = localState;

  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const products = 'one';
  return (
    <div id="doctor" className="text-center">
      <h2>
        Welcome
        {' '}
        {`${localState.firstName} ${localState.lastName}`}
      </h2>
      <p>Please Input your details for farmers who need your services</p>
      <button type="button" onClick={openModal} className="btn btn-secondary-outline">
        Your Profile
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Profile Modal"
        className="Modal"
        overlayClassName="Overlay"
      >
        <button onClick={closeModal} className="close-button" type="button">
          <i className="bx bxs-x-square" />
        </button>
        <div>
          <EditProfileForm />
        </div>
      </Modal>
    </div>
  );
};
export default DoctorDashboard;
