import {  useEffect, useState } from "react";

function RadiosWliya(props:{handle({page,id}:{page:string,id:number}):void} ){
    const[radios,SetRadios]=useState([]);
    useEffect( function(){
        fetch("/radio.json")
        .then(res=>res.json())
        .then(res=>{
            if(res.length>0 && res!=undefined){
                let result=res.filter((e: { type: string; })=>e.type)
                SetRadios(result)
            }})
            
    
    },[]);
    
    
    return(
        <>
        <h1 style={{fontSize:"26px"}}>الإذاعة الولائية</h1>
         <div className="boxs">
            {radios.map((e: { name: string ,pic:string,id:number },index: number)=>
                (
                    <div key={index} className="box"
                    onClick={()=>props.handle({page:'/RadioPage',id:e.id})}
                    >
                        <img src={e.pic} alt="" width={"100%"} />
                        <p>{e.name}</p>
                    </div>
                )
            )}
            
        </div>
        </>
    )
}
export default RadiosWliya;
