// 这是我们处理后的类型
export interface ILyricInfo {
  time: number;
  content: string;
}

// 创建一个正则来匹配时间
/*
  解析：
  \[ --转义字符转义[
  \] --转义字符转义]
  小括号是分组
  \d(2)是匹配两位数字
   */
const parseExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/;
/* [00:00.000] 作曲 : Joel Davies/Hannah Hobbs/Alexander Pappas */
export function parseLyric(lyricString: string) {
  const lyrics: ILyricInfo[] = [];
  // 拿到一行行的歌词
  const lineStrings: string[] = lyricString.split('\n');
  // 对每句歌词进行解析
  for (const line of lineStrings) {
    const resule = parseExp.exec(line);
    // 如果没有拿到我们需要跳出一下
    if (!resule) continue;
    // 解析时间
    const time1 = Number(resule[1]) * 60 * 1000;
    const time2 = Number(resule[2]) * 1000;
    const time3 =
      resule[3].length === 3 ? Number(resule[3]) : Number(resule[3]) * 10;
    const time = time1 + time2 + time3;
    // 解析歌词
    const content = line.replace(parseExp, '');
    lyrics.push({ time, content });
  }
  return lyrics;
}
