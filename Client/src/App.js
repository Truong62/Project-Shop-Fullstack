import { useEffect } from "react";
import RouterPage from "./router/RouterPage";
import axios from "axios";

function App() {
  useEffect(() => {
    const activateSystem = async () => {
      try {
        await axios.get('https://nntshop.onrender.com/list-order');
      } catch (error) {
        console.error('Error activating system: ', error);
      }
    };

    const fetchData = async () => {
      await activateSystem();
    };

    fetchData();
  }, []);

  return (
    <div>
      <RouterPage></RouterPage>
    </div>
  );
}

export default App;
