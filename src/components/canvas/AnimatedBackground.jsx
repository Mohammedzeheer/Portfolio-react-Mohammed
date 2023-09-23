import React,{Suspense} from 'react';
import './Animated.css';

const AnimatedBackground = ({icon }) => {
  return (
    <div className="animated-background">
      <Suspense>
         <img src={icon} alt="Icon" />
      </Suspense>
     
    </div>
  );
};

export default AnimatedBackground;
