<template>
  <div
    class="absolute top-[140%] right-[-13px] rounded-[8px] bg-white shadow-[0px_2px_12px_rgba(0,0,0,0.12)]"
  >
    <font-awesome-icon
      class="absolute top-[-10px] right-[17px] font-bold w-5 h-5 text-white"
      icon="fa-caret-up"
    />
    <ul class="py-2 min-w-[223px] font-semibold">
      <!-- Go back form child menu -->
      <li
        v-if="this.isAtChildMenu"
        class="relative flex items-center h-[50px] whitespace-nowrap"
      >
        <font-awesome-icon
          class="text-[14px] font-bold ml-7 w-5 h-5 basis-5 cursor-pointer px-1"
          icon="fa-angle-left"
          @click="handleGoBack"
        />
        <span
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >Ngôn ngữ</span
        >
      </li>

      <!-- Menu -->
      <li
        class="px-4 py-[10px] hover:bg-[rgba(22,24,35,0.03)] cursor-pointer"
        v-for="item in renderData.data"
        :key="item.title"
        :class="{
          'border-t border-solid border-[rgba(22,24,35,0.12)]': item.seperate,
        }"
      >
        <!-- If menu is a LINK -->
        <router-link
          v-if="!!item.to"
          class="flex items-center whitespace-nowrap"
          :to="item.to"
        >
          <font-awesome-icon
            class="text-[14px] font-bold mr-2 w-5 h-5 basis-5 cursor-pointer px-1"
            :icon="item.icon"
          />
          <span>{{ item.title }}</span>
        </router-link>

        <!-- If menu is not a LINK -->
        <div
          v-else
          class="flex items-center whitespace-nowrap"
          @click="handleMenuAction(item.children)"
        >
          <font-awesome-icon
            v-if="item.icon"
            class="text-[14px] font-bold mr-2 w-5 h-5 basis-5 cursor-pointer px-1"
            :icon="item.icon"
          />
          <span>{{ item.title }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MenuPopper",
  data() {
    return {
      logOutItem: {
        title: "Đăng xuất",
        icon: "fa-arrow-right-from-bracket",
        to: "/logout",
        seperate: true,
      },
      userMenu: [
        {
          title: "Xem hồ sơ",
          icon: "fa-regular fa-user",
          to: "/@minhdong",
        },
        {
          title: "Nhận xu",
          icon: "fa-coins",
          to: "/coin",
        },
        {
          title: "Cài đặt",
          icon: "fa-gear",
          to: "/setting",
        },
      ],
      menu: {
        title: "Menu",
        data: [
          {
            title: "Tiếng Việt",
            icon: "fa-globe",
            children: {
              title: "language",
              data: [
                {
                  code: "en",
                  title: "English",
                  children: {
                    title: "language",
                    data: [
                      {
                        code: "en",
                        title: "English 2",
                      },
                      {
                        code: "vi",
                        title: "Tiếng Việt 2",
                      },
                    ],
                  },
                },
                {
                  code: "vi",
                  title: "Tiếng Việt",
                },
              ],
            },
          },
          {
            title: "Phản hồi và trợ giúp",
            icon: "fa-regular fa-circle-question",
            to: "/feedback",
          },
          {
            title: "Phím tắt trên bàn phím",
            icon: "fa-regular fa-keyboard",
          },
        ],
      },
      history: [],
      auth: true,
    };
  },
  methods: {
    handleMenuAction(data) {
      const isParent = !!data;
      if (isParent) return this.history.push(data);
      return;
    },
    handleGoBack() {
      this.history.splice(this.history.length - 1, 1);
      return;
    },
  },
  computed: {
    isAtChildMenu() {
      return this.history.length > 1;
    },
    renderData() {
      return this.history[this.history.length - 1];
    },
  },
  created() {
    if (this.auth) {
      this.menu.data = [...this.userMenu, ...this.menu.data, this.logOutItem];
    }
    this.history.push(this.menu);
  },
};
</script>

<style></style>
