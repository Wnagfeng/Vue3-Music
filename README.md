# 关于跨域问题 

V3版本后可以在请求中携带cookie 注意看文档

# 动态添加类名--MvComment.vue

```ts
const ReplayBoxRef = ref<HTMLDivElement>();
const HandelIconCLick = (event: any) => {
  /* 
  closest()
  方法获取最接近被点击的CommentIcon元素的CommentItem元素，并将其存储在
  commentItem
   */
  const commentItem = event.target.closest('.CommentItem');
  const replayBox = commentItem.querySelector('.ReplayBox');
  /* 
  querySelector()
  方法在CommentItem元素中查找ReplayBox元素，并将其存储在
  replayBox
   */
  const ClassS = replayBox.classList;
  if (ClassS) {
    ClassS.toggle('Show');
  }
};
//toggle() 是Element.classList中的一个方法，可以在元素的class属性中切换指定的类名，如果该类名已经存在则移除，否则添加
```



# 总结

### 版心错误

* 网页版心的宽度是一个需要根据具体情况来确定的问题，需要考虑到用户设备的分辨率和显示器的大小等因素。经过一些研究和实践，一些网页设计专家提出了一些常见的建议：

  1. 960像素：这是一个非常常见的版心宽度，它可以适应大多数常见的电脑分辨率，同时还可以兼容一些较小的移动设备。
  2. 1200像素：这个版心宽度适用于大屏幕显示器或者需要显示大量内容的网站。
  3. 可变宽度：也就是根据用户的设备和屏幕大小自动调整版心宽度，这个设计能够适应任何大小的屏幕，但有时会引发设计问题，需要仔细考虑。

  总的来说，网页版心的最佳宽度应该是一个能够适应大多数用户设备和分辨率的值。（以上仅供参考，具体还需要根据实际情况进行调整。）

* 两侧留白可以使版心更加突出，使得网页更易读和优雅。同时，留白也使得网页整体看起来更加清晰、有序，使得观众视觉体验感更好。

  而且，通过使用留白，网页可以更好地适应不同的屏幕尺寸和设备，可以更好地响应式设计。相对于在版心两侧不留白的设计，这种设计方式更具有弹性，可以更好地适应不同尺寸的屏幕。

  总之，两侧留白是网页设计中非常重要的一个要素，可以使得网页更加易读、美观、优雅，同时也有利于响应式设计，使得网页可以适应不同尺寸的屏幕。
