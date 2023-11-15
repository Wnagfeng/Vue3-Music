<template>
  <div class="videoPlay">
    <video
      ref="m3u8_video"
      class="video-js vjs-default-skin vjs-big-play-centered"
      controls
    >
      <source :src="path" />
    </video>
  </div>
</template>

<script lang="ts" setup>
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import videojs, { VideoJsPlayer } from 'video.js';
import 'video.js/dist/video-js.css';
import zh from 'video.js/dist/lang/zh-CN.json';

const props = withDefaults(
  defineProps<{
    path: string;
    autoPlay?: boolean;
  }>(),
  { autoPlay: false },
);

const m3u8_video = ref();
let player: VideoJsPlayer;
let intervalId: number;

const initPlay = async () => {
  videojs.addLanguage('zh-CN', zh);
  await nextTick();
  const options = {
    muted: true,
    controls: true,
    enableTimeUpdates: true,
    autoplay: props.autoPlay && props.path,
    loop: true,
    language: 'zh-CN',
    techOrder: ['html5'],
    playbackRates: [0.25, 0.5, 1, 1.5, 2], // 添加倍数播放选项
  };

  player = videojs(m3u8_video.value, options, () => {
    console.log('播放器已准备就绪');
    if (props.autoPlay && props.path) {
      player.play();
    }

    player.on('play', () => {
      // 播放中，改变播放按钮的样式
      const playButton = player.controlBar.playToggle;
      playButton.removeClass('vjs-icon-play');
      playButton.addClass('vjs-icon-pause');
    });

    player.on('pause', () => {
      // 暂停中，改变播放按钮的样式
      const playButton = player.controlBar.playToggle;
      playButton.removeClass('vjs-icon-pause');
      playButton.addClass('vjs-icon-play');
    });

    player.on('ended', () => {
      // 播放结束，改变播放按钮的样式
      const playButton = player.controlBar.playToggle;
      playButton.removeClass('vjs-icon-pause');
      playButton.addClass('vjs-icon-play');
    });
  });

  player.ready(() => {
    const RemainingTimeDisplay = videojs.getComponent('RemainingTimeDisplay');
    player.controlBar.addChild(
      new RemainingTimeDisplay(player, {
        text: '剩余时间：',
      }),
    );
  });

  player.on('canplay', () => {
    const updateRemainingTime = () => {
      const remainingTime = player.duration() - player.currentTime();
      const remainingTimeText = secondsToTime(remainingTime);

      const remainingTimeDisplay = player.controlBar.remainingTimeDisplay;
      if (
        remainingTimeDisplay &&
        remainingTimeDisplay.length > 0 &&
        remainingTime !== Infinity
      ) {
        remainingTimeDisplay[0].innerHTML = '-' + remainingTimeText;
      }
    };

    intervalId = setInterval(updateRemainingTime, 1000);
  });
};

const secondsToTime = (lengthInSeconds: number) => {
  const minutes = Math.floor(lengthInSeconds / 60);
  const seconds = Math.floor(lengthInSeconds % 60);
  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds.toString();
};

onMounted(() => {
  initPlay();
});

watch(
  () => props.path,
  () => {
    player.pause();
    player.src(props.path);
    player.load();
    if (props.path) {
      player.play();
    }
  },
);

onBeforeUnmount(() => {
  player?.dispose();
});
onBeforeUnmount(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
});
</script>

<style lang="less" scoped>
.videoPlay {
  width: 100%;
  height: 100%;
  #vjs_video_3 {
    width: 100%;
    height: 100%;
  }
}
.vjs-paused .vjs-big-play-button,
.vjs-paused.vjs-has-started .vjs-big-play-button {
  display: block;
}
.video-js .vjs-time-control {
  display: block;
}
.video-js .vjs-remaining-time {
  display: block;
}
.vjs-remaining-time-display {
  margin-right: 10px;
  font-size: 12px;
}
.vjs-paused .vjs-big-play-button,
.vjs-paused.vjs-has-started .vjs-big-play-button {
  display: block;
}
.vjs-playback-rate-display {
  margin-left: 10px;
  font-size: 12px;
}
.remaining-time-1 {
  display: none !important;
}
</style>
