// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { ColorModeContext, useMode } from "./context/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./screens/global/Topbar";

function App() {
  const { colorMode, theme } = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            <Topbar />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
