import { LazyMotion, domAnimation, MotionConfig } from 'framer-motion';
import { motionConfig } from '../utils/motionConfig';

export const MotionProvider = ({ children }) => {
  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig 
        reducedMotion={motionConfig.reducedMotion}
        transition={motionConfig.transition}
      >
        {children}
      </MotionConfig>
    </LazyMotion>
  );
};