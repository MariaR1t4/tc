import  {Transition}  from 'react-transition-group';
import React, { useRef } from 'react';

const duration = 1000;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0 },
  exited:  { opacity: 0 },
};

export default function MyFade({ in: inProp, cancelShow }) {
  const nodeRef = useRef(null);
  React.useEffect(() => {
    setTimeout(() => cancelShow(), duration);
  })
  return (
    <Transition nodeRef={nodeRef} in={inProp} timeout={duration} unmountOnExit>
      {state => (
        <div ref={nodeRef} style={{
          ...defaultStyle,
          ...transitionStyles[state]
        }}>
          
        </div>
      )}
    </Transition>
  );
}