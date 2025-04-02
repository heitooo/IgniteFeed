import igniteLogo from "./assets/ignite.png";
import { Profile } from "./components/profile";

export function App() {
  return (
    <>
      <header className="header">
        <img className="logo" src={igniteLogo} alt="" />
      </header>

        <div className="container">
          <div className="s-card-profile">
            <Profile/>
          </div>
        </div>

    </>
  );
}
