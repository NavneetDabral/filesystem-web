import React from 'react';
import { Route} from 'react-router' // react-router v4/v5
import { NavLink as Link } from 'react-router-dom';
import Application from '../routes/application';
import Pictures from '../routes/pictures';
import Videos from '../routes/videos'; 


const Component =(props)=>{
    console.log(props.match.url);  



    let dropDown =()=>{
        let anchorNode=document.getElementsByClassName("drop-down-controller");
        console.log(anchorNode[0].nextElementSibling);
          if (anchorNode[0].nextElementSibling.children[0].hasAttribute("id")) {
            anchorNode[0].nextElementSibling.children[0].removeAttribute("id");
              let mapper =[...anchorNode[0].nextElementSibling.children[0].children]
              mapper.forEach((item,index)=>{
                setTimeout(()=>{
                   item.removeAttribute("id","show-li");   
                },700*index)
                 
              })
          }else{
             anchorNode[0].nextElementSibling.children[0].setAttribute("id","show");
            console.log( anchorNode[0].nextElementSibling.children[0].children) 
            let mapper =[...anchorNode[0].nextElementSibling.children[0].children]
           mapper.forEach((item,index)=>{
               setTimeout(()=>{
                  item.setAttribute("id","show-li");   
               },700*index)
                
             })
          }
          
        
      }

   return(

    <div className="app-container">
    <div className="vertical-nav">
        <span>ROOT</span>
        <ul> 
          <li><Link exact={true} activeStyle={{backgroundColor:"rgba(238,239,241,1)"}}  to={props.match.path}>apps</Link></li>
          <li><Link  activeStyle={{backgroundColor:"rgba(238,239,241,1)"}}  to={`${props.match.url}pictures`}>Pictures</Link></li>
          <li><Link  activeStyle={{backgroundColor:"rgba(238,239,241,1)"}}  to={`${props.match.url}videos`}>Videos</Link></li>
          <li className="drop-down-controller" onClick={dropDown}> docs</li>
            <div className="drop-down-nav">
              <ul>
                  <li>hi</li>
                  <li>hi</li>
                  <li>hi</li>
              </ul> 
            </div>
          <li> a.pdf</li>
          <li> b.jpg</li>
     </ul>
    </div>
    <div className="content">
            
              <Route exact path={props.match.path} component={Application}></Route>
              <Route path={`${props.match.path}pictures`} component={Pictures}></Route>
              <Route path={`${props.match.path}videos`} component={Videos}></Route>
           
    </div>
</div>
    
   )


}

export default Component;