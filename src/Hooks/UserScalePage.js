import { onMounted, onUnmounted } from 'vue';
import _ from 'lodash';
export default function UserScalePage(opstion) {
  const resizeFunc = _.throttle(function () {
    // 当页面发生改变的时候我们需要重新调用该函数重新计算当前需要的scale
    triggerScale(); // 动画缩放网页
  }, 100);
  function triggerScale() {
    // 1.设计稿的尺寸
    let targetX = opstion.targetX || 1920;
    let targetY = opstion.targetY || 1080;
    // 1.设计稿的比例
    let targetRatio = opstion.targetRatio || 16 / 9;

    // 第一步获取到当前设备的浏览器宽度
    // 如果window没有我们就去拿body的
    let currentX =
      document.documentElement.clientWidth || document.body.clientWidth;
    let currentY =
      document.documentElement.clientHeight || document.body.clientHeight;

    // 计算当前需要的缩放值
    let scaleRatioc = currentX / targetX; //默认情况下我们需要缩放的比率
    let currentRatio = currentX / currentY; //宽高的比率
    // 如果我们当前的比值大于我们的设计稿比值说明我们当前的屏幕比较的宽或者比较的高
    if (currentRatio > targetRatio) {
      scaleRatioc = currentY / targetY; //根据情况不同我们进行选择按照宽度或者高度进行适配
      document.body.style = `width:${targetX}px; height:${targetY}px;transform: scale(${scaleRatioc}) translateX(-50%); left: 50%`;
    } else {
      // 如果比值一样我们就直接缩放
      document.body.style = `width:${targetX}px; height:${targetY}px; transform: scale(${scaleRatioc})`;
    }
  }
  onMounted(() => {
    // 添加
    triggerScale();
    window.addEventListener('resize', resizeFunc);
  });
  onUnmounted(() => {
    // 释放
    window.removeEventListener('resize', resizeFunc);
  });
}
