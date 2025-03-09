import { useRef, useEffect } from "react";
import LoadingBar from "react-top-loading-bar";

const AnimatedLoadingBar = () => {
  const ref = useRef(null);

  useEffect(() => {
    ref.current.continuousStart();
    setTimeout(() => {
      ref.current.setProgress(0); // Smooth transition to 80%
    }, 0);
  }, []);

  return <LoadingBar color="orange" ref={ref} height={3} />;
};

export default AnimatedLoadingBar;
