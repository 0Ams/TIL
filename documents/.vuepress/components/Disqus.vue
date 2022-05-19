<template>
  <div id="disqus_thread"></div>
</template>

<script>
  export default {
    mounted() {
      console.log("Hello!");
      try {
        let disqus_config = function() {
          this.page.url = location.origin;
          this.page.identifier = location.pathname;
        };
        (function() {
          let d = document,
            s = d.createElement("script");
          s.src = "disqus에서 가져온 embed.js url 입력";
          s.setAttribute("data-timestamp", +new Date());
          (d.head || d.body).appendChild(s);
        })();
      } catch (e) {
        // some error
      }
    }
  };
</script>