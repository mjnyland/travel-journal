import TravelCard from "./components/TravelCard";
import data from "./assets/data.js";
function App() {
  let i = 0;
  const content = data.map((item) => <TravelCard key={i++} data={item} />);
  return <div>{content}</div>;
}

export default App;
