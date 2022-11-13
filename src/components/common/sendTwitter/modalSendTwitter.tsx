import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import SendTwitterComponent from './index';
// import './sendTwitter.scss';

const ModalSendTwitterComponent = () => {
  const [visible, setVisible] = useState(false);
  const onCancel = () => setVisible(false);
  const onOpen = () => setVisible(true);
  return (
    <>
      <Button type="primary" onClick={onOpen} size="large" className="trigger-btn" block shape="round">
        发推
      </Button>
      <Modal open={visible} onCancel={onCancel} title={'发推特'} footer={null}>
        <SendTwitterComponent onClose={onCancel} />
      </Modal>
    </>
  );
};

export default ModalSendTwitterComponent;
