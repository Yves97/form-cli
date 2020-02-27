<template>
    <div class="main-card">
        <h3>Register</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eum mollitia inventore, a minus neque sequi quasi ullam iste facere maxime explicabo eligendi assumenda, molestias debitis consequatur tempora repellat commodi.</p>
        <form>
            <div class="input-group">
                <input type="text" placeholder="Votre nom" class="input-name">
            </div>
            <div class="input-group">
                <input type="text" placeholder="Votre Prenom" class="input-prenom">
            </div>
            <div class="input-group">
                <input type="email" placeholder="Votre Email" class="input-email">
            </div>
            <div class="input-group">
                <input type="password" placeholder="Votre Mot de Passe" class="input-password">
            </div>
            <div>
                <div class="radio-select">
                    <input type="radio" id="masculin" name="sexe">
                    <label for="sexe">Masculin</label>
                </div>
                <div class="radio-select">
                    <input type="radio" name="sexe" id="feminin">
                    <label for="feminin">Féminin</label>
                </div>
            </div>
            <div class="input-group">
                <p>Votre langage au choix :</p>
                <select placeholder="langage">
                    <option value="javascript">Javascript</option>
                    <option value="php">php</option>
                    <option value="python">Python</option>
                    <option value="csharp">Csharp</option>
                    <option value="C">C</option>
                    <option value="C++">C++</option>
                    <option value="sql">SQL</option>
                    <option value="shell">Shell</option>
                </select>
            </div>
            <div class="check-select">
                <input type="checkbox" name="" id="agree">
                <label for="agree">J'accepte les termes des conditions pour l'inscription</label>
            </div>
            <button class="send-btn">Envoyer</button>
        </form>
    </div>
</template>

<script>
export default {
    
}
</script>