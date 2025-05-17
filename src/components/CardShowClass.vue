<template>
    <div class="card-show-class">
      <!-- Abas de categoria -->
      <div class="tabs">
        <button
          v-for="category in categories"
          :key="category"
          :class="{ active: selectedCategory === category }"
          @click="selectedCategory = category"
        >
          {{ category }}
        </button>
      </div>
  
      <!-- Controles -->
      <div class="controls">
        <input
          v-model="searchQuery"
          placeholder="Buscar por título..."
          class="search-input"
        />
  
        <select v-model="sortOrder" class="filter-select">
          <option value="alphabetical">Ordem Alfabética</option>
          <option value="ratingDesc">Mais bem avaliados</option>
          <option value="ratingAsc">Menos bem avaliados</option>
        </select>
  
        <button @click="toggleView" class="toggle-icon" :title="viewMode === 'card' ? 'Modo Lista' : 'Modo Grade'">
          <svg v-if="viewMode === 'card'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"/>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4 4h7v7H4V4zm0 9h7v7H4v-7zm9-9h7v7h-7V4zm0 9h7v7h-7v-7z"/>
          </svg>
        </button>
      </div>
  
      <!-- Lista ou grade de aulas -->
      <div v-if="viewMode === 'card'" class="card-view">
        <div
          v-for="classItem in filteredAndSortedClasses"
          :key="classItem.id"
          class="card"
        >
          <img :src="classItem.image" alt="Imagem da aula" class="card-image" />
          <h3>{{ classItem.title }}</h3>
          <p>{{ classItem.description }}</p>
          <div class="rating">
            <span v-for="n in 5" :key="n" class="star" :class="{ filled: n <= classItem.rating }">★</span>
          </div>
        </div>
      </div>
  
      <div v-else class="list-view">
        <ul>
          <li
            v-for="classItem in filteredAndSortedClasses"
            :key="classItem.id"
            class="list-item"
          >
            <img :src="classItem.image" alt="Imagem da aula" class="list-image" />
            <div>
              <h3>{{ classItem.title }}</h3>
              <p>{{ classItem.description }}</p>
              <div class="rating">
                <span v-for="n in 5" :key="n" class="star" :class="{ filled: n <= classItem.rating }">★</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </template>  
  
  <script>
export default {
  name: "CardShowClass",
  data() {
    return {
      viewMode: "card",
      searchQuery: "",
      sortOrder: "alphabetical",
      selectedCategory: "Todas",
      categories: ["Todas", "Comunicação", "Pedagogia", "Deficiência Visual"],

      classes: [
        {
          id: 1,
          title: "Compreendendo a Surdocegueira",
          description: "Define a surdocegueira como deficiência única...",
          category: "Deficiência Visual",
          rating: 4,
          image: "https://via.placeholder.com/200x120?text=Aula+1"
        },
        {
          id: 2,
          title: "Comunicação Alternativa",
          description: "Apresenta métodos de comunicação como alfabeto tátil...",
          category: "Comunicação",
          rating: 5,
          image: "https://via.placeholder.com/200x120?text=Aula+2"
        },
        {
          id: 3,
          title: "Mediação Pedagógica",
          description: "Descreve o papel do guia-intérprete e estratégias...",
          category: "Pedagogia",
          rating: 3,
          image: "https://via.placeholder.com/200x120?text=Aula+3"
        },
        {
          id: 4,
          title: "Produção de Materiais Didáticos Acessíveis",
          description: "Ensina como adaptar livros, atividades...",
          category: "Pedagogia",
          rating: 6,
          image: "https://via.placeholder.com/200x120?text=Aula+4"
        },
        {
          id: 5,
          title: "Práticas Inclusivas em Sala de Aula",
          description: "Compartilha estratégias didáticas inclusivas...",
          category: "Pedagogia",
          rating: 7,
          image: "https://via.placeholder.com/200x120?text=Aula+5"
        }
      ],
    };
  },
  computed: {
    filteredAndSortedClasses() {
      let filtered = this.classes.filter((item) => {
        const matchesSearch = item.title.toLowerCase().includes(this.searchQuery.toLowerCase());
        const matchesCategory = this.selectedCategory === "Todas" || item.category === this.selectedCategory;
        return matchesSearch && matchesCategory;
      });

      switch (this.sortOrder) {
        case "alphabetical":
          return filtered.sort((a, b) => a.title.localeCompare(b.title));
        case "ratingDesc":
          return filtered.sort((a, b) => b.rating - a.rating);
        case "ratingAsc":
          return filtered.sort((a, b) => a.rating - b.rating);
        default:
          return filtered;
      }
    }
  },
  methods: {
    toggleView() {
      this.viewMode = this.viewMode === "card" ? "list" : "card";
    }
  }
};
</script>

<style scoped>
  
.card-show-class {
    padding: 20px;
    font-family: Arial, sans-serif;
  }
  
  /* Abas (categorias) */
  .tabs {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    flex-wrap: wrap;
    gap: 10px;
  }
  
  .tabs button {
    padding: 8px 16px;
    border: none;
    border-bottom: 2px solid transparent;
    background-color: transparent;
    cursor: pointer;
    font-weight: bold;
    font-size: 14px;
    color: #b070b0;
    transition: all 0.2s ease;
  }
  
  .tabs button:hover {
    color: #000;
  }
  
  .tabs button.active {
    border-color: #333;
    color: #000;
  }
  
  /* Controles */
  .controls {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 12px;
    margin-bottom: 30px;
  }
  
  .search-input,
  .filter-select {
    padding: 8px 12px;
    border-radius: 6px;
    border: 1px solid #ccc;
    font-size: 14px;
    min-width: 200px;
  }
  
  .toggle-icon {
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;
    border-radius: 6px;
    transition: background 0.2s;
  }
  
  .toggle-icon:hover {
    background: #f0f0f0;
  }
  
  /* Card View (Grade) */
  .card-view {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
  
  .card {
    border: 1px solid #ccc;
    padding: 15px;
    border-radius: 8px;
    width: 250px;
    background: #fff;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
    transition: transform 0.2s;
  }
  
  .card:hover {
    transform: translateY(-2px);
  }
  
  .card-image {
    width: 100%;
    height: 140px;
    object-fit: cover;
    border-radius: 5px;
    margin-bottom: 10px;
  }
  
  /* List View */
  .list-view ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .list-item {
    display: flex;
    align-items: flex-start;
    gap: 15px;
    border: 1px solid #ccc;
    padding: 15px;
    border-radius: 8px;
    margin-bottom: 15px;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
  }
  
  .list-image {
    width: 140px;
    height: 90px;
    object-fit: cover;
    border-radius: 5px;
  }
  
  /* Estrelas de avaliação */
  .rating {
    margin-top: 8px;
  }
  
  .star {
    color: #ccc;
    font-size: 18px;
    margin-right: 2px;
    transition: color 0.2s;
  }
  
  .star.filled {
    color: #b070b0;
  }
  
  /* Responsivo */
  @media (max-width: 768px) {
    .controls {
      flex-direction: column;
      align-items: center;
    }
  
    .card {
      width: 90%;
    }
  
    .list-item {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  
    .list-image {
      width: 100%;
      height: auto;
    }
  }
</style>  