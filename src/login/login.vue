<template>
    <v-app>
        <v-app-bar color="accent" elevation="0" app dark>
            <v-toolbar-title>
                <v-avatar tile>
                    <v-icon size="40" style="transform: rotate(180deg)">mdi-android-auto</v-icon>
                </v-avatar> JobHelp
            </v-toolbar-title>
        </v-app-bar>
        <v-content class="accent">
            <v-container fill-height fluid>
                <v-layout align-center justify-center>
                    <v-form>
                        <v-card
                            max-width="100%"
                            color="transparent"
                            width="320"
                            align-self-center
                            flat
                            dark
                        >
                            <v-text-field
                                label="账号"
                                v-model="account"
                                :error-messages="accountErrors"
                                filled
                            ></v-text-field>
                            <v-text-field
                                :type="showPW?'text':'password'"
                                label="密码"
                                v-model="password"
                                :append-icon="showPW?'mdi-eye':'mdi-eye-off'"
                                :error-messages="passwordErrors"
                                filled
                                @click:append="showPW=!showPW"
                            ></v-text-field>
                            <v-card-actions class="px-0">
                                <v-btn
                                    color="secondary"
                                    depressed
                                    block
                                    large
                                    :loading="loading"
                                    @click="submit"
                                >登录</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-form>
                </v-layout>
            </v-container>
        </v-content>
        <v-snackbar
            :color="snackbar.color"
            v-model="snackbar.show"
            class="mt-12"
            absolute
            top
        >
            {{ snackbar.text }}
            <v-btn text @click="snackbar.show=false">关闭</v-btn>
		</v-snackbar>
    </v-app>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength } from 'vuelidate/lib/validators'

export default {
    name: 'Login',
    data() {
        return {
            account: '',    // 账号
            password: '',   // 密码
            showPW: false,  // 是否显示密码
            loading: false,  // 登录中
            snackbar: {
                show: false,
                color: 'grey darken-4',
                text: ''
            }
        }
    },
    mixins: [validationMixin],
    validations: {
        account: { required, maxLength: maxLength(30) },
        password: { required }
    },
    computed: {
        accountErrors() {
            const err = [];
            if (!this.$v.account.$dirty) return err;
            !this.$v.account.required && err.push('请填写账号')
            !this.$v.account.maxLength && err.push('账号长度不能大于30')
            return err
        },
        passwordErrors() {
            const err = [];
            if(!this.$v.password.$dirty) return err;
            !this.$v.password.required && err.push('密码不能为空')
            return err
        }
    },
    methods: {
        submit() {
            this.$v.$touch()
            if(!this.$v.$invalid) {
               this.loading = true
              // this.$axios.post("/xxx/login", {user: this.account, pwd: this.password})
              //     .then(data => {
              //       if (data.data.status != 200) {
              //         this.loading = false
              //         //iViewUi的友好提示
              //         this.$Message.error(data.data.message);
              //       }else{
              //         setTimeout(() => {
              //           this.loading = false
              //           this.$router.push('/plugin/prism')
              //         }, 1500);
              //       }
              //     });

            }
        }
    }
}
</script>