<template>
  <div
    class="absolute w-full mt-[6px] pt-[6px] rounded-[4px] bg-white shadow-[0px_2px_12px_rgba(0,0,0,0.12)]"
  >
    <div
      class="flex items-center py-[9px] px-4 hover:bg-[rgba(22,24,35,0.03)] cursor-pointer"
    >
      <div>
        <font-awesome-icon class="mr-2" icon="fa-search" />
      </div>
      <div>
        {{ searchQuery }}
      </div>
    </div>
    <div class="h-[30px] pl-3 py-[5px] text-sm text-[rgba(22,24,35,0.5)]">
      Tài khoản
    </div>
    <router-link
      class="flex items-center py-[9px] px-4 hover:bg-[rgba(22,24,35,0.03)] cursor-pointer"
      v-for="data in searchData"
      :key="data.id"
      :to="`/@${data.nickname}`"
    >
      <div>
        <img
          class="w-10 h-10 rounded-full mr-3"
          :src="data.avatar"
          :alt="data.full_name"
        />
      </div>
      <div>
        <h4 class="text-ellipsis whitespace-nowrap">
          {{ data.full_name }}
          <font-awesome-icon
            class="ml-1 text-[#20D5EC]"
            icon="fa-circle-check"
            v-if="data.tick"
          />
        </h4>
        <p
          class="text-sm text-[rgba(22,24,35,0.5)] text-ellipsis whitespace-nowrap"
        >
          {{ data.nickname }}
        </p>
      </div>
    </router-link>
    <div class="flex items-center py-[15px] px-4">
      Xem tất cả kết quả dành cho "{{ searchQuery }}"
    </div>
  </div>
</template>

<script>
export default {
  name: "PopperVue",
  props: {
    query: String,
    searchData: Array,
  },
  computed: {
    searchQuery() {
      return this.query;
    },
  },
};
</script>

<style></style>
