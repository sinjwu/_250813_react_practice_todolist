import { useEffect } from "react";
import { todoApi } from "./services/api";

const App = () => {
  useEffect(() => {
    const test = async () => {
      const data = await todoApi.getAllTodos();
      console.log(data);
    };
    test();
  }, []);
  return <div className="bg-orange-100">App</div>;
};
export default App;
