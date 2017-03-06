var monster_data = `
bingyong 兵俑

chishe 赤舌
choushizhinv 丑时之女
cimutongzi 茨木童子

denglonggui 灯笼鬼
datiangou 大天狗
duyanxiaoseng 独眼小僧
daomuxiaogui 盗墓小鬼

egui 饿鬼
erkounv 二口女

fenghuanghuo 凤凰火

guishihei 鬼使黑
guishibai 鬼使白
gunv 骨女
guanhu 管狐
guinvhongye 鬼女红叶

haifangzhu 海坊主
heibao 黑豹
hudiejing 蝴蝶精
hetong 河童
huangchuanzhizhu 荒川之主

jiumingmao 九命猫
jiaotu 椒图
jishenghun 寄生魂
jiutuntongzi 酒吞童子
jue 觉

kuileishi 傀儡师

limao 狸猫
liyujing 鲤鱼精
lianyou 镰鼬

mengpo 孟婆

panguan 判官

qingwaciqi 青蛙瓷器
quanshen 犬神

shantong 山童
shantu 山兔
shifagui 食发鬼
sanweihu 三尾狐
shouwu 首无
shimengmo 食梦貘

tianxieguihuang 天邪鬼黄
tianxieguichi 天邪鬼赤
tianxieguilv 天邪鬼绿
tianxieguiqing 天邪鬼青
tiaotiaogege 跳跳哥哥
tiaotiaomeimei 跳跳妹妹
tubi 涂壁
tongnan 童男
tongnv 童女
tangzhisanyao 唐纸伞妖
taohuayao 桃花妖
tidengxiaoseng 提灯小僧
tiaotiaoquan 跳跳犬
tieshu 铁鼠

wugushi 巫蛊师
wushizhiling 武士之灵

xuenv 雪女
xixueji 吸血姬

yinghuayao 樱花妖
yatiangou 鸦天狗
yingcao 萤草
yanmo 阎魔
yaoqinshi 妖琴师
yaohu 妖狐
yunv 雨女

zuofutongzi 座敷童子
zaoshen 帚神
`

var monsterList = {}, reverseList = {}, alphabetList = {}
for (var a = 97; a < 123; a++) {
    alphabetList[String.fromCharCode(a)] = []
}

monster_data.split('\n').filter(l => !!l.length).forEach(l => {
    var [k, v] = l.split(' ')
    monsterList[k] = v
    reverseList[v] = k

    alphabetList[k[0]].push({
        title: v,
        key: k,
        type: 'monster'
    })
})

var riddle_data = `
b 蝙蝠 吸血姬 xixueji
d 单眼/石锤/怪力 山兔 shantong
d 单眼/石菩萨/金刚经 独眼小僧 duyanxiaoseng
d 大翅膀/风/扇 大天狗 datiangou
d 稻草人/咒锥 丑时之女 choushizhinv
f 风筝/青皮肤 天邪鬼青 tianxieguiqing
h 黑镰/短刀 鬼使黑 guishihei
h 花/舞 桃花妖 taohuayao
h 红鬼/拍屁股 天邪鬼赤 tianxieguichi
h 海/胡须/杖 海坊主 haifangzhu
k 骷髅/剑/怨恨 骨女 gunv
m 美丽的女妖怪/身上饰品 鬼女红叶 guinvhongye
m 冥界/白/夺命 鬼使白 guishibai
r 人偶/操纵 傀儡师 kuileishi
t 汤碗/琴/牙牙 孟婆 mengpo
t 桃/樱花 樱花妖 yinghuayao
t 薙刀/翅膀/面具 鸦天狗 yatiangou
z 纸扇/书生/面具 妖狐 yaohu
z 薙刀/翅膀/面具 鸦天狗 yatiangou
`

riddle_data.split('\n').filter(l => !!l.length).forEach(l => {
    var [alpha, desc, monster_title, monster_key] = l.split(' ')

    alphabetList[alpha].push({
        title: desc,
        key: monster_key,
        type: 'riddle',
        monster: monster_title
    })
})

for (var alpha in alphabetList) {
    if (!alphabetList[alpha].length) {
        delete alphabetList[alpha]
    }
}

export {
    monsterList,
    reverseList,
    alphabetList
}
