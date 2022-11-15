import { useState } from "react";
import { UserContext } from "./Context/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import SideMenu from "./molecules/side-menu";
import Dashboard from "./organisms/dashboard";
import Header from "./organisms/header";
import Project from "./organisms/project";
import Team from "./organisms/team";
import CreateUser from "./organisms/createUser";

const queryClient = new QueryClient();

function App() {
  const [edit, setEdit] = useState(false);

  function toggleEdit(val) {
    setEdit(!edit);
  }
  return (
    <Router>
      <UserContext.Provider value={{ edit, toggleEdit }}>
        <QueryClientProvider client={queryClient}>
          <div className="container">
            <Header />
            <div className="row body-section">
              <SideMenu />
              <Routes>
                <Route exact path="/" element={<Dashboard />}></Route>
                <Route exact path="/team" element={<Team />}></Route>
                <Route exact path="/project" element={<Project />}></Route>
                <Route exact path="/user" element={<CreateUser />}></Route>
              </Routes>
            </div>
          </div>
        </QueryClientProvider>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
