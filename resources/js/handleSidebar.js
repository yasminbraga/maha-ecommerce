export const HandleSidebar = {
  sidebarContainer: document.querySelector('.sidebar'),
  sidebarOverlay: document.querySelector('.sidebar-overlay'),

  showSidebar() {
    HandleSidebar.sidebarContainer.style.left = '0px'
    HandleSidebar.sidebarOverlay.style.display = 'block'
  },
  closeSidebar() {
    HandleSidebar.sidebarContainer.style.left = '-200px'
    HandleSidebar.sidebarOverlay.style.display = 'none'
  },
}
