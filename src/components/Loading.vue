<template>
  <div class="LoadingWrapper">
    <h1>
      <span>玩</span>
      <span>命</span>
      <span>加</span>
      <span>载</span>
      <span>中</span>
      <span>.</span>
      <span>.</span>
      <span>.</span>
    </h1>

    <div class="google-loader">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>
<script setup></script>
<style scoped lang="scss">
$font: 'Montserrat', sans-serif;
$blue: #4285f4;
$red: #db4437;
$yellow: #f4b400;
$green: #0f9d58;
$colors-list: $blue $red $yellow $green;
.LoadingWrapper {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.google-loader {
  margin-top: 30px;
  display: block;
  span {
    display: inline-block;
    margin-top: 10px;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    &:not(:first-child) {
      margin-left: 10px;
    }
  }
  @each $current-color in $colors-list {
    $i: index($colors-list, $current-color);
    $t: $i * -0.25;
    span:nth-child(#{$i}) {
      background: $current-color;
      animation: move 1s ease-in-out (#{$t}s) infinite alternate;
    }
  }
}

@keyframes move {
  from {
    transform: translateY(-10px);
  }
  to {
    transform: translateY(5px);
  }
}

h1 {
  font-family: $font;
  font-size: 4em;
  text-align: center;
  letter-spacing: -8px;
  margin-top: 0;
  span {
    margin-left: 20px;
  }
  span {
    &:first-child {
      color: $blue;
    }
    &:nth-child(2) {
      color: $red;
    }
    &:nth-child(3) {
      color: $yellow;
    }
    &:nth-child(4) {
      color: $blue;
    }
    &:nth-child(5) {
      color: $green;
    }
    &:nth-child(6) {
      color: #bfa;
    }
    &:nth-child(7) {
      color: rgb(85, 204, 255);
    }

    &:last-child {
      color: $red;
      transform: rotate(-20deg);
      display: inline-block;
    }
  }
}
</style>
