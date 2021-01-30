<template>
  <div>
    <vue-scroll-snap :horizontal="true">
      <div v-for="menu in menu_list" :key="menu.id" class="item">
        <table>
          <thead>
          <tr>
            <th colspan="2">{{ menu.name }}</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="component in menu.content" :key="component.id">
            <td>{{ component.name }}</td>
            <td>{{ component.weight }} г</td>
            <td>{{ component.price }} ₽</td>
          </tr>
          </tbody>
        </table>
      </div>
    </vue-scroll-snap>
  </div>
</template>

<script>
import {Menu, MenuComponent} from "@/menu.js"
import VueScrollSnap from "vue-scroll-snap";

var menu_list = [
  new Menu(
    "Appetizer",
    [
      new MenuComponent("Home-Salted Salmon on Rosemary Cheesecake", 160, 580),
      new MenuComponent("Sugudai from the Far Eastern scallop in Abkhazian lemon sauce", 130, 690),
      new MenuComponent("Tuna tartare with avocado and strawberries in balsamic sauce", 220, 740),
      new MenuComponent("Smoked mackerel pate with pike caviar and glazed orange peel ", 160, 540),
      new MenuComponent("Olyutorskaya herring on baked potatoes with beetroot and horseradish salad", 250, 490),
      new MenuComponent("Ural marbled beef tartare with boletus mousse", 180, 590),
      new MenuComponent("Roast beef with Kaliningrad sprat sauce and charcoal baked potatoes", 160, 580),
      new MenuComponent("Chicken liver pate with spicy lingonberry jam and cinnamon butter", 180, 490),
      new MenuComponent("Country bacon carpaccio with green chili and grainy mustard", 110, 490),
      new MenuComponent("Milk mushrooms with sour cream and pickled Yalta onions", 170, 510),
      new MenuComponent("Farmer Grilled Adyghe cheese with cloudberry and orange jam", 220, 740),
      new MenuComponent("Zucchini waffle with parmesan, Ural strachella and red caviar", 180, 440),
      new MenuComponent("Ural cheeses with truffle honey", 290, 990),
      new MenuComponent("Bread plate", 200, 150)
    ]
  ),
    new Menu(
    "Salads",
    [
      new MenuComponent("Mimosa with smoked sockeye salmon and red caviar", 210, 520),
      new MenuComponent("Salad with tuna, crispy egg and honey balsamic sauce", 220, 680),
      new MenuComponent("Seafood Salad with Lemon Pepper Sauce", 230, 710),
      new MenuComponent("Salad with smoked prawns, avocado and grilled corn", 270, 660),
      new MenuComponent("Olivier with Tambov ham and pickled tomatoes", 250, 510),
      new MenuComponent("Salad with roast beef, pickled milk mushrooms and honey mustard", 260, 620),
      new MenuComponent("Salad with fried chicken liver, creamy sauce with porcini mushrooms and onion jam", 240, 540),
      new MenuComponent("Baked vegetable vinaigrette with honey agarics and sauerkraut", 320, 460),
      new MenuComponent("Fresh vegetable salad with sour cream and poached egg", 330, 410)
    ]
  ),
    new Menu(
    "Soups",
    [
      new MenuComponent("Borscht with beef and prunes", 350, 520),
      new MenuComponent("Ukha with pie and red caviar", 380, 540),
      new MenuComponent("Pickle with duck and baked celery", 350, 510),
      new MenuComponent("Creamy pea soup with smoked brisket", 350, 490)
    ]
  ),
    new Menu(
    "Hot meals",
    [
      new MenuComponent("Trout with asparagus, smoked dried fruit sauce and yogurt with horseradish", 240 , 810),
      new MenuComponent("Murmansk halibut with cauliflower puree with cardamom and fried spinach", 230 , 890),
      new MenuComponent("Far Eastern scallops on mashed white beans with bacon and onion jam", 190 , 950),
      new MenuComponent("Three fish cutlets with crayfish sauce and cauliflower rice", 260 , 720),
      new MenuComponent("Grilled squid with kohlrabi salad and ginger aioli", 280 , 640),
      new MenuComponent("Penne with seafood, crispy rosemary and Ural stracatella", 340 , 850),
      new MenuComponent('"Axe" steak from Altai marbled beef with pickled pepper salsa', 1000 , 3900),
      new MenuComponent("Ribeye steak from Altai marbled beef with tomato and horseradish sauce", 300 , 2300),
      new MenuComponent('Steak "Machete" with truffle corn and baked vegetable salsa', 260, 910),
      new MenuComponent("Stroganoff veal with cognac, mashed potatoes and marinated Yalta onions", 290 , 720),
      new MenuComponent("Beef ribs from Altai marbled beef with mashed potatoes and lightly salted cucumber", 300 , 720),
      new MenuComponent("Kid stewed in sour cream with new potatoes and rosemary", 340 , 860),
      new MenuComponent("Duck leg confit with lingonberry sauce and mashed potatoes with spinach", 320 , 720),
      new MenuComponent("Kazarechi with chicken liver in a creamy sauce with Ural camembert and red onion", 340 , 590),
      new MenuComponent("Buckwheat porridge with mushrooms, parmesan mousse and tomato jam", 290 , 520),
      new MenuComponent("Chicken Kiev with mashed potatoes and red cabbage salad with corn", 410 , 580),
      new MenuComponent("Cauliflower in creamy brie sauce", 320 , 610),
      new MenuComponent("Baked pumpkin dumplings with Ural stracatella and chorizo ​", 260 , 580)
    ]
  ),
    new Menu(
    "Desserts",
    [
      new MenuComponent("Bird cherry cake", 130 , 330),
      new MenuComponent("Kiev cake", 120 , 330),
      new MenuComponent("Honey cake with sour cream and raspberries", 220 , 330),
      new MenuComponent("Double Chocolate Mousse", 120 , 380),
      new MenuComponent('Dessert "Pear"', 110 , 350),
      new MenuComponent("White Chocolate Lingonberry Pie", 150 , 350),
      new MenuComponent("Banana crepeville with chocolate and hazelnuts", 150 , 380),
      new MenuComponent("Baked milk cheesecake with halva mousse", 135 , 380)
    ]
  )
]

export default {
  name: "MenuSection",
  components: {
    VueScrollSnap
  },
  data() {
    return {
      menu_list
    }
  }
}
</script>

<style scoped>
.item {
  /* Set the minimum height of the items to be the same as the height of the scroll-snap-container.*/
  min-height: 100%;
  min-width: 100%;
}

.scroll-snap-container {
  height: 100%;
  width: 100%;
}
</style>