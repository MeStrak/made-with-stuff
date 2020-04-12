<template>
  <div>
    {{ beforetext }}
    <span v-for="index in maxemojis" :key="index">
      <em
        class="twa twa-2x"
        :class="emojiOptions[Math.floor(Math.random() * emojiOptions.length)]"
      ></em>
      <span v-if="index <= maxemojis - 1">+</span>
    </span>
    {{ aftertext }}
  </div>
</template>

<script lang="js">
// import Vue from 'vue';

export default {
  name: "MadeWithStuff",
  data() {
    return {
      emojiOptions: [
        "twa-green-heart",
        "twa-red-heart",
        "twa-pizza",
        "twa-hot-beverage",
        "twa-thought-balloon",
        "twa-brain",
        "twa-smiling-face-with-heart-eyes",
        "twa-hammer",
        "twa-thumbs-up",
        "twa-handshake"
      ]
    };
  },
  props: {
    beforetext: {
      type: String,
      default: "Made with"
    },
    aftertext: {
      type: String,
      default: "by me"
    },
    maxemojis: {
      type: Number,
      default: 1
    }
  },

  methods: {
    // onClick(event: MouseEvent | KeyboardEvent) {
    //   this.$emit("click", event);
    // },
    // onDoubleClick(event: MouseEvent | KeyboardEvent) {
    //   this.$emit("dblclick", event);
    // },
  }
};
</script>

<style>
@import "./assets/twemoji-amazing.css";
</style>
