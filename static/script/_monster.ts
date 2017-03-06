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
monster_data.split('\n').filter(l => !!l.length).forEach(l => {
    var [k, v] = l.split(' ')
    monsterList[k] = v
    reverseList[v] = k

    if (!alphabetList[k[0]]) {
        alphabetList[k[0]] = []
    }

    alphabetList[k[0]].push({
        title: v,
        key: k
    })
})

export {
    monsterList,
    reverseList,
    alphabetList
}
