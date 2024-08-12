export function activeMenu() {
  const navItems = document.querySelectorAll('nav a')
  
  navItems.forEach(item => {
    item.classList.remove('active')
  
    if(item.getAttribute('href') === window.location.pathname) {
      item.classList.add('active')
    }
  })
}
