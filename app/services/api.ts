
//const API_URL="https://backplanograma.website";
const API_URL="http://localhost:8080";

import { jwtDecode } from "jwt-decode";

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
        console.error(`❌ Erro ao fazer login: ${res.status} - ${res.statusText}`);
        throw new Error("Credenciais inválidas");
      }
  
      const data = await res.json();
      console.log("🔐 Token recebido:", data.token);
      console.log("👤 Nível de acesso:", data.nivel_de_acesso);
  
      const decodedToken: { id: number; nivel_de_acesso: string } = jwtDecode(data.token);
      console.log("📌 Dados extraídos do token:", decodedToken);
  
      if (!decodedToken.id) {
        console.error("❌ Erro: ID do usuário não encontrado no token");
        throw new Error("Erro ao autenticar usuário.");
      }
  
      
      localStorage.setItem("token", data.token);
      localStorage.setItem(
        "user",
        JSON.stringify({
          id: decodedToken.id,
          nivel_de_acesso: data.nivel_de_acesso,
        })
      );
  
      return data.token;
    } catch (error) {
      console.error("❌ Erro no login:", error);
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
      return await api.put(`/prateleiras/${id}`, data);
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
      return await api.get(`/categories/${categoryId}/produtos`);
    } catch (error) {
      console.error("Erro ao buscar produtos da categoria:", error);
      throw error;
    }
  },

  async uploadPlanilha(file: File): Promise<any> {
    const formData = new FormData();
    formData.append("planilha", file); 
  
    try {
      console.log("📂 Enviando planilha para API:", file.name);
      
      const response = await fetch(`${API_URL}/produtos/upload-planilha`, {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
        },
      });
  
      console.log("📡 Resposta da API:", response);
  
      if (!response.ok) {
        const errorText = await response.text();
        console.error(`❌ Erro ao enviar arquivo: ${errorText}`);
        throw new Error(`Erro ao enviar arquivo: ${errorText}`);
      }
  
      const result = await response.json();
      return result;
    } catch (error) {
      console.error("❌ Erro no upload da planilha:", error);
      throw error;
    }
  },
  async getProductsByShelf(shelveId: number): Promise<{ cod_slot: string; produto: string; quantidade: number; saida: number }[]> {
    try {
        console.log(`📡 Buscando produtos detalhados da prateleira ID: ${shelveId}`);
        
        const response = await api.get<{ cod_slot: string; produto: string; quantidade: number | null; saida: number | null }[]>(
            `shelves/${shelveId}/produtos/detalhado`
        );

        
        const formattedData = response.map(item => ({
            cod_slot: String(item.cod_slot), 
            produto: item.produto,
            quantidade: item.quantidade ?? 0, 
            saida: item.saida ?? 0, 
        }));

        console.log("📦 Produtos processados:", formattedData);
        return formattedData;
    } catch (error) {
        console.error("❌ Erro ao buscar produtos detalhados:", error);
        throw error;
    }
  },
  async getTotalProdutos(): Promise<number> {
    try {
      const response = await api.get<{ total: number }>("produtos/total");

      console.log("📦 Total de produtos recebidos:", response.total);

      return response.total;
    } catch (error) {
      console.error("❌ Erro ao buscar total de produtos:", error);
      return 0; 
    }
  },

  async getAllCategories(): Promise<{ id: number; nome: string }[]> {
    try {
      console.log("📡 Buscando todas as categorias...");
      const response = await api.get<{ id: number; nome: string }[]>("categories");
      console.log("📦 Categorias carregadas:", response);
      return response;
    } catch (error) {
      console.error("❌ Erro ao buscar categorias:", error);
      return [];
    }
  },
  async delete<T>(endpoint: string): Promise<T> {
    const token = localStorage.getItem("token");
  
    const res = await fetch(`${API_URL}/${endpoint}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  
    const errorText = await res.text(); 
  
    if (!res.ok) {
      console.error(`❌ Erro ao excluir (${res.status}):`, errorText);
      throw new Error(`Erro ao excluir: ${errorText}`);
    }
  
    return res.json();
  },
  async getProductsByShelfId(shelfId: number): Promise<{ cod_slot: string; produto: string; quantidade: number}[]> {
    try {
        console.log(`📡 Buscando produtos detalhados da prateleira ID: ${shelfId}`);

        const response = await api.get<{ cod_slot: string; produto: string; quantidade: number | null}[]>(
            `shelves/${shelfId}/produtos/detalhado`
        );

        const formattedData = response.map(item => ({
            cod_slot: String(item.cod_slot), 
            produto: item.produto,
            quantidade: item.quantidade ?? 0, 
           
        }));

        console.log("📦 Produtos processados:", formattedData);
        return formattedData;
    } catch (error) {
        console.error("❌ Erro ao buscar produtos detalhados:", error);
        throw error;
    }
  },

  
  
};



