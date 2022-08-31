<template>
  <div
    class="fixed top-0 left-0 bottom-0 right-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)]"
  >
    <div class="h-4/5 max-h-[693px] rounded-[8px] overflow-hidden">
      <div
        class="relative m-auto flex flex-col w-[483px] h-full pt-12 bg-white"
      >
        <div class="flex-1">
          <div class="w-[375px] m-auto">
            <h2 class="my-4 text-[32px] text-center font-semibold">
              Đăng nhập vào Tiktok
            </h2>
          </div>
        </div>
        <div
          class="flex justify-center items-center h-16 border border-solid border-[rgba(22,24,35,0.12)] text-[15px]"
        >
          <div class="font-light">Bạn không có tài khoản?</div>
          <router-link
            class="ml-[5px] text-primary font-semibold hover:underline"
            to="/signup"
            >Đăng ký</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalVue",
};
</script>

<style></style>
