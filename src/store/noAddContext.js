import { Children, createContext, useState } from "react";

const AdContext = createContext({ blockAd: false });

export const AdContextProvider = (props) => {
    const [blockAd, setBlockAd] = useState(false);

    const blockAdFunction =()=>{
        setBlockAd(true)
    }

    const showAdFunctin =()=>{
        setBlockAd(false);
    }

  return (
    <AdContext.Provider value={ {adblock:blockAdFunction,showad :showAdFunctin,blockAd:blockAd}}>
      {props.children}
    </AdContext.Provider>
  );
};
export default AdContext;
