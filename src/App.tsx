import { Button, Checkbox } from "components/ui";
import { DashboardLayout } from "layouts";

function App() {
  return (
    <DashboardLayout>
      {/* Example with "solid" variant and "lg" size */}
      <Button variant="solid" size="lg" loading>
        Large Solid Button
      </Button>

      {/* Example with "outline" variant and "sm" size */}
      <Button variant="outline" size="sm">
        Small Outline Button
      </Button>
    </DashboardLayout>
  );
}

export default App;
