const API_URL = 'http://localhost:8080';

export const api = {
  async get<T>(endpoint: string): Promise<T> {
    const token = localStorage.getItem("token");
    const res = await fetch(`${API_URL}/${endpoint}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!res.ok) throw new Error(`Erro ao buscar dados: ${res.statusText}`);
    return res.json();
  },

  async post<T>(endpoint: string, data: any): Promise<T> {
    const token = localStorage.getItem("token");

    console.log("Tentando enviar requisição para:", `${API_URL}/${endpoint}`);
    console.log("Payload enviado:", JSON.stringify(data, null, 2));

    const res = await fetch(`${API_URL}/${endpoint}`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}), 
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const errorText = await res.text(); 
      throw new Error(`Erro ao enviar dados: ${errorText}`);
    }

    return res.json();
  },

  async login(email: string, senha: string) {
    try {
      const res = await fetch(`${API_URL}/users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha }),
      });
  
      if (!res.ok) {
        throw new Error("Credenciais inválidas");
      }
  
      const data = await res.json();
      console.log("Token recebido:", data.token); // Verificar no console do navegador
  
      // Salvar token corretamente
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data));
  
      return data.token;
    } catch (error) {
      console.error("Erro no login:", error);
      return null;
    }
  },
  

  async getUsers() {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${API_URL}/users`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) throw new Error("Erro ao buscar usuários");
      return res.json();
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
      return [];
    }
  },

  async deleteUser(id: number) {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${API_URL}/users/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) throw new Error("Erro ao excluir usuário");
      return true;
    } catch (error) {
      console.error("Erro ao excluir usuário:", error);
      return false;
    }
  },

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  },

  getToken() {
    return localStorage.getItem("token");
  },

  getUser() {
    return JSON.parse(localStorage.getItem("user") || "{}");
  },
  async updateUser(id: number, data: any) {
    const token = localStorage.getItem("token");
  
    const res = await fetch(`${API_URL}/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
  
    if (!res.ok) {
      const errorText = await res.text();
      console.error(`❌ Erro ao atualizar usuário: ${res.status} - ${errorText}`);
      throw new Error(`Erro ao atualizar usuário: ${errorText}`);
    }
  
    return res.json();
  }
  
};

