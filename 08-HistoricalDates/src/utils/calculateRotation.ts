import dotsPositionMapping from './dotsPositionsMapping';

const calculateRotation = (id: number, currentDotAngle: number = 60) => {
  const targetDot = dotsPositionMapping.find((dot) => dot.id === id);
  const targetAngle = targetDot?.angle;

  if (targetAngle !== undefined) {
    let angleToRotate = targetAngle - currentDotAngle;
    if (angleToRotate < -180) {
      angleToRotate += 360;
    } else if (angleToRotate > 180) {
      angleToRotate -= 360;
    }
    return angleToRotate;
  }
  return currentDotAngle;
};

export default calculateRotation;
