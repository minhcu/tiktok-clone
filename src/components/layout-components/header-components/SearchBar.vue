<template>
  <div @click.stop>
    <div class="relative">
      <div
        class="relative flex items-center bg-[rgba(22,24,35,0.06)] rounded-[96px] overflow-hidden"
      >
        <!-- Input -->
        <div class="relative peer pl-4 py-[11px] flex items-center">
          <!-- Input -->
          <input
            class="block bg-transparent outline-none w-[292px] leading-[22px] caret-[rgba(254,44,85,1.0)]"
            type="text"
            placeholder="Tìm kiếm tài khoản và video"
            ref="searchBar"
            spellcheck="false"
            v-model="searchInput"
          />
          <!-- Icon search -->
          <button
            v-show="!!searchInput && !pending"
            @click="handleClearInput"
            class="flex justify-center items-center"
          >
            <font-awesome-icon
              class="absolute right-0 mx-3 text-[14px] text-[rgba(22,24,35,0.34)]"
              icon="fa-circle-xmark"
            />
          </button>
          <font-awesome-icon
            v-show="pending"
            class="absolute right-0 mx-3 text-[14px] text-[rgba(22,24,35,0.34)] animate-spin"
            icon="fa-spinner"
          />
        </div>

        <!-- Border -->
        <div
          class="hidden peer-focus-within:block absolute top-0 right-0 left-0 bottom-0 rounded-[92px] border-[1.5px] border-solid border-[rgba(22,24,35,0.2)] z-[-1]"
        ></div>

        <!-- Seperator -->
        <span class="h-[28px] w-[1px] bg-[rgba(22,24,35,0.12)]"></span>

        <!-- Search button -->
        <button
          class="bg-none hover:bg-[rgba(22,24,35,0.03)] pl-3 py-[11px] pr-4"
          :class="[
            isTyping
              ? 'text-[rgba(22,24,35,0.75)]'
              : 'text-[rgba(22,24,35,0.34)]',
          ]"
        >
          <font-awesome-icon icon="fa-search" />
        </button>
      </div>
      <Popper
        :query="searchInput"
        v-if="!!searchResult.length && !!searchInput"
        :searchData="this.searchResult"
      />
    </div>
  </div>
</template>

<script>
import Popper from "../popups/Popper.vue";
import axios from "axios";
export default {
  name: "SearchBar",
  components: {
    Popper,
  },
  data() {
    return {
      searchInput: "",
      searchResult: [],
      pending: false,
      error: false,
      debounce: null,
    };
  },
  computed: {
    isTyping() {
      return !(this.searchInput === "");
    },
  },
  methods: {
    handleClearInput() {
      this.searchInput = "";
      this.$refs.searchBar.focus();
    },
    getSearchResult() {
      // Reset RESULT
      this.searchResult = [];

      // Stop if there are nothing to search
      if (this.searchInput === "") return;

      //  Waiting for search result
      this.pending = true;
      axios
        .get(
          `https://tiktok.fullstack.edu.vn/api/users/search?q=${this.searchInput}&type=less`
        )
        .then((res) => {
          this.searchResult = res.data.data;
          console.log(this.searchResult);
          this.pending = false;
        })
        .catch((e) => console.log(e));
    },
  },
  watch: {
    searchInput: function () {
      clearTimeout(this.debounce);
      this.debounce = setTimeout(this.getSearchResult, 500);
    },
  },
};
</script>

<style></style>
