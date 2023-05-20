import React from 'react';
const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  zIndex: 1000,
  padding: '30px',
  backgroundColor: '#fff',
  transform: 'translate(-50%,-50%)'
} as React.CSSProperties
const OVERLAY_STYLES = {
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 9999
} as React.CSSProperties
function ModalContent({ children, isOpen }: {children: any, isOpen: any}) {
  return (
    <>
      <div style={OVERLAY_STYLES} onClick={() => isOpen(false)} />
      <div style={MODAL_STYLES}>{children}</div>
    </>
  );
}

export default ModalContent;
