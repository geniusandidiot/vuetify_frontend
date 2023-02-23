<template>
  <v-container class="pa-md-4 pa-sm-3 pa-2" fluid>
    <v-row justify="center" no-gutters>
      <v-col>
        <v-card
            class="justify-center"
            max-width="500"
            rounded="0"
        >
          <v-img
              height="100%"
              cover
              src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
          >
            <v-avatar
                color="grey"
                size="150"
                rounded="1"
            >
              <v-img cover src="https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_960_720.jpg"></v-img>
            </v-avatar>
          </v-img>
          <v-list two-line>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="indigo">mdi-account</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>user01</v-list-item-title>
                <v-list-item-subtitle>用户名</v-list-item-subtitle>
              </v-list-item-content>

            </v-list-item>

            <v-divider inset></v-divider>

            <v-list-item>
              <v-list-item-icon>
                <v-icon color="indigo">mdi-gender-male-female</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>男</v-list-item-title>
                <v-list-item-subtitle>性别</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-divider inset></v-divider>

            <v-list-item>
              <v-list-item-icon>
                <v-icon color="indigo">mdi-email</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>aliconnors@example.com</v-list-item-title>
                <v-list-item-subtitle>邮箱</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
//import prism from 'prismjs'
//import childMotion from '../../components/bulb/childMotion'

export default {
  name: 'Motion',
  components: {},
  data() {
    return {
      tab: null,
      toggle: true,   // 转场状态
      index: 0,
    }
  },
  mounted() {

  },
  methods: {
    motionEnter(index) {
      setTimeout(() => {
        this.toggle = false
      }, 30);
      this.index = index
    }
  }
}
</script>

<style lang="scss">
#cutto {
  .v-card {
    transition: margin 200ms;
    margin-top: -77px;
  }

  &.close-mt .v-card {
    margin-top: 0;
  }
}
</style>