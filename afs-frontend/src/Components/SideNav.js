/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import EditProfileForm from './EditProfileForm';
import useLocalState from '../utils/sessionstorage';
import user from '../actions/index';
import '../styles/SideNav.css';

Modal.setAppElement('#root');

const SideNavigation = () => {
  const dispatch = useDispatch();
  const details = useSelector((state) => state.userDetails);
  const { image } = details;

  const [localState, setLocalState] = useLocalState('user-id');
  const { userId } = localState;

  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    axios.get(`http://localhost:4000/auth/view/${userId}`)
      .then((response) => {
        const { data } = response;
        const val = data.data;
        dispatch(user(val));
      })
      .catch((error) => {
        console.log('error ---->>>', error.message);
      });
  }, [userId, dispatch]);


  return (
    <div className="navigation">
      <button type="button" className="text-center edit-profile-button my-3">
        {image ? <img src={image} alt="User" className="img-fluid photo" /> : <i className="bx bxs-user" />}
      </button>
      <button type="button" onClick={openModal} className="edit-button">
        <li>
          {' '}
          <i className="bx bxs-edit-alt" />
          <span>Edit Profile</span>
        </li>
      </button>
      <hr/>
      <Link to={`/dashboard/00/${localState.userId}/products/add`} className="edit-button">
      <li>
        {' '}
        <i className="bx bxs-edit-alt" />
        <span>Add Products</span>
      </li>
      </Link>
      <hr />
      <Link to="/dashboard/00/chat" className="edit-button">
        <li>
          <i className="bx bxs-chat" />
          {' '}
          <span>Chat</span>
        </li>
      </Link>

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
export default SideNavigation;

// <hr />
// <Link to={`/dashboard/00/${localState.userId}/products/view`} className="edit-button">
//   <li>
//     {' '}
//     <i className="bx bxs-edit-alt" />
//     <span>Add Products</span>
//   </li>
// </Link>
// <hr/>
