<template>
  <v-row justify="center">
    <v-col sm="10" md="8" lg="6" xl="5">
      <div v-if="!state.activeItem.id">
        <PageTitle title="該当する商品がありません。" icon="close" />
        <div>
          <ButtonSecondary
            icon="close"
            label="戻る"
            @action="() => $router.push({ name: 'top' })"
            :disabled="state.waitUpdate"
          />
        </div>
      </div>
      <div v-else>
        <PageTitle title="商品の新規登録" icon="add" v-if="state.activeItem.id === 'new'" />
        <PageTitle :title="'商品ID: ' + state.activeItem.id" icon="edit" v-else />
        <v-form v-model="state.isItemValid">
          <v-row>
            <v-col cols="12" class="pa-4">
                <v-text-field
                  label="商品名"
                  v-model="state.activeItem.name"
                  :rules="validateItemName"
                />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6" class="pa-4">
              <v-select
                label="色"
                :items="state.itemColors"
                v-model="state.activeItem.color"
                :rules="validateItemColor"
              />
            </v-col>
            <v-col cols="6" class="pa-4">
              <v-text-field
                label="サイズ"
                type="number"
                v-model="state.activeItem.length"
                :rules="validateItemLength"
                suffix="cm"
              />
            </v-col>
          </v-row>
          <div class="text-right">
            <ButtonSecondary
              icon="close"
              label="取り消し"
              @action="() => $router.push({ name: 'top' }).catch(() => {})"
              :disabled="state.waitUpdate"
            />
            <ButtonPrimary
              icon="save_alt"
              label="保存"
              @action="() => saveItem(state, () => { $router.push({ name: 'top' }) })"
              :disabled="state.waitUpdate || !state.isItemValid"
            />
          </div>
        </v-form>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import store from '../plugins/composition-api'
import PageTitle from '../components/PageTitle'
import ButtonPrimary from '../components/ButtonPrimary'
import ButtonSecondary from '../components/ButtonSecondary'

export default {
  name: 'PageItem',
  components: {
    PageTitle,
    ButtonPrimary,
    ButtonSecondary
  },
  setup () {
    // 保持データのストアを使用する。
    const rootStore = store.useStore()
    return rootStore
  }
}
</script>
