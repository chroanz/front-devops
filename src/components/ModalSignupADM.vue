<template>
    <div v-if="isVisible" class="modal-overlay">
        <div class="modal-container">
            <h2>Cadastrar ADM</h2>
            <form @submit.prevent="submitForm">
                <div class="form-group">
                    <label for="name">Nome</label>
                    <input type="text" id="name" v-model="form.name" required />
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" v-model="form.email" required />
                </div>
                <div class="form-group">
                    <label for="password">Senha</label>
                    <input type="password" id="password" v-model="form.password" required />
                </div>
                <div class="form-group">
                    <label for="confirm_password">Digite a senha novamente</label>
                    <input type="password" id="confirm_password" v-model="form.confirm_password" required />
                </div>
                <div class="form-actions">
                    <button type="submit">Cadastrar</button>
                    <button type="button" @click="closeModal">Cancelar</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "ModalSignupADM",
    props: {
        isVisible: {
            type: Boolean,
            default: true,
            required: true,
        },
    },
    data() {
        return {
            form: {
                name: "",
                email: "",
                password: "",
                confirm_password: "",
            },
        };
    },
    methods: {
        submitForm() {
            this.$emit("submit", this.form);
            this.resetForm();
            this.closeModal();
        },
        closeModal() {
            this.$emit("close");
        },
        resetForm() {
            this.form = {
                name: "",
                email: "",
                password: "",
                confirm_password: "",
            };
        },
    },
};
</script>

<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-container {
    background: white;
    padding: 20px;
    border-radius: 8px;
    width: 400px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.form-group {
    margin-bottom: 15px;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
    text-align: left;
}

.form-group input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
}

.form-actions {
    display: flex;
    justify-content: space-between;
}

button {
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button[type="submit"] {
    background-color: #4caf50;
    color: white;
}

button[type="button"] {
    background-color: #f44336;
    color: white;
}
</style>