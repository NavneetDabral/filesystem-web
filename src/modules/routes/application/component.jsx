import React from 'react';


let Component =(props)=>{

  const fileItems=props.data.files.map(item =>(
    <div className="file-container">
    <div className={item.type}>
         .{item.Name.split('.')[1]}
    </div>
    {item.Name}
    </div>
   

   ))


   const folders =props.data.folders.map(folder=>(
        <div className="folder-container">
            <div className={folder.type}>
              
            </div>
            {folder.Name}
            
        </div>
       
   )) 



    return(
        <React.Fragment>
        
           {fileItems}
           {folders}
        
        </React.Fragment>
           
      
    )
}

export default Component;