import { useEffect } from "react";
import { todoApi } from "./services/api";
import Header from "./components/Header";
import StatsCard from "./components/StatsCard";

const App = () => {
  /*  useEffect(() => {
    const test = async () => {
      const data = await todoApi.getTodosByCompleted(true);
      console.log(data);
    };
    test();
  }, []); */
  return (
    <div className="bg-yellow-100 min-h-screen">
      <div className="bg-yellow-200 max-w-4xl mx-auto px-4 py-8">
        <Header />
        <StatsCard />
      </div>
    </div>
  );
};
export default App;
