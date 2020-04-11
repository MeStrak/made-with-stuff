// To find an emoji of your liking, check out the official Emoji list:
https://unicode.org/emoji/charts/emoji-list.html // Replace spaces with hyphens
to get the class name! // (e.g. "man in suit levitating" becomes
twa-man-in-suit-levitating 🕴)

<template>
  <span>
    {{ beforetext }}
    <el v-for="index in maxemojis" :key="index">
      <em
        class="twa twa-2x"
        :class="emojiOptions[Math.floor(Math.random() * emojiOptions.length)]"
      ></em>
      <el v-if="index <= maxemojis - 1">+</el>
    </el>
    {{ aftertext }}
  </span>
</template>

<script lang="ts">
import Vue from "vue";

export default class MadeWithStuff extends Vue{
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
        "twa-handshake",
      ],
    };
  },
  props: {
    beforetext: {
      type: String,
      default: "Made with",
    },
    aftertext: {
      type: String,
      default: "by me",
    },
    maxemojis: {
      type: Number,
      default: 1,
    },
  },

  methods: {
    onClick(event: any) {
      this.$emit("click", event);
    },

    onDoubleClick(event: any) {
      this.$emit("dblclick", event);
    },
  },
};
</script>

<style>
@import "./assets/twemoji-amazing.css";
</style>
