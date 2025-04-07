<template>
    <div class="d-flex justify-content-center align-items-center">
        <form @submit.prevent="submitForm" class="form-pw-recovery p-5">
            <img src="../assets/images/logo.png" alt="Logo do sistema" class="logo">
            <br>
            <br>
            <h2 class="fw-bolder">Recuperar senha</h2>
            <br>
            <p class="text-start fw-bold">Insira seu e-mail e enviaremos um link para recuperar sua senha.</p>
            <br>
            <div class="form-group text-start">
                <label for="email">Email</label>
                <br>
                <input class="form-control" type="email" id="email" v-model="email" placeholder="Insira seu e-mail" maxlength="50" minlength="10" required>
            </div>
            <br>
            <button class="btn-action w-100 px-3 py-2" id="btn-enviar" type="submit" :disabled="isSubmitting">
                {{ isSubmitting ? 'Enviando...' : 'Enviar' }}
            </button>
            <div class="w-100 text-start">
                <br>
                <a class="text-decoration-none text-dark" href="/login">Voltar</a>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'PreRecuperarSenha',
        data() {
            return {
                email: '',
                isSubmitting: false
            }
        },
        methods: {
            async submitForm() {
                try {
                    this.isSubmitting = true;
                    const response = await fetch('http://127.0.0.1:8000/api/forgot-password', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ email: this.email }),
                    });
                    
                    if (response.ok) {
                        alert('Solicitação enviada com sucesso! Verifique seu e-mail para recuperar sua senha.');
                        this.email = '';
                    } else {
                        const data = await response.json();
                        alert(data.message || 'Ocorreu um erro ao enviar a solicitação. Tente novamente.');
                    }
                } catch (error) {
                    console.error('Erro:', error);
                    alert('Ocorreu um erro ao enviar a solicitação. Tente novamente.');
                } finally {
                    this.isSubmitting = false;
                }
            }
        }
    }
</script>

<style>
    .logo {
        width: 100px;
        height: auto;
        aspect-ratio: 1/1;
    }

    .form-pw-recovery {
        background-color: var(--color-secondary);
        border-radius: 5%;
        width: clamp(300px, 100%, 450px);
        height: fit-content;
    }

    .btn-action {
        border: none;
        border-radius: .5rem;
        font-weight: bold;
        background-color: var(--color-action);
        color: var(--color-primary);
    }
</style>