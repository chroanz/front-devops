<template>
  <div class="cards d-flex flex-row align-items-center px-4 position-relative">
    <div class="col-1">
      <img src="@/assets/icons/book.svg" class="img-fluid">
    </div>
    <div class="col-1 text-center">{{ leitura.sequencia }}</div>
    <div class="col-8 text-truncate px-2">{{ leitura.titulo }}</div>
    <div class="col-2 text-end">
      <div class="dropdown" v-if="user?.user?.isAdmin" :class="{ dropup }" @mouseenter="showDropdown"
        @mouseleave="closeDropdown" ref="dropdown" style="display:inline-block;">
        <button class="btn btn-sm btn-secondary">Ações</button>
        <ul v-show="dropdownOpen" class="dropdown-menu show" ref="menu"
          style="display:block; position:absolute; right:0; z-index:10;" @mousedown.prevent>
          <li>
            <button class="dropdown-item text-primary" @click="editarLeitura">Editar</button>
          </li>
          <li>
            <button class="dropdown-item text-danger" @click="deletarLeitura">Deletar</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { Leitura } from '@/models/models';
import leituraService from '@/services/leituraService';

export default {
  name: "StripLeitura",
  props: {
    leitura: Leitura
  },
  data() {
    return {
      dropdownOpen: false,
      dropup: false,
      user: JSON.parse(sessionStorage.getItem('user') || '{}')
    }
  },
  methods: {
    async showDropdown() {
      this.dropdownOpen = true;
      await this.$nextTick();
      const dd = this.$refs.dropdown.getBoundingClientRect();
      const menu = this.$refs.menu.getBoundingClientRect();
      this.dropup = dd.bottom + menu.height > window.innerHeight;
    },
    closeDropdown() {
      this.dropdownOpen = false;
      this.dropup = false;
    },
    editarLeitura() {
      this.$router.push({ path: `/leituras/edit/${this.leitura.id}` });
    },
    deletarLeitura() {
      let response = leituraService.deletar(this.leitura.id)
      response.then(() => {
        this.$toast({
          title: 'Sucesso',
          message: 'Leitura deletada com sucesso',
          background: '#28a745'
        });
        window.location.reload();
      }).catch(() => {
        this.$toast({
          title: 'Erro',
          message: 'Erro ao deletar a leitura. ',
          background: '#dc3545'
        });
      });
    }
  }
}
</script>

<style scoped>
.cards {
  height: 60px;
  border: 1px solid black;
  background-color: var(--color-primary);
  max-width: 30em;
  font-size: .75em;
  position: relative;
}

.img-fluid {
  max-height: 40px;
  width: auto;
}

.dropdown-menu {
  min-width: 8rem;
}

/* Quando .dropup estiver ativo, reposiciona o menu acima */
.dropup .dropdown-menu {
  top: auto !important;
  bottom: 100% !important;
  margin-bottom: .125rem;
}
</style>