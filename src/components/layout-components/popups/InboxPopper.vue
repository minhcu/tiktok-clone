<template>
  <div
    class="absolute top-[140%] right-[-13px] w-[376px] flex flex-col rounded-[8px] bg-white shadow-[0px_2px_12px_rgba(0,0,0,0.12)] cursor-default"
    @click.stop
  >
    <font-awesome-icon
      class="absolute top-[-10px] right-[17px] font-bold w-5 h-5 text-white"
      icon="fa-caret-up"
    />
    <div class="pt-6 pl-4">
      <h4 class="font text-[24px] leading-7 font-semibold">Thông báo</h4>
      <div class="mt-4 flex flex-wrap text-sm">
        <span
          class="mr-2 mb-3 px-2 py-[2px] rounded-[12px] text-center cursor-pointer whitespace-nowrap transition-all duration-300 ease-linear delay-[0s]"
          :class="[
            activeLabel === label
              ? 'bg-[rgb(22,24,35)] text-white'
              : 'bg-[rgb(241,241,241)] hover:bg-[rgba(0,0,0,0.12)]',
          ]"
          v-for="label in labels"
          :key="label"
          @click="activeLabel = label"
        >
          {{ label }}
        </span>
      </div>
    </div>
    <div class="flex-1">
      <div class="px-8 pt-[88px] flex flex-col text-center">
        <div>
          <font-awesome-icon
            class="font-bold w-[70px] h-[70px]"
            icon="fa-regular fa-message"
          />
        </div>
        <div class="mt-5">Tất cả hoạt động</div>
        <div class="mt-3 text-sm text-[rgba(22,24,35,0.75)]">
          Các thông báo về tài khoản của bạn sẽ xuất hiện tại đây.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InboxPopper",
  data() {
    return {
      labels: [
        "Tất cả hoạt động",
        "Thích",
        "Bình luận",
        "Lượt nhắc đến và lượt gắn thẻ",
        "Follower",
      ],
      activeLabel: "Tất cả hoạt động",
    };
  },
};
</script>

<style></style>
