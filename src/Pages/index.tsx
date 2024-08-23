interface Page{
    stats:string;
    path:string;
    component:JSX.Element
}
function Route(props:Page){
    
    if(props.path===props.stats){
        return(
            <> {props.component} </>
        )
    }
}
export default Route;