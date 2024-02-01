import verticalColouredBar from '../../../assets/vertical-coloured-bar.svg';
import useScreenSize from '../../../hooks/useScreenSize';
import { Wrapper, VerticalColouredBar, TitleText } from './Title.styled';

const Title = () => {
  const { screenSize } = useScreenSize();

  return (
    <Wrapper>
      {screenSize.width > 767 && (
        <VerticalColouredBar src={verticalColouredBar} />
      )}
      <TitleText>Исторические даты</TitleText>
    </Wrapper>
  );
};

export default Title;
