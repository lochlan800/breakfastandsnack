// All meals use whole, unprocessed ingredients only.
// No preservatives, no emulsifiers, no additives.
// Carb-focused for sustained energy with balanced protein, fats, and fibre.

const breakfasts = [
    {
        name: "Banana & Oat Energy Bowl",
        ingredients: [
            "80g rolled oats",
            "1 sliced banana",
            "Handful of fresh blueberries",
            "1 tbsp natural peanut butter (no additives)",
            "Drizzle of raw honey",
            "Splash of whole milk or oat milk (check: no emulsifiers)"
        ],
        fruitVeg: ["Banana", "Blueberries"],
        prep: "Cook oats with milk, top with banana, blueberries, peanut butter, and honey.",
        macros: { carbs: 60, protein: 14, fat: 16, fibre: 10 },
        shopping: { fruit: ["1 banana", "Fresh blueberries"], grains: ["Rolled oats"], dairy: ["Whole milk or oat milk"], pantry: ["Natural peanut butter", "Raw honey"] }
    },
    {
        name: "Wholemeal Toast with Avocado & Tomatoes",
        ingredients: [
            "2 slices wholemeal bread (no preservatives - bakery fresh)",
            "1/2 ripe avocado, mashed",
            "2 fresh tomatoes, sliced",
            "Squeeze of lemon juice",
            "Pinch of sea salt & black pepper",
            "1 tbsp mixed seeds"
        ],
        fruitVeg: ["Avocado", "Tomatoes"],
        prep: "Toast bread, spread avocado, layer tomatoes, season and sprinkle seeds.",
        macros: { carbs: 52, protein: 12, fat: 18, fibre: 12 },
        shopping: { fruit: ["1 avocado", "2 tomatoes"], grains: ["Wholemeal bread (bakery fresh)"], pantry: ["Mixed seeds", "Lemon juice", "Sea salt & black pepper"] }
    },
    {
        name: "Berry & Mango Overnight Oats",
        ingredients: [
            "80g rolled oats",
            "150ml natural yoghurt (no additives)",
            "Handful of fresh raspberries",
            "1/2 fresh mango, diced",
            "1 tbsp chia seeds",
            "Splash of whole milk"
        ],
        fruitVeg: ["Raspberries", "Mango"],
        prep: "Mix oats, yoghurt, milk, and chia seeds the night before. Top with fruit in the morning.",
        macros: { carbs: 58, protein: 16, fat: 12, fibre: 11 },
        shopping: { fruit: ["Fresh raspberries", "1 mango"], grains: ["Rolled oats"], dairy: ["Natural yoghurt", "Whole milk"], pantry: ["Chia seeds"] }
    },
    {
        name: "Sweet Potato & Spinach Scramble",
        ingredients: [
            "1 medium sweet potato, cubed and roasted",
            "2 free-range eggs, scrambled",
            "Large handful of fresh spinach",
            "1 slice wholemeal bread",
            "Drizzle of olive oil",
            "Pinch of smoked paprika"
        ],
        fruitVeg: ["Sweet Potato", "Spinach"],
        prep: "Roast sweet potato (or microwave 5 min), scramble eggs with spinach, serve on toast.",
        macros: { carbs: 55, protein: 20, fat: 15, fibre: 9 },
        shopping: { veg: ["1 sweet potato", "Fresh spinach"], grains: ["Wholemeal bread (bakery fresh)"], dairy: ["2 free-range eggs"], pantry: ["Olive oil", "Smoked paprika"] }
    },
    {
        name: "Apple & Cinnamon Porridge",
        ingredients: [
            "80g rolled oats",
            "1 apple, grated",
            "1 tsp ground cinnamon",
            "1 tbsp raisins",
            "Drizzle of pure maple syrup",
            "200ml whole milk or water"
        ],
        fruitVeg: ["Apple"],
        prep: "Cook oats with milk, stir in grated apple and cinnamon, top with raisins and maple syrup.",
        macros: { carbs: 65, protein: 12, fat: 8, fibre: 10 },
        shopping: { fruit: ["1 apple"], grains: ["Rolled oats"], dairy: ["Whole milk"], pantry: ["Ground cinnamon", "Raisins", "Pure maple syrup"] }
    },
    {
        name: "Tropical Smoothie Bowl",
        ingredients: [
            "1 frozen banana",
            "1/2 fresh mango",
            "Handful of fresh pineapple chunks",
            "100ml coconut milk (no emulsifiers - check label)",
            "2 tbsp rolled oats as topping",
            "1 tbsp desiccated coconut"
        ],
        fruitVeg: ["Banana", "Mango", "Pineapple"],
        prep: "Blend banana, mango, pineapple, and coconut milk until thick. Pour into bowl, top with oats and coconut.",
        macros: { carbs: 62, protein: 8, fat: 14, fibre: 8 },
        shopping: { fruit: ["1 banana", "1 mango", "Fresh pineapple"], grains: ["Rolled oats"], pantry: ["Coconut milk (no emulsifiers)", "Desiccated coconut"] }
    },
    {
        name: "Wholemeal Pancakes with Fresh Berries",
        ingredients: [
            "100g wholemeal flour",
            "1 free-range egg",
            "150ml whole milk",
            "Handful of fresh strawberries, sliced",
            "Handful of fresh blueberries",
            "Drizzle of raw honey"
        ],
        fruitVeg: ["Strawberries", "Blueberries"],
        prep: "Mix flour, egg, and milk into batter. Cook small pancakes in a dry non-stick pan. Top with berries and honey.",
        macros: { carbs: 64, protein: 16, fat: 10, fibre: 8 },
        shopping: { fruit: ["Fresh strawberries", "Fresh blueberries"], grains: ["Wholemeal flour"], dairy: ["1 free-range egg", "Whole milk"], pantry: ["Raw honey"] }
    }
];

