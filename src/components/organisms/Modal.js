import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import { Modal as MuiModal } from '@mui/material';
import { Box } from '@mui/system';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4
};

const Modal = ({ handleClose, isOpen, children }) => {
	return (
		<MuiModal open={isOpen} onClose={handleClose}>
			<Box sx={style}>{children}</Box>
		</MuiModal>
	);
};

Modal.propTypes = {
	handleClose: PropTypes.func,
	isOpen: PropTypes.bool,
	children: PropTypes.element
};

export default Modal;
