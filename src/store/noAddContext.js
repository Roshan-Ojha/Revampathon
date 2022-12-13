import { Children, createContext, useState } from "react";

const AdContext = createContext({
  blockAd: false,
  magazine: false,
  wantaddmagazine: false,
  canmagazine: false,
});

export const AdContextProvider = (props) => {
  const [blockAd, setBlockAd] = useState(false);
  const [magazine, setmagazine] = useState(false);
  const [wantaddmagazine, setwantaddmagazine] = useState(false);
  const [canmagazine, setcanmagazine] = useState(false);

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

  const showwantaddmagazineFunction = () => {
    setwantaddmagazine(true);
  };

  const hidewantaddmagazineFunction = () => {
    setwantaddmagazine(false);
  };

  const canmagazineFunction = () => {
    setcanmagazine(true);
  };
  const cannotmagazineFunction = () => {
    setcanmagazine(false);
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
        showwantAddmagazine: showwantaddmagazineFunction,
        hidewantAddmagazine: hidewantaddmagazineFunction,
        wantaddmagazine: wantaddmagazine,
        showcanmagazine: canmagazineFunction,
        showcannotmagazine: cannotmagazineFunction,
        canmagazine: canmagazine,
      }}
    >
      {props.children}
    </AdContext.Provider>
  );
};
export default AdContext;
