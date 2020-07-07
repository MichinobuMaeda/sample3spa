<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
          @click="$router.push({ name: 'top' }).catch(() => {})"
        />

      </div>

      <v-toolbar-title
        @click="$router.push({ name: 'top' }).catch(() => {})"
      >
        Sample 3 SPA
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn
        @click="$router.push({ name: 'raw' }).catch(() => {})"
        text
      >
        <v-icon>memory</v-icon>
        <span class="mr-2">Raw data</span>
      </v-btn>
    </v-app-bar>

    <v-main class="ma-3">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import store from './plugins/composition-api'
import { onMounted, watchEffect } from '@vue/composition-api'

export default {
  name: 'App',
  setup (props, context) {
    // 保持データのストアを供給する。
    store.provideStore(store)
    // 初期データを取得する。
    onMounted(() => store.listItems(store.state))
    // route 変更時の処理
    watchEffect(() => {
      // 編集対象の商品を設定する。
      store.setActiveItemFromRoute(store.state, context.root.$route)
      // データ更新待機ステータをクリアする。
      store.state.waitUpdate = false
    })
  }
}
</script>
