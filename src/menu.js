let last_menu_id = -1;
let last_menu_component_id = -1;

export class Menu {
    constructor(name, content) {
        this.name = name;
        this.content = content;
        this.id = last_menu_id + 1;
        last_menu_id += 1;
        last_menu_component_id = -1;
    }
}

export class MenuComponent {
    constructor(name, weight, price) {
        this.name = name;
        this.weight = weight;
        this.price = price;
        this.id = last_menu_component_id + 1;
        last_menu_component_id += 1;
    }
}
