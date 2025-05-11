
import {AuthContextProvider,MyRoutes} from "./index"

function App() {
 
  return (
  <>
  <AuthContextProvider>
    <MyRoutes/>
  </AuthContextProvider>
  </>

  );
}

export default App;
