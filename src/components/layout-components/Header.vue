<template>
  <div
    class="h-[60px] flex justify-center shadow-[0px_1px_1px_rgba(0,0,0,0.12)]"
  >
    <div class="w-[1150px] flex items-center justify-between h-full">
      <!-- Logo -->
      <router-link to="/">
        <TiktokLogo />
      </router-link>

      <!-- Search -->
      <SearchBar />

      <!-- Navigate -->
      <div class="flex">
        <div>
          <router-link
            class="flex items-center justify-center h-9 border-solid border border-[rgba(22,24,35,0.12)] rounded-[2px] px-4 font-semibold hover:bg-[rgba(22,24,35,0.03)]"
            to="/upload"
          >
            <font-awesome-icon
              class="text-[14px] font-bold mr-2"
              icon="fa-plus"
            />
            <span class="block">Tải lên</span>
          </router-link>
        </div>

        <!-- If not Auth -->
        <div v-if="!auth">
          <ButtonVue class="ml-4" type="primary"> Đăng nhập </ButtonVue>
        </div>
        <!-- If Auth -->
        <!-- Message -->
        <router-link
          v-if="auth"
          class="relative flex justify-center ml-4 items-center group"
          to="/message"
        >
          <font-awesome-icon
            class="text-[14px] font-bold w-5 h-5 px-1"
            icon="fa-paper-plane"
          />
          <ToolTip>Tin nhắn</ToolTip>
        </router-link>

        <!-- Inbox -->
        <div
          v-if="auth"
          class="relative flex justify-center ml-4 items-center cursor-pointer group"
          @click="isToggled = !isToggled"
        >
          <font-awesome-icon
            v-if="isToggled"
            class="text-[14px] font-bold w-5 h-5 px-1"
            icon="fa-message"
          />
          <font-awesome-icon
            v-else
            class="text-[14px] font-bold w-5 h-5 px-1"
            icon="fa-regular fa-message"
          />
          <ToolTip v-show="!isToggled">Hộp thư</ToolTip>
          <InboxPopper v-if="isToggled" />
        </div>

        <!-- Auth -->
        <div class="flex justify-center items-center">
          <div class="relative cursor-pointer group flex items-center">
            <font-awesome-icon
              v-if="!auth"
              class="text-[14px] font-bold ml-4 w-5 h-5 px-1"
              icon="fa-ellipsis-vertical"
            />
            <img
              v-if="auth"
              class="ml-6 w-8 h-8 rounded-full"
              src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7136930462668161030~c5_720x720.jpeg?x-expires=1662037200&x-signature=QnJSV1cYqyzbJ3S%2FthonA%2BOI8yg%3D"
              alt=""
            />
            <MenuPopper
              class="hidden opacity-0 group-hover:block group-hover:opacity-100 transition-all duration-1000"
            />
          </div>
        </div>
      </div>
    </div>
    <Modal class="hidden" />
  </div>
</template>

<script>
import TiktokLogo from "./icons/logo.vue";
import ButtonVue from "../Button.vue";
import Modal from "./popups/Modal.vue";
import MenuPopper from "./popups/MenuPopper.vue";
import ToolTip from "./popups/ToolTip.vue";
import InboxPopper from "./popups/InboxPopper.vue";
import SearchBar from "./header-components/SearchBar.vue";

export default {
  name: "HeaderVue",
  components: {
    TiktokLogo,
    ButtonVue,
    Modal,
    MenuPopper,
    ToolTip,
    InboxPopper,
    SearchBar,
  },
  data() {
    return {
      auth: true,
      isToggled: false,
    };
  },
};
</script>

<style></style>
