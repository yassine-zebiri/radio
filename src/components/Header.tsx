import RadioImg from "../assets/radio.svg";
import TowerCellImg from "../assets/tower-cell.svg";
interface IHeader{
    handle(e:{page:string,id?:number}):void
}

function Header(props:IHeader){
    return(
      <header>

        <div className="h-btn" onClick={()=>props.handle({page:"/HomePage"})}>
          <img src={RadioImg} alt="" />
          <p>الإذاعة</p>
        </div>

        <div className="h-btn" onClick={()=>props.handle({page:"/RadiosWliyaPage"})}>
          <img src={TowerCellImg} alt="" />
          <p>الولايات</p>
        </div>

        
      </header>
    )
}
export default Header;