import { FilterPanel } from "components/FilterPanel";
import { JobList } from "components/JobList";
import { TheHeader } from "components/TheHeader";
import { usePositions } from "features/positions/use-positions";

function App() {
  usePositions();
  return (
    <>
      <TheHeader />
      <main>
        <div className="container">
          <FilterPanel />
          <JobList />
        </div>
      </main>
      <footer> </footer>
    </>
  );
}

export default App;
