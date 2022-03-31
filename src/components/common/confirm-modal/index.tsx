import React from 'react';
import { ConfirmModalWrapper, Modal } from './styled';
import { ConfirmModalProps } from 'types';

const ConfirmModal = ({ message, onclick }: ConfirmModalProps) => {
	return (
		<ConfirmModalWrapper>
			<Modal>
				<p>{message}</p>
				<button onClick={() => onclick(true)}>CONFIRM</button>
				<button onClick={() => onclick(false)}>CANCEL</button>
			</Modal>
		</ConfirmModalWrapper>
	);
};

export default ConfirmModal;
