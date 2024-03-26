import React, { useEffect } from 'react';
import Modal from 'react-modal';
import styles from './customModal.module.css'

const CustomModal = ({ isOpen, toggleModal, children, closeModalDelete, onConfirm, userId }) => {
    useEffect(() => {
        Modal.setAppElement(document.getElementById("#root"));
    }, []);

    return (
        <div className={styles.container}>
            <Modal
                isOpen={isOpen}
                onRequestClose={toggleModal}
                ariaHideApp={false}
                contentLabel='Book Modal'
                className={styles.containerModal}
                style={{
                    overlay: {
                        backgroundColor: "rgb(71 71 71 / 33%)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }
                }}
            >
                {children}
            </Modal>
        </div>
    );
};

export default CustomModal;
