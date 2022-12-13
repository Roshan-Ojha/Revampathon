import { Children, createContext, useState } from "react";

const AdContext = createContext({ blockAd: false, magazine: false });

export const AdContextProvider = (props) => {
  const [blockAd, setBlockAd] = useState(false);
  const [magazine, setmagazine] = useState(false);

  const blockAdFunction = () => {
    setBlockAd(true);
  };

  const showAdFunctin = () => {
    setBlockAd(false);
  };

  const showmagazineFunction = () => {
    setmagazine(true);
  };

  const hidemagazineFunction = () => {
    setmagazine(false);
  };

  return (
    <AdContext.Provider
      value={{
        adblock: blockAdFunction,
        showad: showAdFunctin,
        blockAd: blockAd,
        showmagazine: showmagazineFunction,
        hidemagazine: hidemagazineFunction,
        magazine: magazine,
      }}
    >
      {props.children}
    </AdContext.Provider>
  );
};
export default AdContext;
