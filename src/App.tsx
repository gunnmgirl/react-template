import { Button } from "components/ui/button";

function App() {
  return (
    <div>
      {/* Example with "solid" variant and "lg" size */}
      <Button variant="solid" size="lg" loading>
        Large Solid Button
      </Button>

      {/* Example with "outline" variant and "sm" size */}
      <Button variant="outline" size="sm">
        Small Outline Button
      </Button>

      {/* Example with custom "danger" variant */}
      <Button visual="danger">Danger Button</Button>
    </div>
  );
}

export default App;
