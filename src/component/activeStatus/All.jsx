import React, { useContext, useEffect, useState } from 'react'
import { BrowserContext } from '../browserContext/BrowserContext';

function All() {
const {isActive, transferDataToLocalStorage, getDataActivity,
        deleteExtension, handleToggleChange, setIsActive, getThemeStatus
      } = useContext(BrowserContext)
    
    //get extension array data from local storage
    var localExtensionStorage = JSON.parse(localStorage.getItem("extension-array") || "[]");
    useEffect(()=>{
        transferDataToLocalStorage() 
        getDataActivity()
    },[])

  return (
    <>
    {getThemeStatus !== null ?
      getThemeStatus === true ? 
              <div className='extension-card-container'>
              {localExtensionStorage.map((val, key)=>(
                 <div className='dark-extension-card' key={key}>
                 <div className='logo-txt-container'>
                   <img src={val.logo} alt="" />
                   <div className='txt-container'>
                     <p className='txt-title'>{val.name}</p>
                     <p className='dark-sub-txt'>{val.description}</p>
                   </div>
                 </div>
      
                 <div className='remove-toggle-div'>
                     <button className='dark-remove-btn'
                       onClick={()=>{deleteExtension(val)}}>Remove
                       </button>
                      
                        <label className="switch">
                       <input type="checkbox" 
                       checked = {val.isActive}
                       onChange={(e)=>
                       {
                        setIsActive(!isActive)
                        handleToggleChange(e, val)}}/>
                       <span className="dark-slider round"></span>
                     </label> 
                      
                   </div>
               </div>
              ))}     
            </div>  
      
      : 
         <div>
         <div className='extension-card-container'>
               {/* map through the extension data that is been stored in the local storage.
                Code can be found in the BrowserContext file found in the component folder*/}
               {localExtensionStorage.map((val)=>(
                  <div className='extension-card' key ={val.id}>
                  <div className='logo-txt-container'>
                    <img src={val.logo} alt="" />
                    <div className='txt-container'>
                      <p className='txt-title'>{val.name}</p>
                      <p className='sub-txt'>{val.description}</p>
                    </div>
                  </div>
  
                  <div className='remove-toggle-div' key={val.id}>
                      <button className='remove-btn'
                       onClick={()=>{deleteExtension(val)}}>Remove</button>
                       <label className="switch">
                       <input type="checkbox" 
                       checked = {val.isActive}
                       onChange={(e)=>
                       {setIsActive(!isActive)
                        handleToggleChange(e, val)}}  
                         />
                       <span className="slider round"></span>
                     </label>  
                    </div>
                </div>
               ))}
 
             </div>            
     </div>
     :
     <div className='extension-card-container'>
              {localExtensionStorage.map((val, key)=>(
                 <div className='dark-extension-card' key={key}>
                 <div className='logo-txt-container'>
                   <img src={val.logo} alt="" />
                   <div className='txt-container'>
                     <p className='txt-title'>{val.name}</p>
                     <p className='dark-sub-txt'>{val.description}</p>
                   </div>
                 </div>
      
                 <div className='remove-toggle-div'>
                     <button className='dark-remove-btn'
                       onClick={()=>{deleteExtension(val)}}>Remove
                       </button>
                      
                        <label className="switch">
                       <input type="checkbox" 
                       checked = {val.isActive}
                       onChange={(e)=>
                       {
                        setIsActive(!isActive)
                        handleToggleChange(e, val)}}/>
                       <span className="dark-slider round"></span>
                     </label> 
                      
                   </div>
               </div>
              ))}     
            </div> 
    }
    </>
  )
}

export default All