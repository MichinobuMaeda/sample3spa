<template>
  <v-row justify="center">
    <v-col sm="10" md="8" lg="6" xl="5">
      <PageTitle title="商品一覧" icon="list" />
      <div class="text-right">
        <ButtonPrimary
          icon="add"
          label="新規登録"
          @action="() => $router.push({ name: 'item', params: { id: 'new' }})"
        />
      </div>
      <div v-if="state.items.length">
        <v-simple-table separator="cell">
          <thead class="bg-secondary text-white">
            <tr>
              <th><span class="text-body1">ID</span></th>
              <th><span class="text-body1">商品名</span></th>
              <th><span class="text-body1">色</span></th>
              <th class="text-right"><span class="text-body1">サイズ(cm)</span></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in state.items" v-bind:key="item.id">
              <td class="text-right">{{ item.id }}</td>
              <td>{{ item.name }}</td>
              <td class="text-center">{{ item.color }}</td>
              <td class="text-right">{{ item.length }}</td>
              <td>
                <ButtonPrimary
                  icon="edit"
                  @action="() => $router.push({ name: 'item', params: { id: item.id }})"
                />
                <ButtonNegative
                  icon="delete"
                  @action="() => setActiveItem(state, item.id, () => { state.confirmDeleteItem = true })"
                />
              </td>
            </tr>
          </tbody>
        </v-simple-table>
      </div>
      <div v-else>
        表示するデータがありません。
      </div>

      <v-dialog v-model="state.confirmDeleteItem">
        <v-card>
          <v-card-title class="headline">警告</v-card-title>
          <v-card-text>
            ID: {{ state.activeItem.id }} {{ state.activeItem.name }} を本当に削除しますか？
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <ButtonSecondary
              label="中止"
              @action="() => { state.confirmDeleteItem = true }"
            />
            <ButtonNegative
              label="削除"
              @action="() => deleteItem(state)"
            />
          </v-card-actions>
        </v-card>
      </v-dialog>

    </v-col>
  </v-row>
</template>

<script>
import store from '../plugins/composition-api'
import PageTitle from '../components/PageTitle'
import ButtonPrimary from '../components/ButtonPrimary'
import ButtonSecondary from '../components/ButtonSecondary'
import ButtonNegative from '../components/ButtonNegative'

export default {
  name: 'PageIndex',
  components: {
    PageTitle,
    ButtonPrimary,
    ButtonSecondary,
    ButtonNegative
  },
  setup () {
    // 保持データのストアを使用する。
    const rootStore = store.useStore()
    return rootStore
  }
}
</script>
