import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard/Dashboard";
import Team from "./scenes/team/Team";
import Invoices from "./scenes/invoices/Invoices";
import Contacts from "./scenes/contacts/Contacts";
// import Bar from "./scenes/dashboard/bar";
import Form from "./scenes/form/Form";
// import Line from "./scenes/dashboard/line";
// import Pie from "./scenes/dashboard/pie";
// import FAQ from "./scenes/dashboard/faq";
// import Geography from "./scenes/dashboard/geography";
// import Calendar from "./scenes/dashboard/calendar";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              {/*<Route path="/line" element={<Line />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/calendar" element={<Calendar />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
