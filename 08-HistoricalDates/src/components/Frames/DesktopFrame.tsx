import {
  Wrapper, UpperBlock, VerticalBar, BottomBlock,
} from './DesktopFrame.styled';

const DesktopFrame = () => (
  <Wrapper>
    <UpperBlock>
      <VerticalBar />
    </UpperBlock>
    <BottomBlock>
      <VerticalBar />
    </BottomBlock>
  </Wrapper>
);

export default DesktopFrame;
