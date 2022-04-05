
import './App.css'
import { Route, Redirect, Switch } from "react-router-dom"
import { adminRoute } from "./Router"
import Frame from './component/Frame';
function App() {
  return (
    <div style={{ height: "100%" }} >
      <Frame>
        <Switch>
          {
            adminRoute.map(item => {
              return <Route key={item.pathname} path={item.pathname} component={item.component}></Route>
            })
          }
          <Redirect from="/home" to='/home/base'></Redirect>
        </Switch>
      </Frame>
    </div>
  );
}

export default App;
