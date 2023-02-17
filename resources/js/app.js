import '../css/app.css'
import { HandleSidebar } from './handleSidebar'
import './highlightLinks'
import './closeAlert'

const showSidebarBtn = document.querySelector('#show-sidebar')
const closeSidebarBtn = document.querySelector('#close-sidebar')

if (showSidebarBtn) showSidebarBtn.addEventListener('click', HandleSidebar.showSidebar)
if (closeSidebarBtn) closeSidebarBtn.addEventListener('click', HandleSidebar.closeSidebar)

document.addEventListener('click', (ev) => {
  if (ev.target.className.includes('sidebar-overlay')) HandleSidebar.closeSidebar()
})
