<template>
  <div>
    <header>
      <HeaderVue />
    </header>
    <div class="flex justify-center">
      <div class="w-[1150px] flex">
        <SideBar />
        <div class="flex-1">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderVue from "@/components/layout-components/Header.vue";
import SideBar from "@/components/layout-components/SideBar.vue";
export default {
  name: "DefaultLayout",
  components: {
    HeaderVue,
    SideBar,
  },
};
</script>

<style></style>
