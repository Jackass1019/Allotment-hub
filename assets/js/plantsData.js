/*
 * plantsData.js
 *
 * Contains a copy of the plant database as a global variable.  This
 * allows pages to load the plant information without having to
 * fetch a local file via the `file://` protocol, which may be
 * restricted in some browsers.  The data is derived from
 * allotment_hub/data/plants.json.
 */

window.plantsData = [
  {
    name: "Carrot",
    type: "Vegetable",
    image: "assets/images/carrot.jpg",
    history: "Carrots were first cultivated in the region that is now Afghanistan about 5,000 years ago. Early carrots were mostly purple, black or white. The familiar orange carrots we know today were developed by Dutch growers in the 17th century【664189207612001†L92-L110】.",
    growing: "Sow carrot seeds in rows from late March through June. For early crops you can sow under cloches from February and for later crops you can sow as late as July. Sow thinly in shallow drills and avoid thinning the seedlings to reduce the risk of carrot fly. Successional sowings every few weeks will give a continuous harvest【410285376293149†L245-L252】.",
    sowing_months: ["March", "April", "May", "June"]
  },
  {
    name: "Lettuce",
    type: "Vegetable",
    image: "assets/images/lettuce.jpg",
    history: "Lettuce was domesticated from a wild plant in ancient Egypt around 5,000 years ago. The Egyptians cultivated the plant for oil and medicine and eventually selected it for its edible leaves. The Greeks and Romans later adopted lettuce, and the Roman name \"lactuca\" is the root of the word lettuce【743856792842180†L41-L47】.",
    growing: "Sow lettuce seeds outdoors from late March to late July for summer and autumn harvests. For winter harvests sow outdoors in early August and cover plants, and for spring harvests sow a winter variety in September or October. Lettuce can also be started under cover earlier in the spring and planted out when conditions allow【187913543723874†L472-L490】.",
    sowing_months: ["March", "April", "May", "June", "July", "August", "September", "October"]
  },
  {
    name: "Tomato",
    type: "Fruit",
    image: "assets/images/tomato.jpg",
    history: "Tomatoes originated as wild plants in the Andes of South America. Indigenous peoples domesticated them and spread them north into Central America and Mexico. Spanish explorers brought tomato seeds to Europe in the 16th century, but they were initially grown as ornamentals because many Europeans thought they were poisonous【757115094707355†L156-L170】.",
    growing: "Sow tomato seeds under cover from early February if growing in a greenhouse, or from March to early April for outdoor plants. Fill a seed tray with compost, sow the seeds and cover lightly. Transplant seedlings when they have two true leaves and plant them outdoors only after the risk of frost has passed, usually in May【141285247106217†L296-L334】.",
    sowing_months: ["February", "March", "April"]
  },
  {
    name: "Potato",
    type: "Vegetable",
    image: "assets/images/potato.jpg",
    history: "The potato was first domesticated in the Andean highlands of present‑day Peru and Bolivia between 8,000 and 5,000 BC. Archaeological evidence shows that potatoes were being cultivated by 2,500 BC and they later spread around the world to become a staple food【803856738231386†L145-L169】.",
    growing: "Plant first early potatoes from mid‑March and second earlies a couple of weeks later. Maincrop potatoes should be planted in late April or early May. For early and salad potatoes, plant the seed potatoes 10–15 cm deep and 30 cm apart with 60 cm between rows; maincrop potatoes need wider spacing, about 40 cm between plants and 75 cm between rows【611760140894564†L295-L299】【611760140894564†L332-L335】.",
    sowing_months: ["March", "April", "May"]
  },
  {
    name: "Strawberry",
    type: "Fruit",
    image: "assets/images/strawberry.jpg",
    history: "Woodland strawberries were cultivated in Europe by the 13th century. The small‑fruited Virginia strawberry (Fragaria virginiana) reached Europe in the 1600s. Crosses between it and the Chilean strawberry (F. chiloensis) in the 18th century gave rise to the large, sweet garden strawberry we grow today【549227939398237†L44-L66】.",
    growing: "Plant strawberry runners in late summer to early autumn when the soil is still warm. Cold‑stored runners can also be planted between April and June. Pot‑grown strawberries are planted in late summer to early autumn or in spring up to May. Space the plants 30–45 cm apart in rows 75 cm apart and keep young plants weeded and well‑watered【177578955005578†L314-L331】【497324665395167†L185-L206】.",
    sowing_months: ["August", "September", "October", "April", "May", "June"]
  },
  {
    name: "Apple",
    type: "Fruit",
    image: "assets/images/apple.jpg",
    history: "Domesticated apples descend primarily from Malus sieversii, a wild crab‑apple native to the Tien Shan mountains of Central Asia. Archaeological and genetic evidence suggests that apples were domesticated between 4,000 and 10,000 years ago and subsequently spread westwards along ancient trade routes, hybridising with local crab‑apple species along the way【620259801386891†L135-L151】【620259801386891†L171-L183】.",
    growing: "Plant bare‑root apple trees while they are dormant, typically in early spring or late autumn. Choose a sunny site with well‑drained soil and space the trees according to their rootstock vigour. Water well after planting and stake young trees for support if necessary【218426931509155†L37-L39】.",
    sowing_months: ["February", "March", "April", "November"]
  },
  {
    name: "Onion",
    type: "Vegetable",
    image: "assets/images/onion.jpg",
    history: "Onions are among the most ancient of cultivated vegetables, originating over 5,000 years ago in Central Asia. They were revered by the ancient Egyptians, who even placed them in the tombs of pharaohs, and were widely eaten by the Greeks and Romans【725289884217316†L54-L98】.",
    growing: "Plant onion sets as soon as the soil can be worked in early spring. For green onions, set bulbs about 2.5 cm apart; for dry bulbs, space them about 5 cm apart in rows. Onions prefer cool weather and a neutral to slightly acidic soil (pH 6.2–6.8). Water newly planted sets and protect them with fleece until they are established【725289884217316†L54-L98】【176514557722422†L260-L277】.",
    sowing_months: ["February", "March", "April"]
  },
  {
    name: "Spinach",
    type: "Vegetable",
    image: "assets/images/spinach.jpg",
    history: "Spinach has its origins in ancient Persia (modern Iran) where it was domesticated from the wild species Spinacia tetranda. It spread east to India and China—reaching China by the 7th century where it was known as \"Persian green\"—and westwards via North Africa into Europe, becoming widely cultivated there by the 15th century【642918970580009†L161-L176】.",
    growing: "Spinach seeds germinate best in cool weather. Sow them outdoors from mid‑ to late spring for harvests in late spring and summer, and again in late summer to early autumn for autumn or early spring crops. Sow seeds 2.5 cm deep in drills spaced 20 cm apart and thin seedlings to 7.5 cm once they have emerged【693517925407989†L503-L533】【693517925407989†L533-L559】.",
    sowing_months: ["April", "May", "June", "August", "September"]
  },
  {
    name: "Pea",
    type: "Vegetable",
    image: "assets/images/peas.jpg",
    history: "Peas are among the oldest cultivated crops. Archaeological remains from sites in Iraq and Turkey show that people were growing peas as early as 7,500 BC. They were one of the staple foods during the spread of agriculture into Europe and later became famous as the plant used by Gregor Mendel to discover the laws of genetics【11514227979173†L7-L39】【465929292443941†L130-L163】.",
    growing: "Sow hardy pea varieties outdoors from March once the soil temperature reaches about 10 °C. Sow the seeds 7.5 cm apart in rows and space the rows about 30 cm apart for tall varieties. Continue sowing every few weeks until June for successional harvests. Seeds sown in very cold or waterlogged soil will not germinate well【763751448766900†L528-L559】.",
    sowing_months: ["March", "April", "May", "June"]
  },
  {
    name: "Broad Bean",
    type: "Vegetable",
    image: "assets/images/broad_bean.jpg",
    history: "The exact origin of the broad bean (Vicia faba) is uncertain, but charred remains from Neolithic sites in the Lower Galilee of Israel suggest it was domesticated by around 8,250 BC. For centuries this hardy legume has been valued not only as a food crop but also for its ability to fix nitrogen and improve soil fertility【761195858484632†L364-L380】.",
    growing: "Sow broad beans indoors in small pots or modules from February or sow outdoors from March through May, depending on the variety. Plant the seeds 5–7.5 cm deep and 15–23 cm apart in rows. Make successional sowings every few weeks to extend the harvest through the summer【256947287387939†L448-L490】.",
    sowing_months: ["February", "March", "April", "May"]
  },
  {
    name: "Radish",
    type: "Vegetable",
    image: "assets/images/radish.jpg",
    history: "Radishes were first domesticated in Southeast Asia. Truly wild forms still grow there and the plant was already well known in India, China and Central Asia before it appears in European records in the 3rd century BC. The Greeks and Romans grew several radish varieties and valued them for their crisp roots【90835646471895†L288-L399】.",
    growing: "Sow salad radishes in spring, early summer and late summer. Scatter the seeds 1 cm deep, spacing them 2.5–5 cm apart in rows 15 cm apart. For an early start you can sow in February under fleece or cloches. Winter radishes are sown in July or August at a depth of 2 cm and spaced 15–20 cm apart. Radish seeds germinate quickly and need regular watering to prevent the roots becoming woody【492156707500514†L445-L480】.",
    sowing_months: ["February", "March", "April", "May", "July", "August"]
  },
  {
    name: "Parsnip",
    type: "Vegetable",
    image: "assets/images/parsnip.jpg",
    history: "Parsnips were cultivated by the Romans, who called them pastinaca. There is little archaeological evidence for their early domestication, but they were an important root crop across Europe. Parsnips were carried to North America by French and British settlers and remained a staple until replaced by the potato【629813181221283†L396-L431】.",
    growing: "Sow parsnip seeds outdoors in mid‑spring when the soil has warmed to around 12 °C, usually in March or April. Sow the seeds 1 cm deep either thinly along the row or in small groups 15 cm apart. Germination can be slow – up to 30 days – so sow more seeds than you need and thin seedlings to 15 cm spacing once they emerge. Parsnips are sweetest when left in the ground until after the first frosts【303590045330511†L362-L430】.",
    sowing_months: ["March", "April"]
  }
];