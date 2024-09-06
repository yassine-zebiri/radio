import { ChangeEvent, useState } from "react";

function SettingsPage(){
    const [them,SetThem]=useState('light')
    const handleChange=(e: ChangeEvent<HTMLInputElement>)=>{

        SetThem(e.target.value)
        
    }
    console.log(them);
    
    return(
        <>
        <div className="settings">
        <div className="selectThem">
            <input type="radio" onChange={handleChange} value={"dark"} id="dark" style={{display:"none"}}   name="them" checked={"dark"==them} />
            <label htmlFor="dark">الوضع الداكن</label>
        </div>
        <div className="selectThem">
            <input type="radio"  onChange={handleChange} name="them" value={"light"} style={{display:"none"}} id="ligth" checked={"light"==them} />
            <label htmlFor="ligth">الوضع المضئ</label>
        </div>
        <input type="radio" onChange={handleChange}  value={"blue"} name="them" checked={"blue"==them} />
        </div>
        </>
    )
}
export default SettingsPage;