<template>
    <div class="d-flex justify-content-center align-items-center">
        <form action="#" class="form-pw-recovery p-5">
            <img src="../assets/logo.png" alt="Logo do sistema" class="logo">
            <br>
            <br>
            <h2 class="fw-bolder">Alterar senha</h2>
            <br>
            <p class="text-start fw-bold">Insira e confirme a sua nova senha para confirmar a alteração</p>
            <br>
            <div class="form-group text-start">
                <label for="senha">Senha</label>
                <br>
                <input class="form-control" type="password" id="senha" name="senha" placeholder="Insira sua nova senha" maxlength="8" minlength="8" required>
            </div>
            <br>

            <div class="form-group text-start">
                <label for="confirmacao-senha">Confirme sua senha</label>
                <br>
                <input class="form-control" type="password" id="confirmaca-senha" name="confirmacao-senha" placeholder="Confirme sua nova senha" maxlength="8" minlength="8" required>
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
    export default {
        name: 'FormRecuperarSenha'
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