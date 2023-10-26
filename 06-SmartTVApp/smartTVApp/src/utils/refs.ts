import { useRef } from 'react';
import inputButtons from './inputButtons';

type Refs = {
  [key: string]: React.RefObject<HTMLButtonElement>;
};

const inputRefs = inputButtons.reduce((acc: Refs, button: string) => {
  acc[button] = useRef<HTMLButtonElement>(null);
  return acc;
}, {});
const closeWindowRef = useRef<HTMLButtonElement>(null);
const checkboxRef = useRef(null);
const confirmPhoneRef = useRef(null);

const refs: Refs = {
  ...inputRefs,
  closeWindowRef,
  checkboxRef,
  confirmPhoneRef,
};

export default refs;
