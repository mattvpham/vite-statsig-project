import { StatsigProvider } from "statsig-react";
import "./App.css";
import { CallToAction } from "./CallToAction";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const user = { userID: "123" };

  return (
    <StatsigProvider
      sdkKey={import.meta.env.VITE_STATSIG_CLIENT_SDK_KEY}
      waitForInitialization={true}
      options={{
        environment: { tier: "development" },
      }}
      user={user}
    >
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <CallToAction />
    </StatsigProvider>
  );
}

export default App;
