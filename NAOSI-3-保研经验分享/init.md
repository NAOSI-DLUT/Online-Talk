---
# try also 'default' to start simple
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://source.unsplash.com/collection/94734566/1920x1080
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# some information about the slides, markdown enabled
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
---

# wo谈会-保研分会

Powered by NAOSI-DLUT

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 p-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---

# 保研wo谈会

<div grid="~ cols-2 gap-6">

<div>

## 📝 **保研基础介绍**

### - 本校保研情况

### - 如何获得保研资格

### - 保研黑话

### - 保研时间线

### - 如何准备保研

### - 高校层次参考

### - 学硕/专硕/直博 联培

### - 文书准备

### - 信息获取

### - 学长经验分享

</div>
<div>

## 🎨 **常规问题**

<br>
<br>

## 🧑‍💻 **Q&A**

</div>
</div>

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---

# 本校保研情况
每年都会有变动，请根据自己学年的情况进行参考

* 本校保研政策，即软件学院推免工作排名方案：保研全称《推荐免试》，软院的保研名额要求根据学校分配，每年的比例大概在15%左右，应该依据全专业总人数具体而定。保研名额的人选按照自愿报名的原则，根据报名人的综合成绩排名先后依次赋予保研名额。

* 另外可能有特殊名额如
  * 大飞机班
  * 国防补偿
  * 支教保研
  * 科创保研
  * 行政保研
  * 等

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---

# 如何获得资格
<br>

综合考虑成绩&奖学金数

大一、大二、大三应该干什么才能获得保研资格

综合成绩排名按照成绩95%、奖学金5%的比例分配

$$
\begin{aligned}
&88.5\text{(学习成绩加权分)} \times 0.95\\ +\space &0.33\text{(三个单项奖学金)} \times 3\\=\space &85.075\text{(综合成绩)}
\end{aligned}
$$

* 2022年软件学院保研 91/500+
  * 网络工程 19 + 1（大飞机班）
  * 软件工程 62 + 1（大飞机班）+ 1（国防科工计划）
  * 3人科创保研，2人支教保研，2人直博专项计划

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---

# 保研黑话

* CS、SE、AI
* rk：排名rank
* title：学校名称的等级，如：清北，华五，中九，次九，末九。
* 套瓷/陶瓷：提前联系老师，得到老师某种承诺。
* 强弱com/强弱prof：强com,招生办权利大于老师，弱com相反。强prof:老师权利大于招生点办，弱prof相反。
* 学校简写（tongjiu：同济大学，tju：天津大学，tpu：tsinghua pku合称。
* oq：over qualified 如：清华报大工，（大工应该不会放进来的吧
* bar：入营，考核的难度，
* wl：waiting list，候补名单
* 0812（计算机科学与技术）、0835（软件工程）、0839（网安）、0854（电子信息专硕）

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---
class: px-20
---

# 保研时间线
<br>

<img src="https://augists-upic.oss-cn-qingdao.aliyuncs.com/uPic/timeline.png">

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---

<div grid="~ cols-2 gap-6">

<div>

# 如何准备保研

* 科研
  * 论文
  * 经历
* 项目
* 竞赛
* 英语成绩：有部分学校会卡CET6（425/450/480），也可用雅思等替代。 
* 基础知识
  * 数学：概率/离散/线代/高数(问得学校比较少)
  * 408
  * 专业知识：软工/网安/深度学习

</div>

<div>
<img src="https://augists-upic.oss-cn-qingdao.aliyuncs.com/uPic/928.jpg">
</div>

</div>

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---

<div grid="~ cols-2 gaps-6">

<div>

<h1>高校层次参考</h1>
<img src="https://augists-upic.oss-cn-qingdao.aliyuncs.com/uPic/schoollevel.jpg">

</div>
<div>

<img src="https://augists-upic.oss-cn-qingdao.aliyuncs.com/uPic/6747C1879AAF63B8DF23C44BDFD502D6.jpg">

</div>

</div>

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---

# 学硕/专硕/直博 联培

* 难度：直博<专硕<学硕
  * pku吕反对
* 什么情况下选择直博
  * 放在第二部分
* **联培有风险，入坑需谨慎**
  * 目前比较香的联培有各大高校和pjlab（bar非常高）的联培，国家实验室+平均万引以上的牛导+清北华五博士毕业证+一个月1w左右的补助+市中心豪华单人公寓宿舍，生活福利和学术全部拉满。但后面会不会出现问题，还是一个未知数。

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---

# 文书的准备

* 中英文自我介绍
  * 1min钟版，3min钟版，5-8min版。
* 自我介绍ppt
  * 3min钟版，5min钟版。
* 个人简历
  * 一页，多页
* 个人陈述
  * 邮件版，300字，800字等
* 证件照
  * 200*150为主
* 一些模板
  * LaTeX简历：https://github.com/billryan/resume
  * 鸽子与反鸽子：https://github.com/yuezih/King-of-Pigeon

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---

<div grid="~ cols-2 gap-6">
<div>

# 信息获取

* 绿群：看大佬吹逼的辅助小帮手
* 黄群：软院群
* google：例 南京大学 计算机 夏令营 小记
* csdn/知乎/blog：面经

<img src="https://augists-upic.oss-cn-qingdao.aliyuncs.com/uPic/F103DFD8FF26C544A5D77CC266B6DBD5.jpg" width="300">

</div>
<div>
<img src="https://augists-upic.oss-cn-qingdao.aliyuncs.com/uPic/F2DF7B03507054DA799D59FE90694458.jpg">
</div>
</div>

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---
layout: center
class: text-center
---

# 北大深圳-姜沛峰分享

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---
layout: center
class: text-center
---

# 中科院-方陶松分享

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---
layout: center
class: text-center
---

# 第二部分

## Question List

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---

# Question List

* 有没有必要提前联系老师？提前进组实习？
* 机试是否有必要准备？
* 如何准备夏令营机试？能否列举一些代表性学校的机试
* 英语六级在面试中权重如何，大致需要什么分数段在保研里不会受到影响
* 纯rk选手如何准备简历？目前到夏令营前还能做什么额外的准备？
* 没有科研经历如何弥补，如何让老师觉得自己是熟练工，或者让老师觉得有科研潜力
* 关于rk和科创的权衡：比赛/项目/论文在夏令营作用有多大（相比于rk的提升来说）
* 有哪些是弱com的学校？学长学姐能否讲一些知道的
* 如何合理选择一位导师？学术能力，人品，大老板小老板的优劣之处，渠道
* 不想保本校、rk较差的同学是否有机会以及如何在九推中捡漏
* title和强组如何抉择，利弊如何
* rk是否有明确的分界线（rk2，5%，15%等），有的话在界内和界外的差别有多大
* 是否直博的考量：走科研还是研究生毕业工作，各有哪些利弊，学长学姐有无心路历程

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---
layout: center
class: text-center
---

# 第三部分
## Q&A

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>