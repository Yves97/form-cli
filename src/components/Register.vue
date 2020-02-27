<template>
    <div class="main-card">
        <h3>{{message}}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eum mollitia inventore, a minus neque sequi quasi ullam iste facere maxime explicabo eligendi assumenda, molestias debitis consequatur tempora repellat commodi.</p>
        <form>
            <div class="input-group">
                <input type="text" placeholder="Votre nom" class="input-name" v-model="post.firstname">
            </div>
            <div class="input-group">
                <input type="text" placeholder="Votre Prenom" class="input-prenom" v-model="post.lastname">
            </div>
            <div class="input-group">
                <input type="email" placeholder="Votre Email" class="input-email" v-model="post.email">
            </div>
            <div class="input-group">
                <input type="password" placeholder="Votre Mot de Passe" class="input-password" v-model="post.password">
            </div>
            <div>
                <div class="radio-select" v-for="sexe in formData.sexe" :key="sexe">
                    <input type="radio" :id="sexe" name="sexe" v-model="post.sexe" :value="sexe">
                    <label :for="sexe">{{sexe | capitalize}}</label>
                </div>
            </div>
            <div class="input-group">
                <p>Votre langage au choix :</p>
                <select placeholder="langage" v-model="post.language">
                    <option v-for="language in formData.language" :key="language" :value="language">{{language | upper }}</option>
                </select>
            </div>
            <div class="check-select">
                <input type="checkbox" name="" id="agree" v-model="post.agree">
                <label for="agree">J'accepte les termes des conditions pour l'inscription</label>
            </div>
            <button class="send-btn">Envoyer</button>
        </form>
    </div>
</template>

<script>
export default {
    data(){
        return {
            message : 'Register',
            post : {
                firstname : '',
                lastname: '',
                email: '',
                password: '',
                language: '',
                sexe: [],
                agree: false
            },
            formData:{
                sexe: ['masculin','feminin'],
                language: ['javascript','php','python','csharp','C','C++','sql','shell']
            }
        }
    },
    filters:{
        capitalize(value){
            return value.charAt(0).toString().toUpperCase() + value.slice(1)
        }
    }
}
</script>