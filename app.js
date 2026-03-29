// All meals use whole, unprocessed ingredients only.
// No preservatives, no emulsifiers, no additives.
// Carb-focused for sustained energy with balanced protein, fats, and fibre.
// Iron-boosted for runners (iron in mg per meal).

const breakfasts = [
    {
        name: "Spinach, Banana & Berry Iron Bowl",
        ingredients: [
            "80g rolled oats (3.4mg iron)",
            "1 sliced banana",
            "Handful of fresh blueberries",
            "Handful of fresh strawberries, sliced",
            "Large handful of fresh spinach, wilted (1.6mg iron)",
            "1 tbsp pumpkin seeds (2.5mg iron)",
            "Drizzle of raw honey",
            "Splash of whole milk or oat milk (check: no emulsifiers)"
        ],
        fruitVeg: ["Banana", "Blueberries", "Strawberries", "Spinach"],
        prep: "Cook oats with milk, wilt spinach into the oats, top with banana, blueberries, strawberries, pumpkin seeds, and honey.",
        macros: { carbs: 64, protein: 16, fat: 14, fibre: 12, iron: 7.5 },
        shopping: { fruit: ["1 banana", "80g blueberries", "80g strawberries"], veg: ["60g spinach"], grains: ["80g rolled oats"], dairy: ["200ml whole milk"], pantry: ["15g pumpkin seeds", "10g raw honey"] }
    },
    {
        name: "Avocado, Tomato & Spinach Toast with Seeds",
        ingredients: [
            "2 slices wholemeal bread (no preservatives - bakery fresh, 1.8mg iron)",
            "1/2 ripe avocado, mashed",
            "2 fresh tomatoes, sliced",
            "Large handful of fresh spinach (1.6mg iron)",
            "Squeeze of lemon juice (vitamin C boosts iron absorption)",
            "1 tbsp pumpkin seeds (2.5mg iron)",
            "1 tbsp hemp seeds (2.0mg iron)"
        ],
        fruitVeg: ["Avocado", "Tomatoes", "Spinach"],
        prep: "Toast bread, layer spinach, spread avocado, add tomatoes, and sprinkle seeds. Lemon juice helps absorb the iron.",
        macros: { carbs: 56, protein: 16, fat: 22, fibre: 14, iron: 7.9 },
        shopping: { fruit: ["1 avocado", "2 tomatoes"], veg: ["60g spinach"], grains: ["2 slices wholemeal bread"], pantry: ["15g pumpkin seeds", "15g hemp seeds", "1 lemon"] }
    },
    {
        name: "Berry, Mango & Apricot Overnight Oats",
        ingredients: [
            "80g rolled oats (3.4mg iron)",
            "150ml natural yoghurt (no additives)",
            "Handful of fresh raspberries",
            "1/2 fresh mango, diced",
            "4 dried apricots, chopped (1.5mg iron)",
            "1 tbsp chia seeds (1.2mg iron)",
            "1 tbsp blackstrap molasses (3.6mg iron)"
        ],
        fruitVeg: ["Raspberries", "Mango"],
        prep: "Mix oats, yoghurt, chia seeds, and molasses the night before. Top with raspberries, mango, and chopped apricots in the morning.",
        macros: { carbs: 66, protein: 16, fat: 12, fibre: 13, iron: 9.7 },
        shopping: { fruit: ["80g raspberries", "1 mango"], grains: ["80g rolled oats"], dairy: ["150ml natural yoghurt"], pantry: ["30g dried apricots", "10g chia seeds", "15ml blackstrap molasses"] }
    },
    {
        name: "Sweet Potato, Spinach, Tomato & Egg Scramble",
        ingredients: [
            "1 medium sweet potato, cubed and roasted",
            "2 free-range eggs, scrambled (1.2mg iron)",
            "Large handful of fresh spinach (1.6mg iron)",
            "1 fresh tomato, chopped",
            "1 slice wholemeal bread (0.9mg iron)",
            "1 tbsp pumpkin seeds (2.5mg iron)",
            "Drizzle of olive oil"
        ],
        fruitVeg: ["Sweet Potato", "Spinach", "Tomatoes"],
        prep: "Roast sweet potato (or microwave 5 min), scramble eggs with spinach and tomato, serve on toast with pumpkin seeds.",
        macros: { carbs: 58, protein: 22, fat: 16, fibre: 11, iron: 6.2 },
        shopping: { veg: ["1 sweet potato", "60g spinach", "1 tomato"], grains: ["1 slice wholemeal bread"], dairy: ["2 free-range eggs"], pantry: ["15g pumpkin seeds", "10ml olive oil"] }
    },
    {
        name: "Apple, Banana & Apricot Porridge",
        ingredients: [
            "80g rolled oats (3.4mg iron)",
            "1 apple, grated",
            "1 sliced banana",
            "4 dried apricots, chopped (1.5mg iron)",
            "1 tbsp blackstrap molasses (3.6mg iron)",
            "1 tbsp pumpkin seeds (2.5mg iron)",
            "200ml whole milk or water"
        ],
        fruitVeg: ["Apple", "Banana"],
        prep: "Cook oats with milk, stir in grated apple and molasses. Top with sliced banana, chopped apricots, and pumpkin seeds.",
        macros: { carbs: 72, protein: 14, fat: 10, fibre: 12, iron: 11.0 },
        shopping: { fruit: ["1 apple", "1 banana"], grains: ["80g rolled oats"], dairy: ["200ml whole milk"], pantry: ["30g dried apricots", "15ml blackstrap molasses", "15g pumpkin seeds"] }
    },
    {
        name: "Tropical Spinach Smoothie Bowl",
        ingredients: [
            "1 frozen banana",
            "1/2 fresh mango",
            "Handful of fresh pineapple chunks",
            "1 fresh kiwi, sliced (topping)",
            "Large handful of fresh spinach (1.6mg iron)",
            "100ml coconut milk (no emulsifiers - check label)",
            "2 tbsp hemp seeds (4.0mg iron)"
        ],
        fruitVeg: ["Banana", "Mango", "Pineapple", "Kiwi", "Spinach"],
        prep: "Blend banana, mango, pineapple, spinach, and coconut milk until thick. Pour into bowl, top with sliced kiwi and hemp seeds.",
        macros: { carbs: 66, protein: 12, fat: 16, fibre: 10, iron: 5.6 },
        shopping: { fruit: ["1 banana", "1 mango", "100g pineapple", "1 kiwi"], veg: ["60g spinach"], pantry: ["100ml coconut milk", "20g hemp seeds"] }
    },
    {
        name: "Wholemeal Pancakes with Berries & Banana",
        ingredients: [
            "100g wholemeal flour (3.0mg iron)",
            "1 free-range egg (0.6mg iron)",
            "150ml whole milk",
            "1 sliced banana",
            "Handful of fresh strawberries, sliced",
            "Handful of fresh blueberries",
            "20g dark chocolate 85%+, grated (2.3mg iron)"
        ],
        fruitVeg: ["Banana", "Strawberries", "Blueberries"],
        prep: "Mix flour, egg, and milk into batter. Cook small pancakes. Top with banana, strawberries, blueberries, and grated dark chocolate. Vitamin C in berries boosts iron absorption.",
        macros: { carbs: 70, protein: 18, fat: 12, fibre: 10, iron: 5.9 },
        shopping: { fruit: ["1 banana", "80g strawberries", "80g blueberries"], grains: ["100g wholemeal flour"], dairy: ["1 free-range egg", "150ml whole milk"], pantry: ["20g dark chocolate 85%+"] }
    }
];

