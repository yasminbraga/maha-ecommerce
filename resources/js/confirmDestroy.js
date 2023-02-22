const destroyForms = document.querySelectorAll('.confirm-destroy')
if (destroyForms) {
  destroyForms.forEach((form) => {
    const destroyBtn = form.querySelector('button')
    destroyBtn.addEventListener('click', () => {
      const confirmDestroy = confirm('Deseja deletar?')
      if (confirmDestroy) form.submit()
    })
  })
}
