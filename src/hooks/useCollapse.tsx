import { useState } from 'react';

const useCollapse = () => {
  const [activeIndex, setActiveIndex] = useState<undefined | number>(undefined);

  const handleSetIndex = (index: number) => {
    setActiveIndex((current) => (current === index ? undefined : index));
  };

  return {
    activeIndex,
    handleSetIndex,
  };
};

export default useCollapse;
