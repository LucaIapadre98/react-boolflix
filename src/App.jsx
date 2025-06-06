import { SearchProvider } from "./contents/Context";
import Header from "./components/Header";
import Main from "./components/Main";

export default function App(){

  return (
    <SearchProvider>
      <Header />
      <Main />
    </SearchProvider>
  )
}