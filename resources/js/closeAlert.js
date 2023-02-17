const closeAlertBtn = document.querySelector('.close-alert')
const alertContainer = document.querySelector('.alert')

if (alertContainer) {
  const hideAlert = () => {
    alertContainer.classList.remove('show')
    alertContainer.classList.add('hide')
  }
  setTimeout(() => {
    hideAlert()
  }, 4000)

  if (closeAlertBtn) {
    closeAlertBtn.addEventListener('click', () => {
      alertContainer.classList.remove('show')
      alertContainer.classList.add('hide')
    })
  }
}
