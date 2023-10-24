import { useContext } from 'react';

import appContext from '../contexts/AppContext';

const useApp = () => useContext(appContext);

export default useApp;
