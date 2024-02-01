import { useContext } from 'react';
import SliderLogicContext from '../contexts/SliderLogicContext';

const useSliderLogic = () => useContext(SliderLogicContext);

export default useSliderLogic;
