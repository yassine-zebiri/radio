import { ChangeEvent,  Key, useEffect, useState } from "react";

function HomePage(props:any){
    const[radios,SetRadios]=useState([]);
    useEffect( function(){
        fetch("/radio/radio.json")
        .then(res=>res.json())
        .then(res=>{
            if(res.length>0 && res!=undefined){
                console.log(res);
                SetRadios(res)
                
            }})
            
    
    },[]);
    const[search,SetSearch]=useState([]);
    const [isSearching,SetIsSearching]=useState("");

    const searchRadio =(e: ChangeEvent<HTMLInputElement>)=>{
        let prop=e.target.value.trim();
        SetIsSearching(prop)
        let regExp=new RegExp(`${prop}`,'gi');
        let result=radios.filter((e:{name:string})=>regExp.test(e.name)) 
        SetSearch(result)
        if(prop.length==0) SetSearch([])
         
              
        
    }

    
    
    return (
        <>
        <div style={{display:"flex",justifyContent:"center"}}>
            <div id="search">
                <label htmlFor="">البحث 🔎</label>
                <input placeholder="ابحث عن اذاعة ..." type="text" value={isSearching} onChange={(e)=>searchRadio(e)}  />
            </div>
        </div>
        {(isSearching.length>0 ) && (
        <>
            <h2 style={{width:"100%"}}>  نتائج البحث🔎 : </h2>
            <div className="boxs">
                
                {search.map((e: { name: string ,pic:string ,id:number},index: Key)=>
                    (
                        <div key={index} className="box"
                        onClick={()=>props.handle({page:'/RadioPage',id:e.id})}
                        >
                            <img src={e.pic} alt="" width={"100%"} />
                            <p>{e.name}</p>
                        </div>
                    )
                )}
                {(!(search.length>0) && isSearching.length>0) && (<h3>لا توجد نتائج 😥</h3>)}
            </div>
            <hr style={{border:"0.25rem solid",borderRadius:"1rem",width:"100%",margin:"1rem"}}/>
        </>)}
        <div className="boxs" style={{paddingBottom:"6rem"}}>
            {radios.map((e: { name: string ,pic:string,id:string },index: Key)=>
                (
                    <div key={index} className="box"
                    onClick={()=>props.handle({page:'/RadioPage',id:parseInt(e.id)})}
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

export default HomePage;