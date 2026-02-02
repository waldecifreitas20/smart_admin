import { Menu } from "./components/Menu";
import { Dashboard } from "./views/Dashboard";

function App() {

  return (
    <div className="flex text-slate-400 font-medium bg-purple-50/50 min-w-screen min-h-screen">
     <Menu/>  
     <Dashboard/> 
    </div>
  )
}

export default App;
