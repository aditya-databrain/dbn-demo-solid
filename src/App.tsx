import type { Component } from "solid-js";
import "dbn-ui-test-1/web";

const App: Component = () => {
  return (
    <dbn-dashboard
      token="f2834487-d196-463c-9a57-9e02f78c7dda"
      dashboardId="dev-orders"
    />
  );
};

export default App;
