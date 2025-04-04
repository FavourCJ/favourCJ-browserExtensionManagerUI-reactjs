import React, { useContext, useEffect } from 'react'
import { BrowserContext } from '../browserContext/BrowserContext';

function InActiveExt() {
  
  const {isActive, inActive, transferDataToLocalStorage, getDataActivity,
          deleteExtension, handleToggleChange, setIsActive, getThemeStatus
        } = useContext(BrowserContext)

    useEffect(()=>{
      transferDataToLocalStorage() 
      getDataActivity()
    },[])
    
  return (
   <>
        {getThemeStatus !== null ?
          getThemeStatus === true ? 
              <div className='extension-card-container'>
              {inActive.map((val, key)=>(
                 <div className= 'light-extension-card' key={key}>
                 <div className='logo-txt-container'>
                   <img src={val.logo} alt="" />
                   <div className='txt-container'>
                     <p className='txt-title'>{val.name}</p>
                     <p className='sub-txt'>{val.description}</p>
                   </div>
                 </div>
      
                 <div className='remove-toggle-div'>
                     <button className='remove-btn'
                       onClick={()=>{deleteExtension(val)}}>Remove
                       </button>
                      
                        <label className="switch">
                       <input type="checkbox" 
                       checked = {val.isActive}
                       onChange={(e)=>
                       {
                        setIsActive(!isActive)
                        handleToggleChange(e, val)}}/>
                       <span className="slider round"></span>
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
               {inActive.map((val)=>(
                  <div className='dark-extension-card' key ={val.id}>
                  <div className='logo-txt-container'>
                    <img src={val.logo} alt="" />
                    <div className='txt-container'>
                      <p className='txt-title'>{val.name}</p>
                      <p className='sub-txt'>{val.description}</p>
                    </div>
                  </div>
  
                  <div className='remove-toggle-div' key={val.id}>
                      <button className='dark-remove-btn'
                       onClick={()=>{deleteExtension(val)}}>Remove</button>
                       <label className="switch">
                       <input type="checkbox" 
                       checked = {val.isActive}
                       onChange={(e)=>
                       {setIsActive(!isActive)
                        handleToggleChange(e, val)}}  
                         />
                       <span className="dark-slider round"></span>
                     </label>  
                    </div>
                </div>
               ))}
 
             </div>            
     </div>
     :
     <div className='extension-card-container'>
              {inActive.map((val, key)=>(
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

export default InActiveExt