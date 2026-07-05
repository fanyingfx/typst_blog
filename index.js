(function () {
  const body = document.body;
  if (!body) return;

  // 当前页面文件名
  const currentFile = location.pathname.split('/').pop();

  // 三个导航项：名称 -> 链接
  const items = [
    { name: '首页', href: 'index.html' },
    { name: '友链', href: 'friends.html' },
    { name: '关于', href: 'about.html' },
  ];

  // 构建导航容器
  const nav = document.createElement('nav');
  nav.className = 'topnav';
  Object.assign(nav.style, {
    display: 'flex',
    gap: '1.5em',
    padding: '0 0 1em 0',
    marginBottom: '1.5em',
    borderBottom: '1px solid #e6e6e6',
    fontSize: '1em',
  });

  items.forEach((item) => {
    const isCurrent = item.href === currentFile;
    const el = document.createElement(isCurrent ? 'span' : 'a');
    el.textContent = item.name;
    if (!isCurrent) el.href = item.href;
    Object.assign(el.style, {
      textDecoration: 'none',
      color: isCurrent ? '#1a1a1a' : '#606060',
      fontWeight: isCurrent ? 'bold' : 'normal',
      cursor: isCurrent ? 'default' : 'pointer',
    });
    nav.appendChild(el);
  });

  body.insertBefore(nav, body.firstChild);
})();