const morningSnacks = [
    {
        name: "Apple, Celery & Pumpkin Seed Butter",
        ingredients: [
            "1 large apple, sliced",
            "2 celery sticks, cut into batons",
            "1 tbsp pumpkin seed butter (2.5mg iron)",
            "Sprinkle of cinnamon"
        ],
        fruitVeg: ["Apple", "Celery"],
        prep: "Slice apple and celery, dip in pumpkin seed butter. Vitamin C in apple helps absorb the iron.",
        macros: { carbs: 30, protein: 5, fat: 10, fibre: 6, iron: 2.5 },
        shopping: { fruit: ["1 apple"], veg: ["2 celery sticks"], pantry: ["15g pumpkin seed butter", "5g ground cinnamon"] }
    },
    {
        name: "Carrot, Cucumber & Pepper with Lentil Hummus",
        ingredients: [
            "2 carrots, cut into sticks",
            "1/2 cucumber, cut into sticks",
            "1/2 red pepper, sliced",
            "3 tbsp lentil hummus (chickpeas, red lentils, tahini, lemon, garlic) (3.2mg iron)"
        ],
        fruitVeg: ["Carrots", "Cucumber", "Red Pepper"],
        prep: "Cut veg into sticks and serve with iron-rich lentil hummus. Vitamin C in pepper and lemon boosts iron absorption.",
        macros: { carbs: 26, protein: 8, fat: 8, fibre: 8, iron: 3.2 },
        shopping: { veg: ["2 carrots", "1 cucumber", "1 red pepper"], pantry: ["100g chickpeas", "50g red lentils", "15g tahini", "1 lemon", "1 garlic bulb"] }
    },
    {
        name: "Banana, Oat & Apricot Energy Bites",
        ingredients: [
            "1 ripe banana, mashed",
            "4 tbsp rolled oats (1.7mg iron)",
            "1 tbsp natural peanut butter",
            "4 dried apricots, finely chopped (1.5mg iron)",
            "1 tbsp cacao powder (1.6mg iron)"
        ],
        fruitVeg: ["Banana"],
        prep: "Mix all ingredients including cacao powder, roll into balls, refrigerate for 30 min.",
        macros: { carbs: 38, protein: 8, fat: 9, fibre: 5, iron: 4.8 },
        shopping: { fruit: ["1 banana"], grains: ["40g rolled oats"], pantry: ["15g peanut butter", "30g dried apricots", "10g raw cacao powder"] }
    },
    {
        name: "Orange, Kiwi, Dates & Nuts",
        ingredients: [
            "1 fresh orange, peeled",
            "1 fresh kiwi, sliced",
            "3 medjool dates (0.9mg iron)",
            "Small handful of cashews and almonds (1.8mg iron)"
        ],
        fruitVeg: ["Oranges", "Kiwi"],
        prep: "Peel and segment orange, slice kiwi, enjoy with dates and nuts. Vitamin C in the fruit boosts iron absorption.",
        macros: { carbs: 44, protein: 5, fat: 10, fibre: 7, iron: 2.7 },
        shopping: { fruit: ["1 orange", "1 kiwi"], pantry: ["3 medjool dates", "15g cashews", "15g almonds"] }
    },
    {
        name: "Grapes, Satsuma & Dark Chocolate Oatcakes",
        ingredients: [
            "Large handful of red or green grapes",
            "1 satsuma, peeled",
            "2 plain oatcakes (check: no preservatives, 1.2mg iron)",
            "20g dark chocolate 85%+ (2.3mg iron)"
        ],
        fruitVeg: ["Grapes", "Satsuma"],
        prep: "Snap dark chocolate onto oatcakes, eat alongside grapes and satsuma segments.",
        macros: { carbs: 38, protein: 4, fat: 9, fibre: 4, iron: 3.5 },
        shopping: { fruit: ["100g grapes", "1 satsuma"], grains: ["2 oatcakes"], pantry: ["20g dark chocolate 85%+"] }
    },
    {
        name: "Pear, Plum & Pumpkin Seeds",
        ingredients: [
            "1 ripe pear, sliced",
            "1 fresh plum, sliced",
            "Small handful of walnuts (0.8mg iron)",
            "1 tbsp pumpkin seeds (2.5mg iron)",
            "Drizzle of honey"
        ],
        fruitVeg: ["Pear", "Plum"],
        prep: "Slice pear and plum, eat with walnuts, pumpkin seeds, and a drizzle of honey.",
        macros: { carbs: 36, protein: 5, fat: 12, fibre: 6, iron: 3.3 },
        shopping: { fruit: ["1 pear", "1 plum"], pantry: ["15g walnuts", "15g pumpkin seeds", "10g raw honey"] }
    },
    {
        name: "Melon, Berries & Cottage Cheese",
        ingredients: [
            "2 thick slices of cantaloupe melon",
            "Handful of fresh blueberries",
            "3 tbsp natural cottage cheese",
            "1 tbsp hemp seeds (2.0mg iron)",
            "1 tbsp sunflower seeds (1.1mg iron)"
        ],
        fruitVeg: ["Melon", "Blueberries"],
        prep: "Slice melon, add blueberries, top with cottage cheese, hemp seeds, and sunflower seeds.",
        macros: { carbs: 28, protein: 10, fat: 8, fibre: 4, iron: 3.1 },
        shopping: { fruit: ["200g cantaloupe melon", "80g blueberries"], dairy: ["45g cottage cheese"], pantry: ["10g hemp seeds", "10g sunflower seeds"] }
    }
];

