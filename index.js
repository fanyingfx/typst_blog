(function () {
  const body = document.body;
  if (!body) return;

  // 当前页面文件名
  const currentFile = location.pathname.split('/').pop();
  const isHome = currentFile === '' || /^index\.html?$/i.test(currentFile);

  // 构建导航容器
  const nav = document.createElement('nav');
  nav.className = isHome ? 'topnav' : 'breadcrumb';
  Object.assign(nav.style, {
    display: 'flex',
    alignItems: 'center',
    gap: '0.4em',
    padding: '1em 0 0 0',
    marginTop: '2em',
    borderTop: '1px solid #e6e6e6',
    fontSize: '0.9em',
    color: '#606060',
  });

  function link(href, name) {
    const a = document.createElement('a');
    a.href = href;
    a.textContent = name;
    Object.assign(a.style, { textDecoration: 'none' });
    return a;
  }

  function text(t) {
    const s = document.createElement('span');
    s.textContent = t;
    return s;
  }

  if (isHome) {
    // 首页：只显示「友链」「关于」导航
    nav.style.gap = '1.5em';
    nav.appendChild(link('friends.html', '友链'));
    nav.appendChild(link('about.html', '关于'));
  } else {
    // 文章页：显示「首页 / 文章标题」面包屑
    nav.appendChild(link('index.html', '首页'));
    nav.appendChild(text('/'));
    const current = document.createElement('span');
    current.textContent = document.title || '';
    current.style.color = '#1a1a1a';
    nav.appendChild(current);
  }

  body.appendChild(nav);
})();