const morningSnacks = [
    {
        name: "Apple Slices with Almond Butter",
        ingredients: [
            "1 large apple, sliced",
            "1 tbsp natural almond butter (100% almonds)",
            "Sprinkle of cinnamon"
        ],
        fruitVeg: ["Apple"],
        prep: "Slice apple and dip in almond butter.",
        macros: { carbs: 28, protein: 4, fat: 9, fibre: 5 },
        shopping: { fruit: ["1 apple"], pantry: ["Natural almond butter", "Ground cinnamon"] }
    },
    {
        name: "Carrot & Cucumber Sticks with Hummus",
        ingredients: [
            "2 carrots, cut into sticks",
            "1/2 cucumber, cut into sticks",
            "3 tbsp homemade hummus (chickpeas, tahini, lemon, garlic)"
        ],
        fruitVeg: ["Carrots", "Cucumber"],
        prep: "Cut veg into sticks and serve with hummus.",
        macros: { carbs: 22, protein: 6, fat: 8, fibre: 6 },
        shopping: { veg: ["2 carrots", "1 cucumber"], pantry: ["Chickpeas (tinned or dried)", "Tahini", "Lemon", "Garlic"] }
    },
    {
        name: "Banana & Oat Energy Bites",
        ingredients: [
            "1 ripe banana, mashed",
            "4 tbsp rolled oats",
            "1 tbsp natural peanut butter",
            "1 tbsp raisins"
        ],
        fruitVeg: ["Banana"],
        prep: "Mix all ingredients, roll into balls, refrigerate for 30 min.",
        macros: { carbs: 35, protein: 6, fat: 8, fibre: 4 },
        shopping: { fruit: ["1 banana"], grains: ["Rolled oats"], pantry: ["Natural peanut butter", "Raisins"] }
    },
    {
        name: "Fresh Orange & Mixed Nuts",
        ingredients: [
            "2 fresh oranges, peeled",
            "Small handful of raw unsalted mixed nuts (walnuts, almonds, cashews)"
        ],
        fruitVeg: ["Oranges"],
        prep: "Peel and segment oranges, enjoy with a handful of nuts.",
        macros: { carbs: 30, protein: 5, fat: 10, fibre: 5 },
        shopping: { fruit: ["2 oranges"], pantry: ["Raw unsalted mixed nuts"] }
    },
    {
        name: "Grapes & Oatcakes",
        ingredients: [
            "Large handful of red or green grapes",
            "2 plain oatcakes (check: no preservatives)",
            "Thin spread of natural cream cheese"
        ],
        fruitVeg: ["Grapes"],
        prep: "Spread cream cheese on oatcakes, eat alongside grapes.",
        macros: { carbs: 32, protein: 4, fat: 7, fibre: 3 },
        shopping: { fruit: ["Grapes"], grains: ["Plain oatcakes (no preservatives)"], dairy: ["Natural cream cheese"] }
    },
    {
        name: "Pear & Walnut Snack",
        ingredients: [
            "1 ripe pear, sliced",
            "Small handful of walnuts",
            "Drizzle of honey"
        ],
        fruitVeg: ["Pear"],
        prep: "Slice pear and eat with walnuts and a drizzle of honey.",
        macros: { carbs: 30, protein: 3, fat: 8, fibre: 5 },
        shopping: { fruit: ["1 pear"], pantry: ["Walnuts", "Raw honey"] }
    },
    {
        name: "Melon & Cottage Cheese",
        ingredients: [
            "2 thick slices of cantaloupe melon",
            "3 tbsp natural cottage cheese",
            "Sprinkle of sunflower seeds"
        ],
        fruitVeg: ["Melon"],
        prep: "Slice melon, top with cottage cheese and seeds.",
        macros: { carbs: 22, protein: 8, fat: 5, fibre: 2 },
        shopping: { fruit: ["1 cantaloupe melon"], dairy: ["Natural cottage cheese"], pantry: ["Sunflower seeds"] }
    }
];