const afternoonSnacks = [
    {
        name: "Mango, Kiwi & Pumpkin Seed Yoghurt Pot",
        ingredients: [
            "1/2 fresh mango, diced",
            "1 fresh kiwi, sliced",
            "120g natural yoghurt (no additives)",
            "1 tbsp pumpkin seeds (2.5mg iron)",
            "1 tbsp rolled oats",
            "Drizzle of blackstrap molasses (1.8mg iron)"
        ],
        fruitVeg: ["Mango", "Kiwi"],
        prep: "Layer yoghurt, mango, kiwi, oats, and pumpkin seeds in a pot. Drizzle with molasses.",
        macros: { carbs: 38, protein: 10, fat: 8, fibre: 5, iron: 4.3 },
        shopping: { fruit: ["1 mango", "1 kiwi"], grains: ["15g rolled oats"], dairy: ["120g natural yoghurt"], pantry: ["15g pumpkin seeds", "15ml blackstrap molasses"] }
    },
    {
        name: "Spinach, Pepper & Carrot Pitta with Lentil Hummus",
        ingredients: [
            "1 wholemeal pitta bread (1.4mg iron)",
            "1 red pepper, sliced into strips",
            "1 carrot, grated",
            "2 tbsp lentil hummus (2.1mg iron)",
            "Large handful of fresh spinach leaves (1.6mg iron)"
        ],
        fruitVeg: ["Red Pepper", "Carrots", "Spinach"],
        prep: "Warm pitta, fill with lentil hummus, spinach, grated carrot, and pepper strips. Vitamin C in pepper boosts iron absorption.",
        macros: { carbs: 42, protein: 10, fat: 7, fibre: 8, iron: 5.1 },
        shopping: { veg: ["1 red pepper", "1 carrot", "60g spinach"], grains: ["1 wholemeal pitta"], pantry: ["50g red lentils", "100g chickpeas", "15g tahini"] }
    },
    {
        name: "Dark Chocolate Banana & Strawberry Bites",
        ingredients: [
            "1 banana, sliced into rounds",
            "4 fresh strawberries, halved",
            "40g dark chocolate 85%+ (no emulsifiers - check label, 4.6mg iron)",
            "1 tbsp hemp seeds (2.0mg iron)",
            "Pinch of sea salt"
        ],
        fruitVeg: ["Banana", "Strawberries"],
        prep: "Melt chocolate, dip banana slices and strawberry halves halfway, sprinkle hemp seeds, freeze on baking paper for 20 min.",
        macros: { carbs: 38, protein: 5, fat: 12, fibre: 6, iron: 6.6 },
        shopping: { fruit: ["1 banana", "80g strawberries"], pantry: ["40g dark chocolate 85%+", "10g hemp seeds"] }
    },
    {
        name: "Pear, Apple & Walnut Rice Cakes",
        ingredients: [
            "1 ripe pear, sliced",
            "1/2 apple, sliced",
            "2 plain brown rice cakes",
            "1 tbsp natural almond butter (0.6mg iron)",
            "1 tbsp pumpkin seeds (2.5mg iron)",
            "Small handful of walnuts (0.8mg iron)"
        ],
        fruitVeg: ["Pear", "Apple"],
        prep: "Spread almond butter on rice cakes, top with pear and apple slices, walnuts, and pumpkin seeds.",
        macros: { carbs: 42, protein: 7, fat: 14, fibre: 7, iron: 3.9 },
        shopping: { fruit: ["1 pear", "1 apple"], grains: ["2 brown rice cakes"], pantry: ["15g almond butter", "15g pumpkin seeds", "15g walnuts"] }
    },
    {
        name: "Celery, Carrot Sticks, Raisins & Tahini",
        ingredients: [
            "3 celery sticks",
            "1 carrot, cut into sticks",
            "2 tbsp tahini (2.7mg iron)",
            "1 tbsp raisins (0.5mg iron)",
            "Squeeze of lemon juice"
        ],
        fruitVeg: ["Celery", "Carrots"],
        prep: "Dip celery and carrot sticks in tahini, top with raisins. Lemon juice boosts iron absorption.",
        macros: { carbs: 26, protein: 6, fat: 12, fibre: 5, iron: 3.2 },
        shopping: { veg: ["3 celery sticks", "1 carrot"], pantry: ["30g tahini", "15g raisins", "1 lemon"] }
    },
    {
        name: "Rice Cakes with Banana, Berries & Cacao",
        ingredients: [
            "2 plain brown rice cakes",
            "1 banana, sliced",
            "Handful of fresh raspberries",
            "1 tbsp pumpkin seeds (2.5mg iron)",
            "1 tsp raw cacao powder (0.8mg iron)",
            "Drizzle of raw honey"
        ],
        fruitVeg: ["Banana", "Raspberries"],
        prep: "Top rice cakes with banana slices and raspberries, sprinkle pumpkin seeds and cacao powder, drizzle honey.",
        macros: { carbs: 44, protein: 5, fat: 6, fibre: 5, iron: 3.3 },
        shopping: { fruit: ["1 banana", "80g raspberries"], grains: ["2 brown rice cakes"], pantry: ["15g pumpkin seeds", "5g raw cacao powder", "10g raw honey"] }
    },
    {
        name: "Spinach, Cucumber & Tomato Oatcakes with Tahini",
        ingredients: [
            "1/2 cucumber, sliced",
            "Handful of fresh spinach (1.6mg iron)",
            "4 cherry tomatoes, halved",
            "2 tbsp tahini (2.7mg iron)",
            "2 plain oatcakes (1.2mg iron)"
        ],
        fruitVeg: ["Cucumber", "Spinach", "Tomatoes"],
        prep: "Spread tahini on oatcakes, layer with spinach, cucumber, and cherry tomatoes.",
        macros: { carbs: 28, protein: 8, fat: 10, fibre: 5, iron: 5.5 },
        shopping: { veg: ["1 cucumber", "60g spinach", "100g cherry tomatoes"], grains: ["2 oatcakes"], pantry: ["30g tahini"] }
    }
];

var DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var SHORT_DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

var weekPlan = [];
var activeDay = 0;

function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = a[i];
        a[i] = a[j];
        a[j] = temp;
    }
    return a;
}

function pickForWeek(arr) {
    return shuffle(arr).slice(0, 7);
}

function generateWeek() {
    var bfPicks = pickForWeek(breakfasts);
    var msPicks = pickForWeek(morningSnacks);
    var asPicks = pickForWeek(afternoonSnacks);

    weekPlan = [];
    for (var i = 0; i < 7; i++) {
        weekPlan.push({
            day: DAYS[i],
            breakfast: bfPicks[i],
            morningSnack: msPicks[i],
            afternoonSnack: asPicks[i]
        });
    }

    activeDay = 0;
    renderTabs();
    renderDay(0);
    renderShoppingList();
    document.getElementById('week-plan').className = '';
    document.getElementById('generate-btn').textContent = 'Regenerate Whole Week';
}

function pickExcluding(allMeals, usedMeals) {
    var available = [];
    for (var i = 0; i < allMeals.length; i++) {
        var taken = false;
        for (var j = 0; j < usedMeals.length; j++) {
            if (allMeals[i] === usedMeals[j]) { taken = true; break; }
        }
        if (!taken) available.push(allMeals[i]);
    }
    if (available.length === 0) available = allMeals;
    return available[Math.floor(Math.random() * available.length)];
}

