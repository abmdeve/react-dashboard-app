import { ColorModeContext, useMode } from "./context/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./screens/global/Topbar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./screens/dashboard/dashboard";
import Team from "./screens/team/team";
import Invoices from "./screens/invoices/invoices";
import Contacts from "./screens/contacts/contacts";
import Bar from "./screens/bar/bar";
import Form from "./screens/form/form";
import Line from "./screens/line/line";
import Pie from "./screens/pie/pie";
import Faq from "./screens/faq/faq";
import Geography from "./screens/geography/geography";
import Calendar from "./screens/calendar/calendar";
import SidebarComponent from "./screens/global/SidebarComponent";

function App() {
  const { colorMode, theme } = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SidebarComponent />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/form" element={<Form />} />
              <Route path="/line" element={<Line />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/calendar" element={<Calendar />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
