import styled, { ThemeProvider } from 'styled-components'
import {AuthContextProvider, MyRoutes, Light, Dark, Sidebar, SidebarCard} from "./index"
import { createContext, useState } from 'react'
import {Device} from "./styles/breackpoints"

export const ThemeContext = createContext(null);

function App() {

  const [themeuse, setTheme] = useState('dark');
  const theme = themeuse === "light" ? "light":"dark";
  const themeStyles = theme=== "light" ? Light : Dark;
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (

    <>
    <ThemeContext.Provider value={{theme, setTheme}}>
      <ThemeProvider theme={themeStyles}>
        <AuthContextProvider>
          <Container className={sidebarOpen?"active":""}>

            <section className="ContentSidebar">
              <Sidebar state={sidebarOpen} setState={() => setSidebarOpen(!sidebarOpen)}/>
            </section>
            <section className="ContentMenuHambur"> Menu hamnburguesa</section>
            <section className="ContentRoutes"> 
              <MyRoutes/>
            </section>
            
          </Container>
        </AuthContextProvider>
      </ThemeProvider>
    </ThemeContext.Provider>
      
    </>
  )
}
const Container = styled.main`
  display: grid;
  grid-template-rows: 1fr;
  background-color: ${({theme}) => theme.bgtotal};

  .ContentSidebar{
    display: none;
  }

  .ContentMenuHambur{
    display: block;
    position: absolute;
    left: 20px;
  }

  @media ${Device.tablet} {
    grid-template-columns: 65px 1fr;
    &.active{
      grid-template-columns: 220px 2fr;
    }
    .ContentSidebar{
      display: initial;
    }
    .ContentMenuHambur{
      display: none;
    }
  }

  .ContentRoutes{
    grid-column: 1;
    width: 100%;
    @media ${Device.tablet} {
      grid-column: 2;
    }
  }
`
export default App
