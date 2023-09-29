import { useContext } from 'react';
import errorsContext from '../contexts/ErrorsContext';

const useErrors = () => useContext(errorsContext);

export default useErrors;
