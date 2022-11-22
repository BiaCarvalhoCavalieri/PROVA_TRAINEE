import reactLogo from './assets/react.svg'
import { LoginPage} from "./pages";
import { ApolloProvider } from "@apollo/client";
import { client } from "./graphql/client";
import './App.css'

function App() {
  return (
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  )
}

export default App
