import axios from "axios";

// 프록시 안 쓰면 이대로, 프록시 쓰면 '/api' 로 바꿔도 됨
const API_BASE_URL = "http://localhost:8080/api";
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  // withCredentials: true, // 쿠키 세션이면 주석 해제
});
api.interceptors.request.use(
  (config) => {
    console.log(
      "API 요청:",
      config.method?.toUpperCase(),
      config.url,
      // GET은 data가 거의 없음 → params도 같이 출력
      { params: config.params, data: config.data }
    );
    return config;
  },
  (error) => {
    console.error("API 요청 에러:", error.message || error);
    return Promise.reject(error);
  }
);
api.interceptors.response.use(
  (response) => {
    console.log("API 응답:", response.status, response.data);
    // ❗중요: response를 그대로 반환해야 이후에서 response.data 사용 가능
    return response;
  },
  (error) => {
    // 네트워크 에러 대비
    const status = error.response?.status;
    const data = error.response?.data;
    console.error(
      "API 응답 에러:",
      status ?? "NO_STATUS",
      data ?? error.message
    );
    return Promise.reject(error);
  }
);
export const todoApi = {
  getAllTodos: async (params = {}) => {
    const response = await api.get("/todos", { params });
    return response.data;
  },
  getTodosPaged: async (
    page = 0,
    size = 10,
    sortBy = "createdAt", // ← 백엔드 필드명 확인해서 맞추기
    sortDir = "desc"
  ) => {
    const response = await api.get("/todos/page", {
      params: { page, size, sortBy, sortDir },
    });
    return response.data;
  },
  getTodoById: async (id) => {
    const response = await api.get(`/todos/${id}`);
    return response.data;
  },
  createTodo: async (todoData) => {
    const response = await api.post("/todos", todoData);
    return response.data;
  },
  updateTodo: async (id, todoData) => {
    const response = await api.put(`/todos/${id}`, todoData);
    return response.data;
  },
  toggleTodoCompleted: async (id) => {
    const response = await api.patch(`/todos/${id}/toggle`);
    return response.data;
  },
  deleteTodo: async (id) => {
    const response = await api.delete(`/todos/${id}`);
    return response.data;
  },
  getStats: async () => {
    const response = await api.get("/todos/stats");
    return response.data;
  },
  searchTodos: async (searchTerm) => {
    const response = await api.get("/todos", {
      params: { search: searchTerm },
    });
    return response.data;
  },
  getTodosByCompleted: async (completed) => {
    const response = await api.get("/todos", {
      params: { completed },
    });
    return response.data;
  },
};
