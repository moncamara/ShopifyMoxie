(() => {
  /**
   * TabsComponent: controla los tabs dentro de un contenedor
   * @param {HTMLElement} container
   */
  function TabsComponent(container) {
    const tabTitles = container.querySelectorAll('.tab-title')
    const tabContents = container.querySelectorAll('.tab-content')

    function clearActiveStates() {
      tabTitles.forEach(el => el.classList.remove('active'))
      tabContents.forEach(el => el.classList.remove('active'))
    }

    function activateTab(index) {
      container.querySelector(`.tab-title[index="${index}"]`)?.classList.add('active')
      container.querySelector(`.tab-content[index="${index}"]`)?.classList.add('active')
    }

    tabTitles.forEach(tab => {
      tab.addEventListener('click', () => {
        const index = tab.getAttribute('index')
        clearActiveStates()
        activateTab(index)
      })
    })

    // Activar el primer tab por defecto si existe
    if (tabTitles.length && tabContents.length) {
      activateTab(tabTitles[0].getAttribute('index'))
    }
  }

  // Inicializar cuando el DOM esté listo
  document.addEventListener('DOMContentLoaded', () => {
    const allTabs = document.querySelectorAll('.tabs-container')
    allTabs.forEach(container => TabsComponent(container))
  })
})()
