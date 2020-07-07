<template>
  <v-row justify="center">
    <v-col sm="10" md="8" lg="6" xl="5">
      <PageTitle title="商品一覧" icon="list" />
      <div class="text-right">
        <ButtonPrimary
          icon="add"
          label="新規登録"
          @action="() => $router.push({ name: 'item', params: { id: 'new' }}).catch(() => {})"
        />
      </div>
      <div v-if="state.items.length">
        <v-data-table
          class="elevation-1 itemlist"
          :footer-props="{ 'items-per-page-text': '表示行数' }"
          :headers="[
            {
              text: 'ID',
              value: 'id',
              align: 'right'
            },
            {
              text: '商品名',
              value: 'name'
            },
            {
              text: '色',
              value: 'color'
            },
            {
              text: 'サイズ(cm)',
              value: 'length',
              align: 'right'
            },
            {
              text: '',
              value: 'edit',
              align: 'right'
            }
          ]"
          :items="state.items"
        >
          <template v-slot:item.edit="{ item }">
            <ButtonPrimary
              icon="edit"
              @action="() => $router.push({ name: 'item', params: { id: item.id }}).catch(() => {})"
            />
          </template>
        </v-data-table>
      </div>
      <div v-else>
        表示するデータがありません。
      </div>
    </v-col>
  </v-row>
</template>

<style>
.itemlist thead {
  background-color: lightblue;
}
</style>

<script>
import store from '../plugins/composition-api'
import PageTitle from '../components/PageTitle'
import ButtonPrimary from '../components/ButtonPrimary'

export default {
  name: 'PageIndex',
  components: {
    PageTitle,
    ButtonPrimary
  },
  setup () {
    // 保持データのストアを使用する。
    const rootStore = store.useStore()
    return rootStore
  }
}
</script>
