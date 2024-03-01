import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as r,c,a as e,d as t,b as s,w as l,e as d}from"./app-197ac21f.js";const h={},_=e("h1",{id:"编写新的-trpg-规则",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#编写新的-trpg-规则","aria-hidden":"true"},"#"),t(" 编写新的 TRPG 规则")],-1),p={class:"hint-container info"},E=e("p",{class:"hint-container-title"},"本节内容",-1),u=e("p",null,"本节将介绍如何为你的海豹核心编写和添加一个新的 TRPG 规则。包括编写规则模板和编写指令。",-1),f=d('<p>在本节中，假设我们创建了一个叫做《摸鱼大赛》的 TRPG 规则，简称为 fish 规则。</p><details class="hint-container details"><summary>规则详细内容</summary><h2 id="角色属性" tabindex="-1"><a class="header-anchor" href="#角色属性" aria-hidden="true">#</a> 角色属性</h2><p>每个角色有 2 个关键属性，即<strong>脸皮厚度</strong>和<strong>摸鱼技能等级</strong>。取值分别为 1 - 3，通过投掷 D3 来生成。</p><p>此外有生命值，生命值上限 = 脸皮厚度 * 2。</p><h2 id="游戏规则" tabindex="-1"><a class="header-anchor" href="#游戏规则" aria-hidden="true">#</a> 游戏规则</h2><p>简单说：这是一个类 21 点游戏。</p><p>玩家的目标是尽可能使得自己的积分接近 21，但不能大于等于 22（因为摸到 22 就不存在了！）。</p><p>开始游戏时，每个玩家创建一个角色，可以互换交换一次属性点位置。</p><p>每一轮游戏中，每个玩家都要决定“摸鱼”和“不摸鱼”。如果选择摸鱼，获得 d6 + d(摸鱼等级) 的积分；如果选择不摸鱼，则跳过本回合。</p><p>如果选择摸鱼后累计积分超过 22，玩家自动消耗 1 点生命值、随机弃牌 1 张。如果累计积分仍大于 22，那么重复以上过程直到积分小于 22 或生命值归零。</p><p>如果生命值归零，此玩家就无法再摸鱼了。</p><p>当连续两轮所有玩家都选择不摸鱼时，游戏结束。积分最大的人取胜，如果积分相同，生命值更大的人取胜。</p></details><h2 id="规则模板是什么-有什么功能" tabindex="-1"><a class="header-anchor" href="#规则模板是什么-有什么功能" aria-hidden="true">#</a> 规则模板是什么？有什么功能？</h2><p>规则模板是海豹核心中几种功能的整合发展，包括角色卡、属性同义词、自动修改群名片等。</p><p>具体地说，规则模板能为 fish 规则提供以下功能：</p>',5),A=e("code",null,"set",-1),m=e("code",null,"set fish",-1),B=e("code",null,"st",-1),D=e("ol",null,[e("li",null,"fish 规则自己的技能默认值"),e("li",null,"fish 规则的二级属性计算公式"),e("li",null,"fish 规则的属性同义词"),e("li",null,"fish 规则的角色卡属性展示顺序")],-1),b=e("code",null,"sn",-1),x=e("code",null,"sn fish",-1),g=e("h2",{id:"那么-要怎么做",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#那么-要怎么做","aria-hidden":"true"},"#"),t(" 那么，要怎么做？")],-1),v=e("p",null,"你需要根据规则编写规则模板，并把规则中的动作编写成指令。",-1),T=e("p",null,"对于 fish 规则来说，指令应该实现以下动作：",-1),R=e("ol",null,[e("li",null,"制卡：投掷 2 个 D3，生成角色的属性点；"),e("li",null,"摸鱼：投掷 D6 + D(摸鱼等级)，计算总积分，按规则扣除生命值；"),e("li",null,"不摸鱼：跳过此轮；")],-1),k=e("p",null,"另外，对于一个合适的指令，它也应提供帮助文本。",-1),G=e("p",null,"以上的规则模板和指令都可以在同一个 TypeScript 或 JavaScript 插件文件中完成。我们已经写了一个比较完善且有详细注释的示例，以供参考：",-1),P={href:"https://github.com/sealdice/javascript/blob/main/examples_ts/013.%E8%87%AA%E5%AE%9A%E4%B9%89TRPG%E6%B8%B8%E6%88%8F%E8%A7%84%E5%88%99.ts",target:"_blank",rel:"noopener noreferrer"},y=e("p",null,"如果你希望直接尝试以上插件的效果，可以从以下链接获取经过编译的 JavaScript 文件：",-1),C={href:"https://github.com/sealdice/javascript/blob/main/examples/013.%E8%87%AA%E5%AE%9A%E4%B9%89TRPG%E6%B8%B8%E6%88%8F%E8%A7%84%E5%88%99.js",target:"_blank",rel:"noopener noreferrer"};function S(j,F){const n=a("RouterLink"),o=a("ExternalLinkIcon");return r(),c("div",null,[_,e("div",p,[E,u,e("p",null,[t("本文中将涉及使用 JavaScript 与 TypeScript 编写插件的内容。如果你尚未阅读 "),s(n,{to:"/advanced/edit_jsscript.html"},{default:l(()=>[t("相应章节")]),_:1}),t("，请先阅读它。")])]),f,e("ol",null,[e("li",null,[e("p",null,[t("在 "),s(n,{to:"/use/core.html#set-%E8%AE%BE%E5%AE%9A%E9%BB%98%E8%AE%A4%E9%AA%B0%E5%AD%90%E9%9D%A2%E6%95%B0--%E8%AE%BE%E5%AE%9A%E6%B8%B8%E6%88%8F%E7%B3%BB%E7%BB%9F"},{default:l(()=>[A,t(" 指令")]),_:1}),t(" 中注册这个游戏系统，可以直接使用 "),m,t(" 打开扩展并设定默认骰子为 D6；")])]),e("li",null,[e("p",null,[t("在 "),B,t(" 指令中添加 fish 规则的角色卡，这包括：（对于以下内容，可以参考海豹核心内置的 "),s(n,{to:"/use/coc7.html#st-%E6%93%8D%E4%BD%9C%E4%BA%BA%E7%89%A9%E5%8D%A1"},{default:l(()=>[t("CoC 7th")]),_:1}),t(" 系统与 "),s(n,{to:"/use/dnd5e.html#st-%E6%93%8D%E4%BD%9C%E8%A7%92%E8%89%B2%E5%8D%A1"},{default:l(()=>[t("D&D 5e")]),_:1}),t(" 系统角色卡的功能）")]),D]),e("li",null,[e("p",null,[t("在 "),s(n,{to:"/use/log.html#sn-%E8%87%AA%E5%8A%A8%E7%BE%A4%E5%90%8D%E7%89%87"},{default:l(()=>[b,t(" 指令")]),_:1}),t(" 中添加 fish 规则的自动群名片格式，可以使用 "),x,t(" 来开启。")])])]),g,v,T,R,k,G,e("p",null,[e("a",P,[t("摸鱼大赛 TRPG 规则.ts"),s(o)])]),y,e("p",null,[e("a",C,[t("摸鱼大赛 TRPG 规则.js"),s(o)])])])}const V=i(h,[["render",S],["__file","edit_gamesystem.html.vue"]]);export{V as default};