const afternoonSnacks = [
    {
        name: "Mango & Yoghurt Pot",
        ingredients: [
            "1/2 fresh mango, diced",
            "120g natural yoghurt (no additives)",
            "1 tbsp rolled oats",
            "Drizzle of honey"
        ],
        fruitVeg: ["Mango"],
        prep: "Layer yoghurt, mango, and oats in a pot. Drizzle with honey.",
        macros: { carbs: 30, protein: 8, fat: 5, fibre: 3 },
        shopping: { fruit: ["1 mango"], grains: ["Rolled oats"], dairy: ["Natural yoghurt"], pantry: ["Raw honey"] }
    },
    {
        name: "Wholemeal Pitta with Pepper Strips",
        ingredients: [
            "1 wholemeal pitta bread",
            "1 red pepper, sliced into strips",
            "2 tbsp homemade hummus",
            "Handful of fresh spinach leaves"
        ],
        fruitVeg: ["Red Pepper", "Spinach"],
        prep: "Warm pitta, fill with hummus, spinach, and pepper strips.",
        macros: { carbs: 38, protein: 8, fat: 6, fibre: 6 },
        shopping: { veg: ["1 red pepper", "Fresh spinach"], grains: ["Wholemeal pitta bread"], pantry: ["Chickpeas (tinned or dried)", "Tahini"] }
    },
    {
        name: "Frozen Banana Bites with Dark Chocolate",
        ingredients: [
            "1 banana, sliced into rounds",
            "30g dark chocolate (85%+, no emulsifiers - check label)",
            "Pinch of sea salt"
        ],
        fruitVeg: ["Banana"],
        prep: "Melt chocolate, dip banana slices halfway, freeze on baking paper for 20 min.",
        macros: { carbs: 34, protein: 3, fat: 8, fibre: 4 },
        shopping: { fruit: ["1 banana"], pantry: ["Dark chocolate 85%+ (no emulsifiers)", "Sea salt"] }
    },
    {
        name: "Pear & Walnut Rice Cakes",
        ingredients: [
            "1 ripe pear, sliced",
            "2 plain brown rice cakes",
            "1 tbsp natural almond butter",
            "Small handful of walnuts"
        ],
        fruitVeg: ["Pear"],
        prep: "Spread almond butter on rice cakes, top with pear slices and walnuts.",
        macros: { carbs: 36, protein: 5, fat: 12, fibre: 5 },
        shopping: { fruit: ["1 pear"], grains: ["Brown rice cakes"], pantry: ["Natural almond butter", "Walnuts"] }
    },
    {
        name: "Celery, Raisins & Peanut Butter",
        ingredients: [
            "3 celery sticks",
            "1 tbsp natural peanut butter",
            "1 tbsp raisins"
        ],
        fruitVeg: ["Celery"],
        prep: "Fill celery sticks with peanut butter, top with raisins.",
        macros: { carbs: 20, protein: 5, fat: 9, fibre: 3 },
        shopping: { veg: ["Celery"], pantry: ["Natural peanut butter", "Raisins"] }
    },
    {
        name: "Rice Cakes with Banana & Honey",
        ingredients: [
            "2 plain brown rice cakes",
            "1 banana, sliced",
            "Drizzle of raw honey",
            "Sprinkle of cinnamon"
        ],
        fruitVeg: ["Banana"],
        prep: "Top rice cakes with banana slices, drizzle honey, and dust with cinnamon.",
        macros: { carbs: 38, protein: 3, fat: 2, fibre: 3 },
        shopping: { fruit: ["1 banana"], grains: ["Brown rice cakes"], pantry: ["Raw honey", "Ground cinnamon"] }
    },
    {
        name: "Cucumber & Tzatziki with Oatcakes",
        ingredients: [
            "1/2 cucumber, sliced",
            "3 tbsp homemade tzatziki (yoghurt, cucumber, garlic, dill)",
            "2 plain oatcakes"
        ],
        fruitVeg: ["Cucumber"],
        prep: "Slice cucumber, serve alongside oatcakes and fresh tzatziki.",
        macros: { carbs: 24, protein: 6, fat: 5, fibre: 3 },
        shopping: { veg: ["1 cucumber"], grains: ["Plain oatcakes (no preservatives)"], dairy: ["Natural yoghurt"], pantry: ["Garlic", "Fresh dill"] }
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
        fruitTags += '<span class="fruit-veg-tag">' + meal.fruitVeg[j] + ' - 1 of 5-a-day</span> ';
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
    var totalCarbs = 0, totalProtein = 0, totalFat = 0, totalFibre = 0;
    for (var m = 0; m < meals.length; m++) {
        totalCarbs += meals[m].macros.carbs;
        totalProtein += meals[m].macros.protein;
        totalFat += meals[m].macros.fat;
        totalFibre += meals[m].macros.fibre;
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

    var countMsg = count >= 5
        ? ' All 5 reached!'
        : ' Add ' + (5 - count) + ' more with lunch &amp; dinner.';

    contentEl.innerHTML =
        '<button class="refresh-day-btn" data-shuffle-day="' + index + '">&#8635; Shuffle ' + plan.day + '\'s meals</button>' +
        renderMealCard('&#9728;', 'Breakfast', plan.breakfast) +
        renderMealCard('&#127822;', 'Morning Snack', plan.morningSnack) +
        renderMealCard('&#127827;', 'Afternoon Snack', plan.afternoonSnack) +
        '<section class="five-a-day-tracker">' +
        '<h2>' + plan.day + '\'s 5-a-Day</h2>' +
        '<div class="five-a-day-items">' + fvItems + '</div>' +
        '<p class="count-label"><strong>' + count + '</strong> of your 5-a-day from breakfast &amp; snacks!' + countMsg + '</p>' +
        '</section>' +
        '<section class="nutrition-summary">' +
        '<h2>Nutrition Balance</h2>' +
        '<div class="macro-bars">' +
        '<div class="macro-row"><span class="macro-label">Carbs (energy)</span><div class="bar-track"><div class="bar carb-bar" style="width:' + carbPct + '%"></div></div><span class="macro-pct">' + carbPct + '%</span></div>' +
        '<div class="macro-row"><span class="macro-label">Protein</span><div class="bar-track"><div class="bar protein-bar" style="width:' + proteinPct + '%"></div></div><span class="macro-pct">' + proteinPct + '%</span></div>' +
        '<div class="macro-row"><span class="macro-label">Healthy Fats</span><div class="bar-track"><div class="bar fat-bar" style="width:' + fatPct + '%"></div></div><span class="macro-pct">' + fatPct + '%</span></div>' +
        '<div class="macro-row"><span class="macro-label">Fibre</span><div class="bar-track"><div class="bar fibre-bar" style="width:' + fibrePct + '%"></div></div><span class="macro-pct">' + fibrePct + '%</span></div>' +
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
                    var key = item.replace(/^\d+\s*/, '').toLowerCase();
                    if (!categories[cat][key]) {
                        categories[cat][key] = { display: item, count: 1 };
                    } else {
                        categories[cat][key].count++;
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
            var qty = catItems[q].count > 1 ? ' (x' + catItems[q].count + ' across the week)' : '';
            html += '<li>' + catItems[q].display + qty + '</li>';
        }
        html += '</ul></div>';
    }

    listEl.innerHTML = html;
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
