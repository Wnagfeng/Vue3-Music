/**
 * 获取本地图
 * @param name // 文件名 如 doc.png
 * @returns {*|string}
 */
const formatUrl = function getAssetsImages(name: string) {
  return new URL(`/src/assets/img/${name}`, import.meta.url).href;
};
export default formatUrl;
