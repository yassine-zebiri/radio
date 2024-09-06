
import {  useState } from 'react'
import './App.css'
import Route from './Pages';
import Header from './components/Header';
import HomePage from './Pages/HomePage';
import RadioPage from './Pages/RadioPage';
import SettingsPage from './Pages/SettingPage';
import RadiosWliya from './Pages/RadiosWliya';

function App() {
 
  const[Page,SetPage]=useState<{page:string,id?:number}>({page:"/HomePage"});
  const ChangePage=({page,id}:{page:string,id?:number})=>{
    SetPage({page:page,id:id})
  }


  
    return (
      <main>
        <Header handle={(e:any)=>ChangePage(e)}/>
        <Route stats={Page.page} path={"/HomePage"} component={<HomePage handle={ChangePage} />}/> 
        <Route stats={Page.page} path={"/RadioPage"} component={<RadioPage id={Page.id} />} />
        <Route stats={Page.page} path={"/SettingsPage"} component={<SettingsPage/>} />
        <Route stats={Page.page} path={"/RadiosWliyaPage"} component={<RadiosWliya handle={ChangePage}/> } />

      </main>
    )
  
}

export default App;