function regenerateDay(index) {
    var usedBf = [], usedMs = [], usedAs = [];
    for (var i = 0; i < weekPlan.length; i++) {
        if (i === index) continue;
        usedBf.push(weekPlan[i].breakfast);
        usedMs.push(weekPlan[i].morningSnack);
        usedAs.push(weekPlan[i].afternoonSnack);
    }
    weekPlan[index].breakfast = pickExcluding(breakfasts, usedBf);
    weekPlan[index].morningSnack = pickExcluding(morningSnacks, usedMs);
    weekPlan[index].afternoonSnack = pickExcluding(afternoonSnacks, usedAs);
    renderDay(index);
    renderShoppingList();
}

function renderTabs() {
    var tabsEl = document.getElementById('day-tabs');
    var html = '';
    for (var i = 0; i < SHORT_DAYS.length; i++) {
        var cls = (i === activeDay) ? 'day-tab active' : 'day-tab';
        html += '<button class="' + cls + '" data-day-index="' + i + '">' +
            SHORT_DAYS[i] + '<span class="tab-day">' + DAYS[i] + '</span></button>';
    }
    tabsEl.innerHTML = html;
}

function selectDay(index) {
    activeDay = index;
    renderTabs();
    renderDay(index);
}

function renderMealCard(icon, title, meal) {
    var ingredientItems = '';
    for (var i = 0; i < meal.ingredients.length; i++) {
        ingredientItems += '<li>' + meal.ingredients[i] + '</li>';
    }
    var fruitTags = '';
    for (var j = 0; j < meal.fruitVeg.length; j++) {
        fruitTags += '<span class="fruit-veg-tag">' + meal.fruitVeg[j] + ' - 1 of 7-a-day</span> ';
    }

    return '<section class="meal-card">' +
        '<div class="meal-header">' +
        '<span class="meal-icon">' + icon + '</span>' +
        '<h2>' + title + '</h2>' +
        '</div>' +
        '<div class="meal-content">' +
        '<h3>' + meal.name + '</h3>' +
        fruitTags +
        '<ul class="ingredients">' + ingredientItems + '</ul>' +
        '<p class="prep-note">' + meal.prep + '</p>' +
        '</div></section>';
}

