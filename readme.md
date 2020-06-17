<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- [![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]-->




  <h3 align="center">Made With Stuff</h3>

Made with stuff is a fun component to add a **made with ❤ by me** with a randomly selected emoji to your website. Build with Vue.js, works with React using Vuera.

Some examples:

    Made with 👍 by Strak.
    Made with 💚 by me.
    Made with 🍕 + ☕ by our awesome team.
    Built by Little One, fuelled by ☕.


### Built With

* [Vue.js](https://vuejs.org)
* [Twemoji-amazimg](https://github.com/SebastianAigner/twemoji-amazing)


<!-- USAGE EXAMPLES -->
## Usage
Install the component in your project.


```sh
yarn add @strak/made-with-stuff
```
or
```sh
npm install @strak/made-with-stuff
```

Then add it to the pages or components where you want to display it. Font style, etc. will be inherited from your existing css.

Set *beforetext* and *aftertext* props to configure the text. If they are not configured the component will display **Made with ❤ by me** (with random emoji).

Set *:maxemojis* to display more than one emoji, like this: **Made with ❤ + 👍 by me**.

Set *:maxemojis* to an integer from 1-5 to adjust the size of the emojis (1 is smallest).

```html
<template>
  <span>
    <MadeWithStuff beforetext="Made with" aftertext="by us!" :maxemojis="3" :emojisize="1"></MadeWithStuffVue>
  </span>
</template>

<script lang="ts">
import MadeWithStuff from "@strak/made-with-stuff";
export default {
  components: {
    MadeWithStuff
  }
};
</script>
```

<!-- ROADMAP -->
## Roadmap
- Configurable emoji list
- Random number of emojis
- Badge style display
- Fruit machine type shuffle when selecting emojis
- Possibly some different icon/font choices

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

<!-- Your Name - [@twitter_handle](https://twitter.com/twitter_handle) - email -->

Project Link: [https://github.com/mestrak/made-with-stuff](https://github.com/mestrak/made-with-stuff)


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/mestrak/made-with-stuff.svg?style=flat-square
[contributors-url]: https://github.com/mestrak/made-with-stuff/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/mestrak/made-with-stuff.svg?style=flat-square
[forks-url]: https://github.com/mestrak/made-with-stuff/network/members
[stars-shield]: https://img.shields.io/github/stars/mestrak/made-with-stuff.svg?style=flat-square
[stars-url]: https://github.com/mestrak/made-with-stuff/stargazers
[issues-shield]: https://img.shields.io/github/issues/mestrak/made-with-stuff.svg?style=flat-square
[issues-url]: https://github.com/mestrak/made-with-stuff/issues
[license-shield]: https://img.shields.io/github/license/mestrak/made-with-stuff.svg?style=flat-square
[license-url]: https://github.com/mestrak/made-with-stuff/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/james-strachan-1017361/
