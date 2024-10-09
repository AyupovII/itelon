export const tabs = () => {
    const tabs = document.querySelectorAll('[data-tabs]')
    console.log(tabs)
    if (tabs[0]) {
        const removeActiveClass = (tabsItems) => {
            tabsItems.forEach(tabsItem => {
                tabsItem.classList.remove('active')
            })
        }

        tabs.forEach(tab => {
            const tabNavs = tab.querySelectorAll('[data-tabs-title]')
            const tabsItems = tab.querySelectorAll('[data-tabs-item]')
            tabNavs.forEach((nav, index) => {
                nav.addEventListener('click', (evt) => {
                    removeActiveClass(tabsItems)
                    removeActiveClass(tabNavs)
                    nav.classList.add('active')
                    tabsItems[index].classList.toggle('active')
                })
            });

        })
    }
}