function renderDay(index) {
    var plan = weekPlan[index];
    var contentEl = document.getElementById('day-content');

    var allFV = plan.breakfast.fruitVeg.concat(plan.morningSnack.fruitVeg, plan.afternoonSnack.fruitVeg);
    var seen = {};
    var uniqueFV = [];
    for (var i = 0; i < allFV.length; i++) {
        if (!seen[allFV[i]]) {
            seen[allFV[i]] = true;
            uniqueFV.push(allFV[i]);
        }
    }
    var count = uniqueFV.length;

    var meals = [plan.breakfast, plan.morningSnack, plan.afternoonSnack];
    var totalCarbs = 0, totalProtein = 0, totalFat = 0, totalFibre = 0, totalIron = 0;
    for (var m = 0; m < meals.length; m++) {
        totalCarbs += meals[m].macros.carbs;
        totalProtein += meals[m].macros.protein;
        totalFat += meals[m].macros.fat;
        totalFibre += meals[m].macros.fibre;
        totalIron += meals[m].macros.iron;
    }
    var total = totalCarbs + totalProtein + totalFat + totalFibre;

    var carbPct = Math.round((totalCarbs / total) * 100);
    var proteinPct = Math.round((totalProtein / total) * 100);
    var fatPct = Math.round((totalFat / total) * 100);
    var fibrePct = Math.round((totalFibre / total) * 100);

    var fvItems = '';
    for (var f = 0; f < uniqueFV.length; f++) {
        fvItems += '<span class="fad-item">' + uniqueFV[f] + '</span>';
    }

    var countMsg = count >= 7
        ? ' All 7 reached!'
        : ' Add ' + (7 - count) + ' more with lunch &amp; dinner.';

    contentEl.innerHTML =
        '<button class="refresh-day-btn" data-shuffle-day="' + index + '">&#8635; Shuffle ' + plan.day + '\'s meals</button>' +
        renderMealCard('&#9728;', 'Breakfast', plan.breakfast) +
        renderMealCard('&#127822;', 'Morning Snack', plan.morningSnack) +
        renderMealCard('&#127827;', 'Afternoon Snack', plan.afternoonSnack) +
        '<section class="five-a-day-tracker">' +
        '<h2>' + plan.day + '\'s 7-a-Day</h2>' +
        '<div class="five-a-day-items">' + fvItems + '</div>' +
        '<p class="count-label"><strong>' + count + '</strong> of your 7-a-day from breakfast &amp; snacks!' + countMsg + '</p>' +
        '</section>' +
        '<section class="nutrition-summary">' +
        '<h2>Nutrition Balance</h2>' +
        '<div class="macro-bars">' +
        '<div class="macro-row"><span class="macro-label">Carbs (energy)</span><div class="bar-track"><div class="bar carb-bar" style="width:' + carbPct + '%"></div></div><span class="macro-pct">' + carbPct + '%</span></div>' +
        '<div class="macro-row"><span class="macro-label">Protein</span><div class="bar-track"><div class="bar protein-bar" style="width:' + proteinPct + '%"></div></div><span class="macro-pct">' + proteinPct + '%</span></div>' +
        '<div class="macro-row"><span class="macro-label">Healthy Fats</span><div class="bar-track"><div class="bar fat-bar" style="width:' + fatPct + '%"></div></div><span class="macro-pct">' + fatPct + '%</span></div>' +
        '<div class="macro-row"><span class="macro-label">Fibre</span><div class="bar-track"><div class="bar fibre-bar" style="width:' + fibrePct + '%"></div></div><span class="macro-pct">' + fibrePct + '%</span></div>' +
        '</div>' +
        '<div class="iron-tracker">' +
        '<h3>Iron Intake</h3>' +
        '<div class="iron-row"><div class="bar-track"><div class="bar iron-bar" style="width:' + Math.min(Math.round((totalIron / 18) * 100), 100) + '%"></div></div>' +
        '<span class="iron-amount">' + totalIron.toFixed(1) + 'mg / 18mg daily</span></div>' +
        '<p class="iron-note">From breakfast &amp; snacks alone. Runners need 18mg/day. Vitamin C in fruit boosts iron absorption.</p>' +
        '</div></section>';
}

