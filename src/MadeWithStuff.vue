<template>
  <div @click="shuffleEmojis()">
    {{ beforetext }}
    <span v-for="index in maxemojis" :key="index">
      <em :class="'twa twa-' + emojisize + 'x ' + displayedEmojis[index-1]"></em>
      <span v-if="index <= maxemojis - 1">+</span>
    </span>
    {{ aftertext }}
  </div>
</template>

<script lang="js">

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
      ],
      displayedEmojis:[]
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
    },
    emojisize: {
      type: Number,
      default: 1
    },
  },
  mounted() {
    this.shuffleEmojis();
  },

  methods: {
    shuffleEmojis(){
      this.displayedEmojis = Array.from({length: this.maxemojis}, () => this.emojiOptions[Math.floor(Math.random() * this.emojiOptions.length)]);
    },
  }
};
</script>

<style>
@import "./assets/twemoji-amazing.css";
</style>
