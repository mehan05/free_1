/* eslint-disable react/prop-types */
import  { useState } from 'react'
import ModuleForm from './ModuleForm';
const ModuleBar = ({handleModuleChange,modules}) => {
    const[show,setShow]=useState(false);
    const handleShow=()=>{
        setShow(!show);
    }
  return (

    <div>
         <  div className="   border-2  border-gray-600 rounded-md p-1 w-full max-w-4xl mx-auto mb-3  ">
              {modules.map((module, index) => (
                <div key={index}>
                      <div className='flex  justify-between p-3'>
                          <p className='text-xl font-semibold '>Modules</p>
                       
                        <button className="bg-gray-300 hover:bg-violet-500  font-bold py-1 px-2 rounded-md text-black text-xl m-1" onClick={handleShow}>{show?<img src="/down-arrow.png" className='  w-5 h-5' alt="" />:<img src="/up-arrow.png" className='w-5 h-5' alt="" />}</button>
                      </div>  
                      <div  className={`transition-opacity duration-700 ease-in-out ${show ? 'opacity-100' : 'opacity-0'}`}>   
                            {
                            show&& <ModuleForm handleModuleChange={handleModuleChange} index={index} module={module} />
                            }
                        </div>
                      
                </div>
              ))
            }
              
            </div>
    </div>
  )
}

export default ModuleBar  