function renderShoppingList() {
    var categories = { fruit: {}, veg: {}, grains: {}, dairy: {}, pantry: {} };
    var categoryLabels = {
        fruit: "Fruit",
        veg: "Vegetables",
        grains: "Grains & Bread",
        dairy: "Dairy & Eggs",
        pantry: "Pantry Staples"
    };

    for (var d = 0; d < weekPlan.length; d++) {
        var dayMeals = [weekPlan[d].breakfast, weekPlan[d].morningSnack, weekPlan[d].afternoonSnack];
        for (var m = 0; m < dayMeals.length; m++) {
            var meal = dayMeals[m];
            if (!meal.shopping) continue;
            var cats = Object.keys(meal.shopping);
            for (var c = 0; c < cats.length; c++) {
                var cat = cats[c];
                if (!categories[cat]) categories[cat] = {};
                var items = meal.shopping[cat];
                for (var it = 0; it < items.length; it++) {
                    var item = items[it];
                    // Extract quantity, unit, and base name
                    // Matches: "80g rolled oats", "200ml whole milk", "2 carrots", "1 lemon"
                    var gMatch = item.match(/^(\d+)(g|ml)\s+(.+)$/);
                    var numMatch = !gMatch ? item.match(/^(\d+)\s+(.+)$/) : null;

                    var qty, unit, baseName;
                    if (gMatch) {
                        qty = parseInt(gMatch[1], 10);
                        unit = gMatch[2];
                        baseName = gMatch[3];
                    } else if (numMatch) {
                        qty = parseInt(numMatch[1], 10);
                        unit = '';
                        baseName = numMatch[2];
                    } else {
                        qty = 0;
                        unit = '';
                        baseName = item;
                    }
                    var key = baseName.toLowerCase().replace(/\s+/g, ' ').trim();

                    if (!categories[cat][key]) {
                        categories[cat][key] = { baseName: baseName, totalQty: qty, unit: unit, times: 1 };
                    } else {
                        categories[cat][key].totalQty += qty;
                        categories[cat][key].times++;
                    }
                }
            }
        }
    }

    var listEl = document.getElementById('shopping-list');
    var html = '';
    var catKeys = Object.keys(categories);

    for (var k = 0; k < catKeys.length; k++) {
        var catKey = catKeys[k];
        var catItems = Object.values(categories[catKey]);
        if (catItems.length === 0) continue;
        html += '<div class="shopping-category"><h3>' + categoryLabels[catKey] + '</h3><ul>';
        for (var q = 0; q < catItems.length; q++) {
            var entry = catItems[q];
            var label;
            if (entry.unit) {
                // Has g or ml unit - show total e.g. "560g rolled oats"
                label = entry.totalQty + entry.unit + ' ' + entry.baseName;
            } else if (entry.totalQty > 0) {
                // Has a numeric count - show total e.g. "7 bananas"
                label = entry.totalQty + ' ' + pluralise(entry.baseName, entry.totalQty);
            } else {
                label = entry.baseName;
            }
            html += '<li><label class="shop-item"><input type="checkbox"><span>' + label + '</span></label></li>';
        }
        html += '</ul></div>';
    }

    listEl.innerHTML = html;
    updateShoppingProgress();
}

