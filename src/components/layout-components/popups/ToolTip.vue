<template>
  <div
    class="absolute top-[40px] left-1/2 -translate-x-1/2 hidden group-hover:block"
  >
    <div class="absolute top-[-13px] left-1/2 -translate-x-1/2">
      <font-awesome-icon
        class="font-bold text-[#545454EB] text-center"
        icon="fa-caret-up"
      />
    </div>
    <div
      class="bg-[#545454EB] text-white rounded-[8px] p-2 overflow-hidden whitespace-nowrap"
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "ToolTip",
};
</script>

<style></style>
