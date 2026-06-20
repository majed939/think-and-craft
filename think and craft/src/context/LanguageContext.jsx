import React, {
  createContext,
  useContext,
  useState
} from "react";


const LanguageContext = createContext();


export function LanguageProvider({ children }) {


  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "ar"
  );


  const changeLanguage = () => {

    const newLanguage =
      language === "ar" ? "en" : "ar";


    setLanguage(newLanguage);

    localStorage.setItem(
      "language",
      newLanguage
    );

  };



  return (

    <LanguageContext.Provider

      value={{
        language,
        changeLanguage
      }}

    >

      {children}

    </LanguageContext.Provider>

  );

}



export function useLanguage() {

  return useContext(LanguageContext);

}