
class TabLink {
    constructor(element) {
        this.element = element;

        // custom data attribute on the Link
        this.data = this.element.dataset.tab;

        // custom data attribute to get the associated Item element
        this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`);

        //  a new instance of the TabItem class.
        this.tabItem = new TabItem(this.itemElement);

        //  event listener calling the select method on click
        this.element.addEventListener('click', () => {
            this.select();
        });

    }

    select() {
        // Get all of the elements with the tabs-link class
        const links = document.querySelectorAll('.tabs-link');

        // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
        links.forEach(link => {
            link.classList.remove('tabs-link-selected');
        })
        // Array.from(links).forEach((link) => {
        //     link.classList.remove('tabs-link-selected');        
        // });

        // Add a class named "tabs-link-selected" to this link
        this.element.classList.add('tabs-link-selected');

        // Call the select method on the item associated with this link
        this.tabItem.select();
        //   this.element.addEventListener('click', () => { this.select() });
    }
}

class TabItem {
    constructor(element) {
        this.element = element;
    }

    select() {
        const items = document.querySelectorAll('.tabs-item');

        items.forEach(item => {
            item.classList.remove('tabs-item-selected');
        });
        // Select all ".tabs-item" elements from the DOM
        // Remove the class "tabs-item-selected" from each element
        // Add a class named "tabs-item-selected" to this element 
        this.element.classList.add('tabs-item-selected');
    }
}


// control flow starts here 
let links = document.querySelectorAll('.tabs-link');

// iterate through the array above creating a new instance of the TabLink class for each item. 
links = Array.from(links).map(tabsLinks => new TabLink(tabsLinks));

links[0].select();




