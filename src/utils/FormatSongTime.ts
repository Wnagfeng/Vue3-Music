export function convertMillisecondsToMinutesAndSeconds(
  milliseconds: number,
): string {
  // 将毫秒转换成秒
  const seconds = Math.floor(milliseconds / 1000);
  // 计算分钟数
  const minutes = Math.floor(seconds / 60);
  // 计算剩余的秒数
  const remainingSeconds = seconds % 60;

  return `${minutes} 分 ${remainingSeconds} 秒`;
}
