import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout";
import Dashboard from "./pages/dashboard";
import Uploads from "./pages/uploads";
import PastProposals from "./pages/pastProposals";
import GenerateProposal from "./pages/generateProposal";
import ComplianceChecklist from "./pages/complianceChecklist";
import ProcurementCalendar from "./pages/procurementCalender";
import ResourceLibrary from "./pages/resourceLibrary";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/uploads" element={<Uploads />} />
            <Route path="/past-proposals" element={<PastProposals />} />
            <Route path="/generate-proposal" element={<GenerateProposal />} />
            <Route
              path="/compliance-checklist"
              element={<ComplianceChecklist />}
            />
            <Route
              path="/procurement-calendar"
              element={<ProcurementCalendar />}
            />
            <Route path="/resource-library" element={<ResourceLibrary />} />
            <Route path="*" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
