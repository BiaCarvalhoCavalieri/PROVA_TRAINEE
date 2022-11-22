import { LoginPage} from "./pages";
import { ApolloProvider } from "@apollo/client";
import { client } from "./graphql/client";
import { BrowserRouter, Route } from "react-router-dom";
import './App.css'
import { Dashboard } from "./pages/Dashboard";

function App() {
  return (
    <ApolloProvider client={client}>
      {/* <BrowserRouter> */}
        {/* <Route exact path="/">     */}
          <div className="App">
            <div className="header">
              <h2 className="header-text" >Academy 
                <span className="header-text__second">
                  Store
                </span>
              </h2>
            </div>
            <LoginPage/>
          </div>
        {/* </Route> */}
        {/* <Route exact path="/dashboard">
              <Dashboard />
          </Route>
      </BrowserRouter> */}
    </ApolloProvider>
  )
}

export default App