function pluralise(name, qty) {
    if (qty <= 1) return name;
    var lower = name.toLowerCase();
    // Already plural
    if (lower.match(/(s|berries|cherries|oats|seeds|nuts|dates|apricots|raisins|lentils|flakes)$/)) return name;
    // Special cases
    if (lower.match(/tomato$/)) return name.replace(/tomato$/i, 'tomatoes');
    if (lower.match(/mango$/)) return name.replace(/mango$/i, 'mangoes');
    if (lower.match(/potato$/)) return name.replace(/potato$/i, 'potatoes');
    if (lower.match(/peach$/)) return name.replace(/peach$/i, 'peaches');
    // Default: add s
    return name + 's';
}

function updateShoppingProgress() {
    var all = document.querySelectorAll('#shopping-list input[type="checkbox"]');
    var checked = document.querySelectorAll('#shopping-list input[type="checkbox"]:checked');
    var el = document.getElementById('shopping-progress');
    if (all.length === 0) {
        el.textContent = '';
        return;
    }
    el.textContent = checked.length + '/' + all.length;
    if (checked.length === all.length) {
        el.textContent = checked.length + '/' + all.length + ' - All done!';
    }
}

function toggleShopping() {
    var list = document.getElementById('shopping-list');
    var arrow = document.getElementById('shopping-toggle');
    if (list.className.indexOf('open') >= 0) {
        list.className = 'shopping-list';
        arrow.className = 'toggle-arrow';
    } else {
        list.className = 'shopping-list open';
        arrow.className = 'toggle-arrow open';
    }
}

// Attach all event listeners once the DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Generate / regenerate week button
    document.getElementById('generate-btn').addEventListener('click', function() {
        generateWeek();
    });

    // Shopping list toggle
    document.getElementById('shopping-header').addEventListener('click', function() {
        toggleShopping();
    });

    // Shopping list checkbox toggling + progress counter
    document.getElementById('shopping-list').addEventListener('change', function(e) {
        if (e.target && e.target.type === 'checkbox') {
            var label = e.target.parentElement;
            if (e.target.checked) {
                label.className = 'shop-item checked';
            } else {
                label.className = 'shop-item';
            }
            updateShoppingProgress();
        }
    });

    // Event delegation for dynamically created buttons (day tabs + shuffle)
    document.addEventListener('click', function(e) {
        var target = e.target;

        // Check for day tab clicks (might click the span inside the button)
        var tabBtn = target.closest ? target.closest('[data-day-index]') : null;
        if (!tabBtn && target.getAttribute && target.getAttribute('data-day-index') !== null) {
            tabBtn = target;
        }
        if (!tabBtn && target.parentElement && target.parentElement.getAttribute && target.parentElement.getAttribute('data-day-index') !== null) {
            tabBtn = target.parentElement;
        }
        if (tabBtn) {
            var dayIndex = parseInt(tabBtn.getAttribute('data-day-index'), 10);
            selectDay(dayIndex);
            return;
        }

        // Check for shuffle day button
        var shuffleBtn = target.closest ? target.closest('[data-shuffle-day]') : null;
        if (!shuffleBtn && target.getAttribute && target.getAttribute('data-shuffle-day') !== null) {
            shuffleBtn = target;
        }
        if (shuffleBtn) {
            var shuffleIndex = parseInt(shuffleBtn.getAttribute('data-shuffle-day'), 10);
            regenerateDay(shuffleIndex);
            return;
        }
    });
});
