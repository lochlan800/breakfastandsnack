// All meals use whole, unprocessed ingredients only.
// No preservatives, no emulsifiers, no additives.
// Carb-focused for sustained energy with balanced protein, fats, and fibre.

const breakfasts = [
    {
        name: "Banana & Oat Energy Bowl",
        ingredients: [
            "80g rolled oats (complex carbs)",
            "1 sliced banana",
            "Handful of fresh blueberries",
            "1 tbsp natural peanut butter (no additives)",
            "Drizzle of raw honey",
            "Splash of whole milk or oat milk (check: no emulsifiers)"
        ],
        fruitVeg: ["Banana", "Blueberries"],
        prep: "Cook oats with milk, top with banana, blueberries, peanut butter, and honey.",
        macros: { carbs: 60, protein: 14, fat: 16, fibre: 10 }
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
        macros: { carbs: 52, protein: 12, fat: 18, fibre: 12 }
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
        macros: { carbs: 58, protein: 16, fat: 12, fibre: 11 }
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
        macros: { carbs: 55, protein: 20, fat: 15, fibre: 9 }
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
        macros: { carbs: 65, protein: 12, fat: 8, fibre: 10 }
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
        macros: { carbs: 62, protein: 8, fat: 14, fibre: 8 }
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
        macros: { carbs: 64, protein: 16, fat: 10, fibre: 8 }
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
        macros: { carbs: 28, protein: 4, fat: 9, fibre: 5 }
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
        macros: { carbs: 22, protein: 6, fat: 8, fibre: 6 }
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
        macros: { carbs: 35, protein: 6, fat: 8, fibre: 4 }
    },
    {
        name: "Fresh Orange & Mixed Nuts",
        ingredients: [
            "2 fresh oranges, peeled",
            "Small handful of raw unsalted mixed nuts (walnuts, almonds, cashews)"
        ],
        fruitVeg: ["Oranges"],
        prep: "Peel and segment oranges, enjoy with a handful of nuts.",
        macros: { carbs: 30, protein: 5, fat: 10, fibre: 5 }
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
        macros: { carbs: 32, protein: 4, fat: 7, fibre: 3 }
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
        macros: { carbs: 30, protein: 8, fat: 5, fibre: 3 }
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
        macros: { carbs: 38, protein: 8, fat: 6, fibre: 6 }
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
        macros: { carbs: 34, protein: 3, fat: 8, fibre: 4 }
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
        macros: { carbs: 36, protein: 5, fat: 12, fibre: 5 }
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
        macros: { carbs: 20, protein: 5, fat: 9, fibre: 3 }
    }
];

function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function pickUnique(arr, exclude) {
    const filtered = arr.filter(item => {
        const overlap = item.fruitVeg.some(f => exclude.includes(f));
        return !overlap || filtered.length === 0;
    });
    const pool = filtered.length > 0 ? filtered : arr;
    return pool[Math.floor(Math.random() * pool.length)];
}

function renderMeal(containerId, meal) {
    const el = document.getElementById(containerId);
    const ingredientItems = meal.ingredients.map(ing => {
        return `<li>${ing}</li>`;
    }).join('');

    const fruitTags = meal.fruitVeg.map(f =>
        `<span class="fruit-veg-tag">${f} - 1 of 5-a-day</span>`
    ).join(' ');

    el.innerHTML = `
        <h3>${meal.name}</h3>
        ${fruitTags}
        <ul class="ingredients">${ingredientItems}</ul>
        <p class="prep-note">${meal.prep}</p>
    `;
}

function generatePlan() {
    const breakfast = pick(breakfasts);

    // Try to get variety in fruit/veg across meals
    const usedFV = [...breakfast.fruitVeg];
    const mSnack = pickUnique(morningSnacks, usedFV);
    usedFV.push(...mSnack.fruitVeg);
    const aSnack = pickUnique(afternoonSnacks, usedFV);

    renderMeal('breakfast-content', breakfast);
    renderMeal('morning-snack-content', mSnack);
    renderMeal('afternoon-snack-content', aSnack);

    // 5-a-day tracker
    const allFV = [...breakfast.fruitVeg, ...mSnack.fruitVeg, ...aSnack.fruitVeg];
    const uniqueFV = [...new Set(allFV)];
    const fadEl = document.getElementById('five-a-day');
    fadEl.innerHTML = uniqueFV.map(f => `<span class="fad-item">${f}</span>`).join('');
    const countEl = document.getElementById('five-a-day-count');
    const count = uniqueFV.length;
    countEl.innerHTML = `<strong>${count}</strong> of your 5-a-day covered from breakfast & snacks alone!${count >= 5 ? ' All 5 reached!' : ` Add ${5 - count} more with lunch & dinner.`}`;

    // Macros
    const totalCarbs = breakfast.macros.carbs + mSnack.macros.carbs + aSnack.macros.carbs;
    const totalProtein = breakfast.macros.protein + mSnack.macros.protein + aSnack.macros.protein;
    const totalFat = breakfast.macros.fat + mSnack.macros.fat + aSnack.macros.fat;
    const totalFibre = breakfast.macros.fibre + mSnack.macros.fibre + aSnack.macros.fibre;
    const total = totalCarbs + totalProtein + totalFat + totalFibre;

    const carbPct = Math.round((totalCarbs / total) * 100);
    const proteinPct = Math.round((totalProtein / total) * 100);
    const fatPct = Math.round((totalFat / total) * 100);
    const fibrePct = Math.round((totalFibre / total) * 100);

    document.getElementById('carb-bar').style.width = carbPct + '%';
    document.getElementById('protein-bar').style.width = proteinPct + '%';
    document.getElementById('fat-bar').style.width = fatPct + '%';
    document.getElementById('fibre-bar').style.width = fibrePct + '%';

    document.getElementById('carb-pct').textContent = carbPct + '%';
    document.getElementById('protein-pct').textContent = proteinPct + '%';
    document.getElementById('fat-pct').textContent = fatPct + '%';
    document.getElementById('fibre-pct').textContent = fibrePct + '%';

    document.getElementById('plan').classList.remove('hidden');
}
