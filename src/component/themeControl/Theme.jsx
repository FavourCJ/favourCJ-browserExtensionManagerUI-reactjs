import React, { useContext, useEffect, useState } from 'react'
import "./theme.css"
import { BrowserContext } from '../browserContext/BrowserContext';
import All from '../activeStatus/All';
import Active from '../activeStatus/Active';
import InActiveExt from '../activeStatus/InActiveExt';

function Theme() {
  const [theme, setTheme] = useState(false)
  const getStatus = JSON.parse(localStorage.getItem("activeStatus"))
  const {transferDataToLocalStorage, getDataActivity, getThemeStatus
        } = useContext(BrowserContext)

    useEffect(()=>{
      transferDataToLocalStorage() 
      getDataActivity()
    },[])

  return (
    <>
    {/* display website according to the user's prefernce. Dark mode is the default mode */}
     {
        theme ? 
            // if theme is set to true, display light mode
            <div className='theme-light-container'>
            <div className='theme-light'>
            <div className='logo-txt-div'>
            <img src="/assets/images/logo.png" alt="" className='theme-logo'/>
            <p className='light-txt'>Extenstions</p>
            </div>
            <button 
            className='light-btn'
            onClick={()=>{
              setTheme(!theme)
              localStorage.setItem("theme", JSON.stringify(theme));
              }}><img src="/assets/images/icon-moon.svg" alt="" className='theme-img'/></button>
            </div>

               <>
             {/* else if false, display inactive extensions */}
               <div className='theme-header-buttons-container'>
             <h2 className='theme-light-header'>Extensions List</h2>
            
             <div className='theme-light-header-buttons'>
               <button 
                className='theme-light-btn'
                // if activestatus is true, leave default color else if it is false, change button color to white
                //you can find the code in BrowserContext folder located at the component folder
                id= {getStatus === "all" ? '' : "light-active"}
                onClick={()=>{
                  getDataActivity()
                  localStorage.setItem("activeStatus", JSON.stringify("all"));
                }}
                >All</button>

               <button className='theme-light-btn' 
               // if activestatus is true, leave default color else if it is false, change button color to white
               //you can find the code in BrowserContext folder located at the component folder
               id= {getStatus === "active" ? '' : "light-active"}
                onClick={()=>{
                 getDataActivity()
                 localStorage.setItem("activeStatus", JSON.stringify("active"));
               }}
                >
                 Active</button>
                 <button className='theme-light-btn' 
               // if activestatus is true, change button color to white, else if it is false, leave default color 
               //you can find the code in BrowserContext folder located at the component folder
                id= {getStatus === "inactive" ? '' : "light-active"}
                 onClick={()=>{
                   getDataActivity()
                   localStorage.setItem("activeStatus", JSON.stringify("inactive"));
                 }}
                >
                 Inactive</button>
             </div>
           </div>

           {getStatus === "all" ?
             <All/>
            :
            <>
            {getStatus === "active" ?
            <Active/>
            :   
            <>
            {getStatus === "inactive" ?
            <InActiveExt/>
            :
            ""
            }
            </>
          
            }
            </>}
            </>
              
            </div>
            :  
            // if theme is set to false, display dark mode
            <div className='theme-dark-container'>
            <div className='theme-dark'>
            <div className='logo-txt-div'>
            <img src="/assets/images/logo.png" alt="" className='theme-logo'/>
            <p className='theme-txt'>Extenstions</p>
            </div>
            <button 
            className='dark-btn'
            onClick={()=>{
              setTheme(!theme)
              localStorage.setItem("theme", JSON.stringify(theme));
              }}><img src="/assets/images/icon-sun.svg" alt="" className='theme-img'/></button>  
            </div>
    
              <div className='theme-header-buttons-container'>
              <h2 className='theme-dark-header'>Extensions List</h2>
              <div className='theme-dark-header-buttons'>
                <button 
                id= {getStatus === "all" ? '' : "light-active"}
                  className="theme-dark-btn"
                  // if activestatus is true, leave default color else if it is false, change button color to white
                //you can find the code in BrowserContext folder located at the component folder
                  onClick={()=>{
                    getDataActivity()
                    localStorage.setItem("activeStatus", JSON.stringify("all"));
                  }}>All</button>
                <button className='theme-dark-btn' 
                // if activestatus is true, leave default color else if it is false, change button color to white
                //you can find the code in BrowserContext folder located at the component folder
                id= {getStatus === "active" ? '' : "light-active"}
                 onClick={()=>{
                  getDataActivity()
                  localStorage.setItem("activeStatus", JSON.stringify("active"));
                }}
                 >
                  Active</button>
                  <button className='theme-dark-btn' 
                  // if activestatus is true, change button color to white, else if it is false, leave default color 
                //you can find the code in BrowserContext folder located at the component folder
                id= {getStatus === "inactive" ? '' : "light-active"}
                  onClick={()=>{
                    getDataActivity()
                    localStorage.setItem("activeStatus", JSON.stringify("inactive"));
                  }}
                 >
                  Inactive</button>
              </div>
            </div>

            {getStatus === "all" ?
             <All/>
            :
            <>
            {getStatus === "active" ?
            <Active/>
            :   
            <>
            {getStatus === "inactive" ?
            <InActiveExt/>
            :
            ""
            }
            </>
          
            }
           </>
            }
                    
            </div>
 
            }
    </>
         
  )
}

export default Theme