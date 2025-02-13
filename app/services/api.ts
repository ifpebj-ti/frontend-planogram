const API_URL="https://backplanograma.website";

export const api = {
  async get<T>(endpoint: string): Promise<T> {
    const token = localStorage.getItem("token");
    
    if (!token) {
        console.error("❌ Nenhum token encontrado! O usuário pode não estar autenticado.");
        throw new Error("Usuário não autenticado");
    }

    console.log("📡 Token usado na requisição:", token);

    const res = await fetch(`${API_URL}/${endpoint}`, {
        headers: { Authorization: `Bearer ${token}` },
    });

    if (!res.ok) {
      console.error(`❌ Erro ao buscar dados (${res.status}):`, res.statusText);
      throw new Error(`Erro ao buscar dados: ${res.statusText}`);
    }

    return res.json();
},


  async put<T>(endpoint: string, data: any): Promise<T> {
    const token = localStorage.getItem("token");

    const res = await fetch(`${API_URL}/${endpoint}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error(`❌ Erro ao atualizar: ${res.status} - ${errorText}`);
      throw new Error(`Erro ao atualizar: ${errorText}`);
    }

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
      console.log("Token recebido:", data.token);
      console.log("Dados do usuário:", data);
  
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify({ id: data.id, nome: data.nome, email: data.email, nivel_de_acesso: data.nivel_de_acesso }));
  
      return data.token;
    } catch (error) {
      console.error("Erro no login:", error);
      return null;
    }
  },

  async getUsers() {
    try {
      return await api.get("users");
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
    return await api.put(`users/${id}`, data);
  },

  async uploadFile(endpoint: string, formData: FormData): Promise<any> {
    try {
      const response = await fetch(`${API_URL}/${endpoint}`, {
        method: "POST",
        body: formData, 
      });

      if (!response.ok) {
        throw new Error(`Erro ao enviar arquivo: ${response.statusText}`);
      }

      return response.json();
    } catch (error) {
      console.error("❌ Erro no upload:", error);
      throw error;
    }
  },

  // ============================ PRATELEIRAS ============================

  async getShelves() {
    try {
      return await api.get("prateleiras");
    } catch (error) {
      console.error("Erro ao buscar prateleiras:", error);
      return [];
    }
  },

  async getShelfById(id: number) {
    try {
      return await api.get(`prateleiras/${id}`);
    } catch (error) {
      console.error("Erro ao buscar prateleira:", error);
      throw error;
    }
  },

  async addShelf(data: { name: string; link: string }) {
    try {
      return await api.post("prateleiras", data);
    } catch (error) {
      console.error("Erro ao adicionar prateleira:", error);
      throw error;
    }
  },

  async updateShelf(id: number, data: { name: string; link: string }) {
    try {
      return await api.put(`prateleiras/${id}`, data);
    } catch (error) {
      console.error("Erro ao atualizar prateleira:", error);
      throw error;
    }
  },

  async deleteShelf(id: number) {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${API_URL}/prateleiras/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) throw new Error("Erro ao excluir prateleira");
      return true;
    } catch (error) {
      console.error("Erro ao excluir prateleira:", error);
      return false;
    }
  },
  async getProductsByCategory(categoryId: number) {
    try {
      return await api.get(`categories/${categoryId}/produtos`);
    } catch (error) {
      console.error("Erro ao buscar produtos da categoria:", error);
      throw error;
    }
  },

  async uploadPlanilha(file: File): Promise<any> {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch(`${API_URL}/produtos/upload-planilha`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Erro ao enviar arquivo: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error("❌ Erro no upload da planilha:", error);
      throw error;
    }
  },
  
  
  
};



