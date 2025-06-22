class Tabs extends HTMLElement {
    constructor() {
        super();
        this.titles = this.querySelectorAll("tab-title")
        this.contents = this.querySelectorAll("tab-content")
    }
    connectedCallback() {
        
    }
    removeTitlesActive () {
        this.titles.forEach(title => {
            title.removeAttribute("active")
        });
    }
    removeContentActive () {
        this.contents.forEach(content => {
            content.removeAttribute("active")
        });
    }
}
class TabTitle extends HTMLElement {
    constructor() {
        super()
        this.tabsContainer = this.closest("tabs-container")
    }
    connectedCallback() {
        
        this.addEventListener("click", ()=>{
            this.tabsContainer.removeTitlesActive()
            this.setAttribute("active", "")
            // acceder al contenido que corresponde con el index
            this.tabsContainer.removeContentActive()
            const activeContent = this.tabsContainer.querySelector(`tab-content[index="${this.getAttribute("index")}"]`)
            activeContent.setAttribute("active", "")
        })
    }
}
class TabContent extends HTMLElement {
    constructor() {
        super()
        this.tabsContainer = this.closest("tabs-container")
    }
    connectedCallback() {
    }
}

customElements.define("tabs-container", Tabs)
customElements.define("tab-title", TabTitle)
customElements.define("tab-content", TabContent)