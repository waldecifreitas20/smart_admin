import { Menu } from "./components/Menu";
import { Dashboard } from "./views/Dashboard";

function App() {

  return (
    <div className="flex text-slate-400 font-medium bg-purple-50/50 min-w-screen min-h-screen">
      <Menu/>  
      <div className="p-4 w-full max-w-[1000px]">
        <Dashboard/> 
      </div>
    </div>
  )
}

export default App;
