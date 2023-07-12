import React, { useEffect } from "react";

const Scroll = () => {
  const scrollToTopOnMount = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    scrollToTopOnMount();
  }, []);

  return null;
};

export default Scroll;
