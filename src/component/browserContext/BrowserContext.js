import { useState } from "react";
import { createContext } from "react";
import {data} from '../browserExtensions/Data'

export const BrowserContext = createContext();

function BrowserProvider (props){
    const [isActive, setIsActive] = useState(false)
    const getStatus = JSON.parse(localStorage.getItem("activeStatus"))
    const getThemeStatus = JSON.parse(localStorage.getItem("theme"))
    //get extension array data from local storage
    var localExtensionStorage = JSON.parse(localStorage.getItem("extension-array") || "[]");
    const [active, setActive] = useState([])
    const [inActive, setInActive] = useState([])


       //transferring data.js to localstorage for easy state change update and to be able to 
        // retrieve active and inactive extension browsers 
        const transferDataToLocalStorage = () =>{
          //if localstorage length is 0, transfer data.js to localstorage
          if(localExtensionStorage.length == 0){
            const allData = data.map(val => ({
              id: val.id,
              logo: val.logo,
              name: val.name,
              description: val.description,
              isActive: isActive
            }));
            // Save once after processing the data
          localStorage.setItem("extension-array", JSON.stringify(allData));
          localStorage.setItem("activeStatus", JSON.stringify("all"));
          }
        }
    
        const getDataActivity = () =>{ 
          const activeExtension = localExtensionStorage.filter(ext => ext.isActive === true);   
          setActive(activeExtension)
    
          const inActiveExtension = localExtensionStorage.filter(ext => ext.isActive === false);   
          setInActive(inActiveExtension)
         }   
    
        //remove extension from localstoarge
        const deleteExtension = (val)=>{
          const updatedExtension = localExtensionStorage.filter((details) => details.id !== val.id); 
          localStorage.setItem("extension-array", JSON.stringify(updatedExtension));
          setTimeout(()=>{          
            window.location.reload();
           },1000)
        }
    
        const handleToggleChange = (e, val) =>{   
              //get extension array data from local storage
        var localExtensionStorage = JSON.parse(localStorage.getItem("extension-array") || "[]");
          //save the selected checkbox in the localstorage
            if(e.target.checked === true){   
              const updateLocalStorage= localExtensionStorage.map(data =>
                val.id === data.id ? { 
                  ...data, 
                  isActive: true, 
                }
                : data
              ); 
              // Save the updated array back to localStorage
              localStorage.setItem("extension-array", JSON.stringify(updateLocalStorage)); 
              if (getStatus === "all"){
                const updateLocalStorage= localExtensionStorage.map(data =>
                  val.id === data.id ? { 
                    ...data, 
                    isActive: true, 
                  }
                  : data
                ); 
                // Save the updated array back to localStorage
                localStorage.setItem("extension-array", JSON.stringify(updateLocalStorage));
              } 
                if (getStatus === "active" || getStatus === "inactive"){
                const updateLocalStorage= localExtensionStorage.map(data =>
                  val.id === data.id ? { 
                    ...data, 
                    isActive: true, 
                  }
                  : data
                ); 
                // Save the updated array back to localStorage
                localStorage.setItem("extension-array", JSON.stringify(updateLocalStorage));
                window.location.reload();
              }
             
            }
    
            else if(e.target.checked === false){  
              if (getStatus === "all"){
                const updateLocalStorage= localExtensionStorage.map(data =>
                  val.id === data.id ? { 
                    ...data, 
                    isActive: false, 
                  }
                  : data
                ); 
                // Save the updated array back to localStorage
                localStorage.setItem("extension-array", JSON.stringify(updateLocalStorage));
              } 
              else if (getStatus === "active" || getStatus === "inactive"){
                const updateLocalStorage= localExtensionStorage.map(data =>
                  val.id === data.id ? { 
                    ...data, 
                    isActive: false, 
                  }
                  : data
                ); 
                // Save the updated array back to localStorage
                localStorage.setItem("extension-array", JSON.stringify(updateLocalStorage));
                window.location.reload();
              }   

            }
          }   
  

      const allExports = {isActive, active, inActive,
                          transferDataToLocalStorage, getDataActivity,
                          deleteExtension, handleToggleChange, setIsActive, getThemeStatus,
                          };
     
    return(
        <BrowserContext.Provider value={allExports}>
            {props.children}
        </BrowserContext.Provider>
     )
}

export default BrowserProvider;