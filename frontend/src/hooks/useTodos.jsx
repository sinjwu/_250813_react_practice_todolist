import { useState } from "react";

const useTodos = () => {
  const [stats, setStats] = useState({ total: 0, completed: 0, pending: 0 });
  const loadStats = async () => {
    try {
      const statsData = await todoApi.getStats();
      console.log(statsData);
    } catch (err) {
      console.err("Error loading stats:", err);
    }
  };
  useEffect(() => {
    loadStats();
  }, []);
};
