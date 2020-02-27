<template>
    <div class="main-card">
        <h3>{{message}}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eum mollitia inventore, a minus neque sequi quasi ullam iste facere maxime explicabo eligendi assumenda, molestias debitis consequatur tempora repellat commodi.</p>
        <form>
            <div class="input-group">
                <input type="text" placeholder="Votre nom" class="input-name" v-model="post.firstname" @keyup="checkname">
                <small></small>
            </div>
            <div class="input-group">
                <input type="text" placeholder="Votre Prenom" class="input-lastname" v-model="post.lastname" @keyup="checkusername">
                <small></small>
            </div>
            <div class="input-group">
                <input type="email" placeholder="Votre Email" class="input-email" v-model="post.email" @keyup="checkemail">
                <small></small>
            </div>
            <div class="input-group">
                <input type="password" placeholder="Votre Mot de Passe" class="input-password" v-model="post.password" @keyup="checkpassword">
                <small></small>
            </div>
            <div class="input-group">
                <input type="password" placeholder="Retapez votre mot de passe ici" class="input-password2" v-model="post.password2" @keyup="verifyPass">
                <small></small>
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
                password2 : '',
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
            let input = document.querySelector('.input-name')
            let test = this.post.firstname.match(this.re)
            if(this.post.firstname.length == 0 || test == null){
                input.nextElementSibling.innerHTML = ''
            }
            else if(this.post.firstname.length <= 2 && test != null){
                input.nextElementSibling.innerHTML = 'doit contenir plus de 5 chiffres ou/et lettres'
            }
            else{
                input.nextElementSibling.innerHTML = ''
            }
        },
        checkusername(){
            let input = document.querySelector('.input-lastname')
            let test = this.post.lastname.match(this.re)
            if(this.post.lastname.length == 0 || test == null){
                input.nextElementSibling.innerHTML = ''
            }
            else if(this.post.lastname.length <= 2 && test != null){
                input.nextElementSibling.innerHTML = 'doit contenir plus de 2 chiffres ou/et lettres'
            }
            else{
                input.nextElementSibling.innerHTML = ''
            }
        },
        checkemail(){
            let input = document.querySelector('.input-email')
            let test = this.post.email.match(this.re)
            if(this.post.email.length == 0 || test == null){
                input.nextElementSibling.innerHTML = ''
            }
            else if(this.post.email.length <= 2 && test != null){
                input.nextElementSibling.innerHTML = 'doit contenir plus de 2 chiffres ou/et lettres'
            }
            else{
                input.nextElementSibling.innerHTML = ''
            }
        },
        checkpassword(){
            let input = document.querySelector('.input-password')
            let test = this.post.password.match(this.re)
            if(this.post.password.length == 0 || test == null){
                input.nextElementSibling.innerHTML = ''
            }
            else if(this.post.password.length <= 6 && test != null){
                input.nextElementSibling.innerHTML = 'doit contenir plus de 6 chiffres ou/et lettres'
            }
            else{
                input.nextElementSibling.innerHTML = ''
            }
        },
        verifyPass(){
            let password2 = document.querySelector('.input-password2')
            if(this.post.password != this.post.password2){
                password2.nextElementSibling.innerHTML = 'Mots de passe differents'
            }
            else{
                password2.nextElementSibling.innerHTML = ''
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