<template>
  <div class="SongMapDetaileWrapper">
    <h1>歌单详情页面</h1>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
import { useSongMapStore } from '@/stores/SongMapStore';
import { storeToRefs } from 'pinia';
const SongMapStore = useSongMapStore();
const {} = storeToRefs(SongMapStore);
const router = useRouter();
const SongMapID = ref();
onMounted(() => {
  const id = router.currentRoute.value.params.id;
  const Id = Number(id);
  SongMapID.value = id;
  SongMapStore.FetchGetPayListToTopPlayListsId(Id);
});
</script>
<style scoped lang="less"></style>
