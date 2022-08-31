<template>
  <button
    class="flex items-center justify-center min-h-[36px] py-[6px] px-[8px] border-none rounded-[4px] font-semibold"
    :class="btnType"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "ButtonVue",
  props: {
    type: String,
  },
  computed: {
    btnType() {
      switch (this.type) {
        case "primary":
          return "bg-primary text-white";
        default:
          return "";
      }
    },
  },
};
</script>

<style></style>
