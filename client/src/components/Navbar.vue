<template>
  <md-toolbar
    v-if="isShowNavbar"
    class="md-dense">

    <div
      style="
      height: 30px;
      flex: 1;
      cursor: pointer">
      <img
        style="
          height: 30px;"
        src="../../static/logo.png"
      @click="home()">
    </div>

    <div v-if="isUser">

      <span v-if="user.authenticated">

        <router-link to='/experiments' class="md-button">
          Experiments
        </router-link>

        <md-menu>
          <md-button
            md-menu-trigger>
            {{user.name}}
          </md-button>

          <md-menu-content>
            <md-menu-item
              @click="editUser">
              Edit User
            </md-menu-item>
            <md-menu-item
              @click="logout">
              Logout
            </md-menu-item>
          </md-menu-content>
        </md-menu>

      </span>

      <router-link
        v-else
        to='/login'
        tag='md-button'>
        Login
      </router-link>

    </div>
  </md-toolbar>
</template>

<script>
import auth from '../modules/auth'
import util from '../modules/util'
import config from '../config'

let publicPathTokens = [
  '/mechanical-turk',
  '/participant'
]

export default {
  name: 'navbar',
  data () {
    return {
      user: auth.user,
      title: config.title,
      isUser: config.isUser
    }
  },
  computed: {
    isShowNavbar () {
      if (this.$route.fullPath) {
        if (util.isStringInStringList(this.$route.fullPath, publicPathTokens)) {
          return false
        }
      }
      return true
    }
  },
  methods: {
    editUser () {
      this.$router.push('/edit-user')
    },
    home () {
      this.$router.push('/')
    },
    async logout () {
      await auth.logout()
      this.$router.push('/login')
    }
  }
}
</script>
