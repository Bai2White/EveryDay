// 正则表达式要么匹配字符，要么匹配位置
// 横向模糊匹配 长度不固定
var reg = /ab{2,3}c/g;
var str = "abbc abbbc";
var outputVal = str.match(reg);
console.log(outputVal);
// var reg = /a[]/;
// 纵向匹配 某一位的字符不确定
var reg2 = /a[bcd]e/;
var str2 = "ace";
console.log(str2.match(reg2));
// [abc]字符组 /g修饰符 {1,2}量词
// 字符组 范围比较多，可以用范围表示法 比如[abcdedf] = [a-f] -连字符有特殊作用
// 排除字符组（反义字符组）^
// 字符组简写 \d 数字 digit \D 非数字 \w 单词 数字字母下划线[a-zA-Z0-9_] \W 非单词 \s 空白符 换行符，制表符，回车符，制页符
// \S 非空白符 .除换行新行外的任意字符 [^]任意字符 = [\d\D] or [\s\S] or [\w\W]
// 量词 {m,} 至少出现m次 {m} 出现m次 ? 有吗 {0, 1} 至多出现一次 +加号追加得先有一个 {1,}至少出现一次 *星星 任意次
var reg3 = /\d{2,5}/g;
var str3 = "12 3444 34 1 4567 456789";
console.log(str3.match(reg3));
// 以上是贪婪模式 尽可能多的匹配字符 你能给多少我就匹配多少 你给了5次 我就匹配五次的
// 惰性匹配 量词后加? 尽可能稍等匹配字符 虽然几次都行，但是当2次够了 就停止往下进行
var reg4 = /\d{2,5}?/g;
console.log(str3.match(reg4));
// 多选分支 用管道符分割 | 匹配多个子模式 且默认是惰性匹配的 前边的子模式匹配成功，后边的不在匹配
var reg5 = /good|goodbye/;
var str5 = "goodbye";
console.log(str5.match(reg5));
// 匹配16进制颜色值
var str6 = "#fff #000000 #fc0 #ff0000 #ffffff c #_ #3333 #";
var reg6 = /#([a-zA-Z0-9]{6}|[a-zA-Z0-9]{3})/g;
console.log(str6.match(reg6));
console.log(reg6.test(str6));
// 匹配时间
var str7 = "23:00 12:59 01:02 19:07 9:07 2:2";
// var reg7 = /[0-2]([0-9]|[0-3]):[0-5][0-9]/g;
// var reg7 = /([01][0-9]|[2][0-3]):[0-5][0-9]/g;
var reg7 = /^([01][0-9]|[2][0-3]):[0-5][0-9]$/g;
console.log(str7.match(reg7));
console.log(reg7.test('21:02'));
var reg8 = /^(0?[0-9]|1[0-9]|2[0-3]):(0?|[1-5])[0-9]$/;
console.log(reg8.test('7:2'));

var reg9 = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;

// windows文件夹 201909280 04:00未完
var reg10 = /^[a-zA-Z]:\\([a-zA-Z_\-]+\\)?\w+.\w+/;
