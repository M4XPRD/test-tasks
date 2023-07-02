import { useContext } from 'react';

import langContext from '../contexts/LanguageContext';

const useLang = () => useContext(langContext);

export default useLang;
