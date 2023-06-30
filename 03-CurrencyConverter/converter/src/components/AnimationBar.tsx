import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { RootState } from '../slices';

const AnimationBar = () => {
  const loadingStatus = useSelector((state: RootState) => state.countries.loadingStatus);
  const axiosError = useSelector((state: RootState) => state.currencies.axiosError);
  const { t } = useTranslation();

  if (loadingStatus === 'rejected' || axiosError) {
    return (
      <>
        <div className="animation-circle circle-error" />
        <h2>{t('components.animationBar.error')}</h2>
      </>
    );
  }
  return (
    <>
      <div className="animation-circle" />
      <h2>{t('components.animationBar.loading')}</h2>
    </>
  );
};

export default AnimationBar;
