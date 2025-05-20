<template>
    <div class="d-flex justify-content-center align-items-center">
        <form @submit.prevent="handleSubmit" class="form-pw-recovery p-5">
            <img src="../assets/images/logo.png" alt="Logo do sistema" class="logo">
            <br>
            <br>
            <input type="hidden" name="token" id="token">
            <input type="hidden" name="email" id="email">
            <h2 class="fw-bolder">Alterar senha</h2>
            <br>
            <p class="text-start fw-bold">Insira e confirme a sua nova senha para confirmar a alteração</p>
            <br>
            <div class="form-group text-start">
                <label for="password">Senha</label>
                <br>
                <input class="form-control" type="password" id="password" name="password" v-model="password" placeholder="Insira sua nova senha" maxlength="8" minlength="8" required>
            </div>
            <br>

            <div class="form-group text-start">
                <label for="password_confirmation">Confirme sua senha</label>
                <br>
                <input class="form-control" type="password" id="password_confirmation" name="password_confirmation" v-model="password_confirmation" placeholder="Confirme sua nova senha" maxlength="8" minlength="8" required>
            </div>
            <br>

            <button class="btn-action w-100 px-3 py-2" type="submit">Salvar</button>
            <div class="w-100 text-start">
                <br>
                <a class="text-decoration-none text-dark" href="/login">Voltar</a>
            </div>
        </form>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { api } from '@/services/api';

export default {
    name: 'FormRecuperarSenha',
    setup() {
        const token = ref('');
        const email = ref('');
        const password = ref('');
        const password_confirmation = ref('');
        
        onMounted(() => {
            const urlParams = new URLSearchParams(window.location.search);
            token.value = urlParams.get('token') || '';
            email.value = urlParams.get('email') || '';

            if (token.value) {
                document.getElementById('token').value = token.value;
            }
            if (email.value) {
                document.getElementById('email').value = email.value;
            }
        });
        
        const handleSubmit = async () => {
            try {
                // Validar se as senhas são iguais
                if (password.value !== password_confirmation.value) {
                    alert('As senhas não coincidem. Por favor, verifique.');
                    return;
                }
                
                // Preparar dados para envio
                const dados = {
                    token: token.value,
                    email: email.value,
                    password: password.value,
                    password_confirmation: password_confirmation.value
                };
                
                // Fazer requisição AJAX
                const response = await api.post('/reset-password', {
                    body: JSON.stringify(dados) 
                });
                
                const resultado = await response.json();
                
                // Mostrar alerta com a resposta
                alert(resultado.message || 'Senha alterada com sucesso!');
                
                // Redirecionar para login em caso de sucesso
                if (response.ok) {
                    window.location.href = '/login';
                }
            } catch (erro) {
                alert('Erro ao processar sua solicitação: ' + erro.message);
            }
        };
        
        return {
            token,
            email,
            password,
            password_confirmation,
            handleSubmit
        };
    }
};
</script>