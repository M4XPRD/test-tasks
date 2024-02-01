import dotsPositionMapping from './dotsPositionsMapping';

const updateDotsAngles = (angleRotated: number) => {
  dotsPositionMapping.forEach((dot) => {
    dot.angle = (dot.angle - angleRotated + 360) % 360;
    dot.currentRotation = (dot.currentRotation - angleRotated + 360) % 360;
  });
};

export default updateDotsAngles;
