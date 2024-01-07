import "./App.css";
import Description from "./components/Description";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <div className="bg-[url('https://www.shutterstock.com/image-vector/social-media-doodle-seamless-pattern-600nw-1931497916.jpg')] w-full h-auto sm:h-screen flex flex-col sm:flex-row">
      <Description />
      {/* <Login /> */}
      <Register />
    </div>
  );
}

export default App;
