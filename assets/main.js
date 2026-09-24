/* 杨志胜的小窝 · 公共脚本：导航注入 / 打字机 / 运行天数 */
(function () {
  "use strict";

  /* 站点配置：改这里即可换名字与链接 */
  var SITE = {
    name: "杨志胜的小窝",
    github: "https://github.com/", /* 发布后填 https://github.com/<用户名> */
    motto: "行者常至，为者常成",
    since: "2026-09-24" /* 建站日期，用于计算运行天数 */
  };

  /* 各页面导航高亮标识 */
  var page = (document.body.dataset.page || "").toLowerCase();

  /* 导航条（注入到每页顶部） */
  var links = [
    ["index.html", "主页", "index"],
    ["home.html", "博文", "home"],
    ["project.html", "项目", "project"],
    ["friends.html", "友链", "friends"],
    ["about.html", "关于", "about"]
  ];
  var nav = document.createElement("nav");
  nav.className = "nav";
  var ghSvg = '<svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"/></svg>';
  nav.innerHTML =
    '<a class="brand" href="index.html"><svg viewBox="0 0 24 24" fill="#14483a"><path d="M12 2C7 2 3 6 3 11v7a2 2 0 0 0 2 2h3l-1-6c0-3 2.2-5 5-5s5 2 5 5l-1 6h3a2 2 0 0 0 2-2v-7c0-5-4-9-9-9Z"/></svg>' +
    SITE.name + "</a>" +
    '<div class="links">' +
    links.map(function (l) {
      return '<a href="' + l[0] + '"' + (page === l[2] ? ' class="active"' : "") + ">" + l[1] + "</a>";
    }).join("") +
    '<a href="' + SITE.github + '" target="_blank" rel="noopener" title="GitHub">' + ghSvg + "</a>" +
    "</div>";
  document.body.insertBefore(nav, document.body.firstChild);

  /* 打字机效果（仅 landing 页有 #typing 时启用） */
  var el = document.getElementById("typing");
  if (el) {
    var words = ["欢迎来到我的小窝", "记录学习，分享工具", "把重复的事交给代码"];
    var wi = 0, ci = 0, deleting = false;
    (function tick() {
      var w = words[wi];
      el.firstChild.nodeValue = w.slice(0, ci);
      if (!deleting) {
        ci++;
        if (ci > w.length) { deleting = true; setTimeout(tick, 1600); return; }
      } else {
        ci--;
        if (ci < 0) { deleting = false; ci = 0; wi = (wi + 1) % words.length; }
      }
      setTimeout(tick, deleting ? 60 : 140);
    })();
  }

  /* 页脚运行天数 */
  var days = document.getElementById("run-days");
  if (days) {
    var s = new Date(SITE.since + "T00:00:00"), n = new Date();
    var d = Math.max(0, Math.floor((n - s) / 86400000));
    days.textContent = "小窝已运行 " + d + " 天";
  }
})();
