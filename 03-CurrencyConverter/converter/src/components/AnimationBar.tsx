import { useSelector } from 'react-redux';
import { RootState } from '../slices';

const AnimationBar = () => {
  const loadingStatus = useSelector((state: RootState) => state.countries.loadingStatus);
  const axiosError = useSelector((state: RootState) => state.currencies.axiosError);

  if (loadingStatus === 'rejected' || axiosError) {
    return (
      <>
        <div className="animation-circle circle-error" />
        <h2>Ошибка загрузки</h2>
      </>
    );
  }
  return (
    <>
      <div className="animation-circle" />
      <h2>Загрузка</h2>
    </>
  );
};

export default AnimationBar;
