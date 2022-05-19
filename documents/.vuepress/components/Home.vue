<template backgroud{}>
  <div>
    <div class="titleContainer">
      <h1>Let's write down 
        <br>what I learned
      </h1>

      <div class="infoContainer">
        <div class="name">Eddie's TIL</div>
        <ul>
          <li>
            <a href="https://0ams.github.io/">Blog</a>
          </li>
          <li>
            <a href="https://github.com/0ams">GitHub</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
@import "https://fonts.googleapis.com/css?family=Gugi";

.infoContainer {
  text-align: right;
}
h1 {
  font-family: "Gugi", cursive;
  font-weight: 500;
  border-bottom: 18px solid #11bb1a;
  word-break: keep-all;
  font-size: 5rem;
}
.name {
  font-weight: 900;
  font-size: 2rem;
}
ul {
  list-style: none;
  line-height: 1.5rem;
}

@media (max-width: 550px) {
  h1 {
    font-size: 4.4rem;
  }

  .name {
    font-size: 1.7rem;
  }
}

@media (max-width: 430px) {
  h1 {
    font-size: 3.4rem;
  }
}
</style>
