import { useRef, useEffect } from "react";
import LoadingBar, { LoadingBarRef } from "react-top-loading-bar";

const AnimatedLoadingBar = () => {
  const ref = useRef<LoadingBarRef | null>(null); // Ensure proper typing

  useEffect(() => {
    if (ref.current) {
      ref.current.continuousStart();
      setTimeout(() => {
        if (ref.current) ref.current.complete(); // Complete instead of resetting
      }, 2000); // Adjust timing based on your needs
    }
  }, []);

  return <LoadingBar color="orange" ref={ref} height={3} />;
};

export default AnimatedLoadingBar;
