import { useContext, createContext, useState } from "react";
import { global_theme } from "./variables";


const initialStates = {
  theme:"dark",
  setTheme:()=>{},

}

const MyContext = createContext(initialStates) // provide a shared space to use in other pages

export default function AppProvider({children}){

  const [theme, setTheme] = useState(initialStates.theme)
  
  return <MyContext.Provider value={{theme, setTheme}}>

    <style jsx global>
      {`
        body{
          background-image:
            radial-gradient(
              circle,
              ${global_theme[theme].f},
              ${global_theme[theme].s}
            );
          color:${global_theme[theme].text};
        }
      `}
    </style>
    
    {children}
  </MyContext.Provider>
}


// use the context to create hooks like useTheme
export function useTheme(){
  const {theme, setTheme} = useContext(MyContext)
  return {theme, setTheme}
}

