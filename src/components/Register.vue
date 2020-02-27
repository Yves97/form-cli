<template>
    <div class="main-card">
        <h3>{{message}}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eum mollitia inventore, a minus neque sequi quasi ullam iste facere maxime explicabo eligendi assumenda, molestias debitis consequatur tempora repellat commodi.</p>
        <form>
            <div class="input-group">
                <input type="text" placeholder="Votre nom" class="input-name" v-model="post.firstname" @keyup="checkname">
                <small>Doit contenir plus de 2 caractères</small>
            </div>
            <div class="input-group">
                <input type="text" placeholder="Votre Prenom" class="input-prenom" v-model="post.lastname" @keyup="checkusername">
                <small>Doit contenir plus de 2 caractères</small>
            </div>
            <div class="input-group">
                <input type="email" placeholder="Votre Email" class="input-email" v-model="post.email" @keyup="checkemail">
                <small>Doit contenir plus de 6 caractères</small>
            </div>
            <div class="input-group">
                <input type="password" placeholder="Votre Mot de Passe" class="input-password" v-model="post.password" @keyup="checkpassword">
                <small>Doit contenir plus de 6 caractères</small>
            </div>
            <div class="input-group">
                <input type="password" placeholder="Retapez votre mot de passe ici" id="password2" v-model="password2" @keyup="verifyPass">
                <small>Mots de passe différents</small>
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
                agree: false,
                re: new RegExp("[a-zA-Z0-9]"),
            },
            formData:{
                sexe: ['masculin','feminin'],
                language: ['javascript','php','python','csharp','C','C++','sql','shell']
            }
        }
    },
    methods:{
        checkname(){
            let input = document.querySelector('.input-nom')
            let test = this.name.match(this.re)
            // console.log(test)
            if(this.name.length == 0 || test == null){
                input.style.borderBottom = this.defaultStyle
                input.style.transition = '.5s'
                input.nextElementSibling.innerHTML = ''
            }
            else if(this.name.length <= 5 && test != null){
                input.style.borderBottom = this.styleError
                input.nextElementSibling.innerHTML = 'doit contenir plus de 5 chiffres ou/et lettres'
            }
            else{
                input.style.borderBottom = this.styleSuccess
                input.nextElementSibling.innerHTML = ''
            }
        },
    },
    filters:{
        capitalize(value){
            return value.charAt(0).toString().toUpperCase() + value.slice(1)
        }
    }
}
</script>