// To find an emoji of your liking, check out the official Emoji list:
https://unicode.org/emoji/charts/emoji-list.html // Replace spaces with hyphens
to get the class name! // (e.g. "man in suit levitating" becomes
twa-man-in-suit-levitating 🕴)

<template>
  <span>
    <MadeWithStuff beforetext="Made with" aftertext="by little one." :maxemojis="1" :emojisize="1"></MadeWithStuff>
  </span>
</template>

<script lang="ts">
import MadeWithStuff from "./MadeWithStuff.vue";
export default {
  components: {
    MadeWithStuff
  }
};
</script>

<style scoped>
* {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
