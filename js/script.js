const $ = (id) => document.getElementById(id);

const assets = {
    // ФОТО: Запасная картинка, если основная не загрузится
    placeholder: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop',
    icons: {
        // ИКОНКА: Сердечко пустое
        heart: 'https://img.icons8.com/material-outlined/96/FA5252/like--v1.png',
        // ИКОНКА: Сердечко заполненное
        heartFilled: 'https://img.icons8.com/material-rounded/96/FA5252/like--v1.png',
        // ИКОНКА: Сетка (каталог)
        grid: 'https://img.icons8.com/ios-filled/100/228BE6/menu-squared-2.png',
        // ИКОНКА: Бирка/Тег (категория)
        tag: 'https://img.icons8.com/ios-filled/100/228BE6/menu-squared-2.png',
        // ИКОНКА: Список/Строки (линия)
        rows: 'https://img.icons8.com/material-rounded/96/FA5252/minus.png',
        // ИКОНКА: Булавка/Локация
        pin: 'https://img.icons8.com/fluency-systems-filled/96/FA5252/marker.png',
        // ИКОНКА: Стрелка вправо
        arrowRight: 'https://cdn-icons-png.flaticon.com/512/271/271220.png',
        // ИКОНКА: Плюс
        plus: 'https://img.icons8.com/fluency-systems-filled/96/FA5252/plus-math.png',
        // ИКОНКА: Минус
        minus: 'https://img.icons8.com/material-rounded/96/FA5252/minus.png',
        // ИКОНКА: Коробка/Заказы
        orders: 'https://cdn-icons-png.flaticon.com/512/2910/2910790.png',
        // ИКОНКА: Кредитная карта
        card: 'https://cdn-icons-png.flaticon.com/512/2000/2000672.png',
        // ИКОНКА: Подарок
        gift: 'https://cdn-icons-png.flaticon.com/512/4213/4213958.png',
        // ИКОНКА: Шестеренка (настройки)
        settings: 'https://img.icons8.com/ios-filled/500/228BE6/settings.png',
        // ИКОНКА: Вопросительный знак (помощь)
        help: 'https://img.icons8.com/sf-black-filled/64/228BE6/question-mark--v1.png',
        // ИКОНКА: Корзина покупок
        cart: 'https://img.icons8.com/pastel-glyph/64/228BE6/shopping-basket-2--v1.png'
    }
};

const categories = {
    electronics: {
        title: 'Электроника',
        // ФОТО КАТЕГОРИИ: Электроника/Гаджеты
        image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=400&fit=crop',
        count: '12 450 товаров',
        subcategories: [
            { name: 'Смартфоны', count: '3 240 товаров', icon: assets.icons.tag },
            { name: 'Ноутбуки и ПК', count: '1 890 товаров', icon: assets.icons.tag },
            { name: 'Планшеты', count: '780 товаров', icon: assets.icons.tag },
            { name: 'Наушники и аудио', count: '2 150 товаров', icon: assets.icons.tag },
            { name: 'Телевизоры', count: '960 товаров', icon: assets.icons.tag },
            { name: 'Смарт-часы', count: '1 430 товаров', icon: assets.icons.tag },
            { name: 'Фото и видео', count: '540 товаров', icon: assets.icons.tag },
            { name: 'Игровые приставки', count: '870 товаров', icon: assets.icons.tag },
            { name: 'Аксессуары', count: '4 560 товаров', icon: assets.icons.tag }
        ]
    },

    clothing: {
        title: 'Одежда и обувь',
        // ФОТО КАТЕГОРИИ: Одежда/Магазин
        image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=400&h=400&fit=crop',
        count: '28 320 товаров',
        subcategories: [
            { name: 'Мужская одежда', count: '8 450 товаров', icon: assets.icons.tag },
            { name: 'Женская одежда', count: '12 300 товаров', icon: assets.icons.tag },
            { name: 'Детская одежда', count: '4 670 товаров', icon: assets.icons.tag },
            { name: 'Обувь мужская', count: '3 890 товаров', icon: assets.icons.tag },
            { name: 'Обувь женская', count: '5 210 товаров', icon: assets.icons.tag },
            { name: 'Сумки и рюкзаки', count: '2 340 товаров', icon: assets.icons.tag },
            { name: 'Головные уборы', count: '1 120 товаров', icon: assets.icons.tag },
            { name: 'Украшения', count: '3 560 товаров', icon: assets.icons.tag }
        ]
    },

    home: {
        title: 'Дом и сад',
        // ФОТО КАТЕГОРИИ: Интерьер/Дом
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop',
        count: '18 760 товаров',
        subcategories: [
            { name: 'Мебель', count: '4 320 товаров', icon: assets.icons.tag },
            { name: 'Кухня и посуда', count: '3 670 товаров', icon: assets.icons.tag },
            { name: 'Текстиль', count: '2 890 товаров', icon: assets.icons.tag },
            { name: 'Освещение', count: '1 560 товаров', icon: assets.icons.tag },
            { name: 'Сад и растения', count: '2 340 товаров', icon: assets.icons.tag },
            { name: 'Уборка и хранение', count: '1 890 товаров', icon: assets.icons.tag },
            { name: 'Ванная', count: '2 100 товаров', icon: assets.icons.tag },
            { name: 'Декор', count: '3 450 товаров', icon: assets.icons.tag }
        ]
    },

    sport: {
        title: 'Спорт и отдых',
        // ФОТО КАТЕГОРИИ: Спортзал/Активность
        image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=400&fit=crop',
        count: '9 540 товаров',
        subcategories: [
            { name: 'Тренажёры', count: '1 230 товаров', icon: assets.icons.tag },
            { name: 'Велосипеды', count: '890 товаров', icon: assets.icons.tag },
            { name: 'Туризм', count: '2 340 товаров', icon: assets.icons.tag },
            { name: 'Плавание', count: '780 товаров', icon: assets.icons.tag },
            { name: 'Зимние виды', count: '1 560 товаров', icon: assets.icons.tag },
            { name: 'Йога и фитнес', count: '1 890 товаров', icon: assets.icons.tag },
            { name: 'Командные виды', count: '1 120 товаров', icon: assets.icons.tag },
            { name: 'Рыбалка', count: '960 товаров', icon: assets.icons.tag }
        ]
    }
};

const topProducts = [
    {
        id: 'top-1',
        // ФОТО ТОВАРА: Беспроводные наушники
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
        name: 'Беспроводные наушники Pro Max',
        price: 49900,
        oldPrice: 79900,
        rating: 5,
        reviews: 2400,
        badge: 'hit',
        location: {
            section: 'Электроника',
            category: 'Наушники и аудио',
            line: 'Линия 3',
            row: 'Ряд 12, место 5'
        },
        desc: 'Премиальные беспроводные наушники с активным шумоподавлением, 30 часов работы и Bluetooth 5.3.'
    },

    {
        id: 'top-2',
        // ФОТО ТОВАРА: Смартфон
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
        name: 'Смартфон Galaxy Ultra 256GB',
        price: 549900,
        oldPrice: 699900,
        rating: 5,
        reviews: 5100,
        badge: 'new',
        location: {
            section: 'Электроника',
            category: 'Смартфоны',
            line: 'Линия 1',
            row: 'Ряд 4, место 8'
        },
        desc: 'Флагманский смартфон с AMOLED дисплеем 6.8", камерой 200МП и батареей 5000 мАч.'
    },

    {
        id: 'top-3',
        // ФОТО ТОВАРА: Красные кроссовки
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
        name: 'Кроссовки Air Comfort 2026',
        price: 59900,
        oldPrice: 99900,
        rating: 4,
        reviews: 1800,
        badge: 'sale',
        location: {
            section: 'Одежда и обувь',
            category: 'Обувь мужская',
            line: 'Линия 5',
            row: 'Ряд 2, место 15'
        },
        desc: 'Лёгкие и удобные кроссовки для повседневной носки и спорта. Дышащий материал.'
    },

    {
        id: 'top-4',
        // ФОТО ТОВАРА: Умные часы
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
        name: 'Смарт-часы FitBand Pro',
        price: 34900,
        oldPrice: 54900,
        rating: 5,
        reviews: 3200,
        badge: 'hit',
        location: {
            section: 'Электроника',
            category: 'Смарт-часы',
            line: 'Линия 2',
            row: 'Ряд 7, место 3'
        },
        desc: 'Умные часы с мониторингом здоровья, GPS, водозащитой IP68 и 14 дней автономности.'
    },

    {
        id: 'top-5',
        // ФОТО ТОВАРА: Свитер
        image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop',
        name: 'Свитер оверсайз Premium Wool',
        price: 29900,
        oldPrice: 45900,
        rating: 4,
        reviews: 890,
        badge: 'new',
        location: {
            section: 'Одежда и обувь',
            category: 'Мужская одежда',
            line: 'Линия 4',
            row: 'Ряд 9, место 2'
        },
        desc: 'Тёплый свитер из натуральной шерсти. Свободный крой, размеры S-XXL.'
    },

    {
        id: 'top-6',
        // ФОТО ТОВАРА: Рюкзак
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
        name: 'Рюкзак Urban Explorer 30L',
        price: 24900,
        oldPrice: 38900,
        rating: 5,
        reviews: 1500,
        badge: 'sale',
        location: {
            section: 'Одежда и обувь',
            category: 'Сумки и рюкзаки',
            line: 'Линия 6',
            row: 'Ряд 1, место 11'
        },
        desc: 'Городской рюкзак с отделением для ноутбука 15.6" и USB-портом для зарядки.'
    },

    {
        id: 'top-7',
        // ФОТО ТОВАРА: TWS наушники в кейсе
        image: 'https://images.unsplash.com/photo-1590658268037-6bf12f032f55?w=400&h=400&fit=crop',
        name: 'TWS Earbuds SoundMax Mini',
        price: 19900,
        oldPrice: 34900,
        rating: 4,
        reviews: 4700,
        badge: 'hit',
        location: {
            section: 'Электроника',
            category: 'Наушники и аудио',
            line: 'Линия 3',
            row: 'Ряд 14, место 1'
        },
        desc: 'Компактные TWS наушники с кейсом, 24 часа общей работы и сенсорное управление.'
    },

    {
        id: 'top-8',
        // ФОТО ТОВАРА: Настольная лампа
        image: 'https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=400&h=400&fit=crop',
        name: 'Лампа настольная Smart LED',
        price: 17900,
        oldPrice: 29900,
        rating: 5,
        reviews: 670,
        badge: 'new',
        location: {
            section: 'Дом и сад',
            category: 'Освещение',
            line: 'Линия 2',
            row: 'Ряд 6, место 9'
        },
        desc: 'Умная настольная лампа с регулировкой яркости и цветовой температуры.'
    }
];

const recommendProducts = [
    {
        id: 'rec-1',
        // ФОТО ТОВАРА: Компьютерный монитор
        image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop',
        name: 'Монитор 27" 4K',
        price: 249900,
        oldPrice: 299900,
        rating: 5,
        reviews: 420,
        badge: 'new',
        location: {
            section: 'Электроника',
            category: 'Телевизоры и мониторы',
            line: 'Линия 1',
            row: 'Ряд 2, место 7'
        },
        desc: 'Профессиональный 4K монитор с IPS матрицей и 99% sRGB.'
    },

    {
        id: 'rec-2',
        // ФОТО ТОВАРА: Косметика/Крем
        image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop',
        name: 'Крем для лица увлажняющий',
        price: 89000,
        oldPrice: 129000,
        rating: 5,
        reviews: 1200,
        badge: 'hit',
        location: {
            section: 'Дом и сад',
            category: 'Ванная',
            line: 'Линия 7',
            row: 'Ряд 3, место 14'
        },
        desc: 'Увлажняющий крем для лица с гиалуроновой кислотой, 50 мл.'
    },

    {
        id: 'rec-3',
        // ФОТО ТОВАРА: Игровой геймпад
        image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=400&h=400&fit=crop',
        name: 'Геймпад Pro Controller',
        price: 34900,
        oldPrice: 49900,
        rating: 4,
        reviews: 890,
        badge: 'sale',
        location: {
            section: 'Электроника',
            category: 'Игровые приставки',
            line: 'Линия 4',
            row: 'Ряд 1, место 6'
        },
        desc: 'Беспроводной геймпад с вибрацией, работает с ПК и консолями.'
    },

    {
        id: 'rec-4',
        // ФОТО ТОВАРА: Книга
        image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop',
        name: 'Книга "Путь к успеху"',
        price: 59000,
        oldPrice: 89000,
        rating: 5,
        reviews: 2300,
        badge: 'hit',
        location: {
            section: 'Дом и сад',
            category: 'Декор',
            line: 'Линия 8',
            row: 'Ряд 5, место 2'
        },
        desc: 'Бестселлер по саморазвитию, 320 страниц, твёрдый переплёт.'
    },

    {
        id: 'rec-5',
        // ФОТО ТОВАРА: Плюшевый мишка
        image: 'https://images.unsplash.com/photo-1559715541-5daf8a0296d0?w=400&h=400&fit=crop',
        name: 'Игрушка мягкая Мишка',
        price: 7900,
        oldPrice: 11900,
        rating: 5,
        reviews: 560,
        badge: 'new',
        location: {
            section: 'Одежда и обувь',
            category: 'Детская одежда',
            line: 'Линия 3',
            row: 'Ряд 8, место 4'
        },
        desc: 'Мягкая плюшевая игрушка, гипоаллергенный материал, 40 см.'
    },

    {
        id: 'rec-6',
        // ФОТО ТОВАРА: Кофемашина
        image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=400&h=400&fit=crop',
        name: 'Кофемашина автомат',
        price: 129900,
        oldPrice: 179900,
        rating: 5,
        reviews: 780,
        badge: 'sale',
        location: {
            section: 'Дом и сад',
            category: 'Кухня и посуда',
            line: 'Линия 2',
            row: 'Ряд 11, место 1'
        },
        desc: 'Автоматическая кофемашина с капучинатором, 15 бар, 1.8 л.'
    }
];

const generatedProducts = new Map();

let cart = [
    { ...topProducts[0], qty: 1 },
    { ...topProducts[2], qty: 2 },
    { ...recommendProducts[1], qty: 1 }
];

let favorites = new Set();

let toastTimeout = null;

function init() {
    renderCategories();
    renderTopProducts();
    renderRecommend();
    updateCartBadge();

    bindStaticButtons();
    bindNav();
    bindGlobalClose();
    bindOverlay();
}

/* ===== HELPERS ===== */

function formatPrice(value) {
    return new Intl.NumberFormat('ru-RU').format(value) + ' Сум';
}

function getDiscount(product) {
    return Math.round((1 - product.price / product.oldPrice) * 100);
}

function badgeText(product) {
    if (product.badge === 'hit') return 'ХИТ';
    if (product.badge === 'new') return 'НОВИНКА';
    return `-${getDiscount(product)}%`;
}

function starsText(rating) {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
}

function getProduct(id) {
    const productId = String(id);

    return [
        ...topProducts,
        ...recommendProducts,
        ...generatedProducts.values()
    ].find(product => String(product.id) === productId);
}

function showToast(message) {
    clearTimeout(toastTimeout);

    const toast = $('toast');
    toast.textContent = message;
    toast.classList.add('show');

    toastTimeout = setTimeout(() => {
        toast.classList.remove('show');
    }, 2200);
}

/* ===== MODAL CORE ===== */

function openModal(id) {
    closeAllModals(false);

    $('modalOverlay').classList.add('active');
    $(id).classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(id) {
    $(id).classList.remove('active');
    $('modalOverlay').classList.remove('active');
    document.body.style.overflow = '';
}

function closeAllModals(hideOverlay = true) {
    document.querySelectorAll('.modal-sheet').forEach(modal => {
        modal.classList.remove('active');
    });

    if (hideOverlay) {
        $('modalOverlay').classList.remove('active');
        document.body.style.overflow = '';
    }
}

function bindGlobalClose() {
    document.querySelectorAll('[data-close]').forEach(btn => {
        btn.addEventListener('click', () => {
            closeModal(btn.dataset.close);
        });
    });
}

function bindOverlay() {
    $('modalOverlay').addEventListener('click', () => {
        closeAllModals();
    });
}

/* ===== RENDER CATEGORIES ===== */

function renderCategories() {
    const grid = $('categoriesGrid');

    grid.innerHTML = Object.entries(categories).map(([key, category]) => {
        return `
            <div class="category-card" data-category="${key}">
                <div class="category-arrow">
                    <img src="${assets.icons.arrowRight}" alt="">
                </div>

                <div class="cat-icon">
                    <img
                        src="${category.image}"
                        alt="${category.title}"
                        onerror="this.onerror=null; this.src='${assets.placeholder}';"
                    >
                </div>

                <div>
                    <div class="category-name">${category.title}</div>
                    <div class="category-count">${category.count}</div>
                </div>
            </div>
        `;
    }).join('');

    grid.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            openCategoryModal(card.dataset.category);
        });
    });
}

/* ===== RENDER TOP PRODUCTS ===== */

function renderTopProducts() {
    const container = $('productsScroll');

    container.innerHTML = topProducts.map(productCardHTML).join('');
    bindProductCards(container);
}

/* ===== RENDER RECOMMEND ===== */

function renderRecommend() {
    const container = $('recommendGrid');

    container.innerHTML = recommendProducts.map(product => {
        return `
            <div class="recommend-item" data-id="${product.id}">
                <div class="recommend-img">
                    <img
                        src="${product.image}"
                        alt="${product.name}"
                        onerror="this.onerror=null; this.src='${assets.placeholder}';"
                    >
                </div>

                <div class="recommend-name">${product.name}</div>
                <div class="recommend-price">${formatPrice(product.price)}</div>
            </div>
        `;
    }).join('');

    container.querySelectorAll('.recommend-item').forEach(item => {
        item.addEventListener('click', () => {
            openProduct(item.dataset.id);
        });
    });
}

/* ===== PRODUCT CARD HTML ===== */

function productCardHTML(product) {
    const isFavorite = favorites.has(product.id);

    return `
        <div class="product-card" data-id="${product.id}">
            <div class="product-image">
                <span class="product-badge badge-${product.badge}">
                    ${badgeText(product)}
                </span>

                <button class="product-fav" data-fav-id="${product.id}" type="button">
                    <img
                        src="${isFavorite ? assets.icons.heartFilled : assets.icons.heart}"
                        alt=""
                    >
                </button>

                <img
                    class="product-photo"
                    src="${product.image}"
                    alt="${product.name}"
                    onerror="this.onerror=null; this.src='${assets.placeholder}';"
                >
            </div>

            <div class="product-info">
                <div class="product-name">${product.name}</div>

                <div class="product-price">
                    <span class="price-current">${formatPrice(product.price)}</span>
                    <span class="price-old">${formatPrice(product.oldPrice)}</span>
                </div>

                <div class="product-rating">
                    <span class="stars">${starsText(product.rating)}</span>
                    <span class="count">(${product.reviews.toLocaleString('ru')})</span>
                </div>
            </div>
        </div>
    `;
}

function bindProductCards(container) {
    container.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', () => {
            openProduct(card.dataset.id);
        });
    });

    container.querySelectorAll('.product-fav').forEach(btn => {
        btn.addEventListener('click', event => {
            event.stopPropagation();
            toggleFavorite(btn.dataset.favId);
        });
    });
}

/* ===== CATEGORY MODAL ===== */

function openCategoryModal(categoryKey) {
    const category = categories[categoryKey];
    if (!category) return;

    $('categoryModalIcon').src = category.image;
    $('categoryModalTitle').textContent = category.title;

    $('categoryModalList').innerHTML = category.subcategories.map(sub => {
        return `
            <div class="subcategory-item" data-category="${categoryKey}" data-subcategory="${sub.name}">
                <div class="sub-icon">
                    <img src="${sub.icon}" alt="">
                </div>

                <div class="sub-info">
                    <div class="sub-name">${sub.name}</div>
                    <div class="sub-count">${sub.count}</div>
                </div>

                <img src="${assets.icons.arrowRight}" class="sub-arrow" alt="">
            </div>
        `;
    }).join('');

    $('categoryModalList').querySelectorAll('.subcategory-item').forEach(item => {
        item.addEventListener('click', () => {
            openSubcategoryProducts(item.dataset.category, item.dataset.subcategory);
        });
    });

    openModal('categoryModal');
}

/* ===== SUBCATEGORY PRODUCTS ===== */

function openSubcategoryProducts(categoryKey, subcategoryName) {
    const category = categories[categoryKey];
    const sub = category.subcategories.find(item => item.name === subcategoryName);

    closeModal('categoryModal');

    setTimeout(() => {
        $('subcatProductsModalIcon').src = sub.icon;
        $('subcatProductsModalTitle').textContent = sub.name;

        const products = generateSubcategoryProducts(categoryKey, sub);

        $('subcatProductsGrid').innerHTML = products.map(product => {
            return `
                <div class="subcat-product" data-id="${product.id}">
                    <div class="subcat-product-img">
                        <img
                            src="${product.image}"
                            alt="${product.name}"
                            onerror="this.onerror=null; this.src='${assets.placeholder}';"
                        >
                    </div>

                    <div class="subcat-product-name">${product.name}</div>
                    <div class="subcat-product-price">${formatPrice(product.price)}</div>
                </div>
            `;
        }).join('');

        $('subcatProductsGrid').querySelectorAll('.subcat-product').forEach(item => {
            item.addEventListener('click', () => {
                closeModal('subcatProductsModal');

                setTimeout(() => {
                    openProduct(item.dataset.id);
                }, 220);
            });
        });

        openModal('subcatProductsModal');
    }, 220);
}

function generateSubcategoryProducts(categoryKey, sub) {
    const category = categories[categoryKey];

    const productNames = [
        'Premium',
        'Classic',
        'Pro',
        'Standard',
        'Elite',
        'Basic'
    ];

    const products = [];

    for (let i = 0; i < 6; i++) {
        const price = Math.floor(Math.random() * 20000) + 500;
        const oldPrice = Math.floor(price * (1.2 + Math.random() * 0.5));

        const product = {
            id: `gen-${Date.now()}-${i}`,
            image: assets.placeholder, // Использует онлайн-заглушку
            name: `${sub.name} ${productNames[i]}`,
            price,
            oldPrice,
            rating: 4 + Math.round(Math.random()),
            reviews: Math.floor(Math.random() * 2000) + 50,
            badge: ['hit', 'new', 'sale'][i % 3],
            location: {
                section: category.title,
                category: sub.name,
                line: `Линия ${Math.floor(Math.random() * 10) + 1}`,
                row: `Ряд ${Math.floor(Math.random() * 20) + 1}, место ${Math.floor(Math.random() * 20) + 1}`
            },
            desc: `Качественный товар из категории "${sub.name}". Отличные характеристики и выгодная цена.`
        };

        generatedProducts.set(product.id, product);
        products.push(product);
    }

    return products;
}

/* ===== PRODUCT DETAIL ===== */

function openProduct(id) {
    const product = getProduct(id);

    if (!product) {
        showToast('❌ Товар не найден');
        return;
    }

    renderProductModal(product);
    openModal('productModal');
}

function renderProductModal(product) {
    const isFavorite = favorites.has(product.id);
    const discount = getDiscount(product);

    $('productModalContent').innerHTML = `
        <div class="product-detail-image">
            <span class="product-detail-badge badge-${product.badge}">
                ${badgeText(product)}
            </span>

            <button class="product-detail-fav" data-detail-fav="${product.id}" type="button">
                <img src="${isFavorite ? assets.icons.heartFilled : assets.icons.heart}" alt="">
            </button>

            <img
                class="product-detail-photo"
                src="${product.image}"
                alt="${product.name}"
                onerror="this.onerror=null; this.src='${assets.placeholder}';"
            >
        </div>

        <div class="product-detail-name">${product.name}</div>

        <div class="product-detail-rating">
            <span class="stars">${starsText(product.rating)}</span>
            <span class="count">${product.reviews.toLocaleString('ru')} отзывов</span>
        </div>

        <div class="product-detail-price-row">
            <span class="product-detail-price">${formatPrice(product.price)}</span>
            <span class="product-detail-old-price">${formatPrice(product.oldPrice)}</span>
            <span class="product-detail-discount">-${discount}%</span>
        </div>

        <div class="location-block">
            <div class="location-title">
                <img src="${assets.icons.pin}" alt="">
                Местоположение товара
            </div>

            <div class="location-row">
                <div class="location-icon">
                    <img src="${assets.icons.grid}" alt="">
                </div>

                <div class="location-info">
                    <div class="location-label">Раздел</div>
                    <div class="location-value">${product.location.section}</div>
                </div>
            </div>

            <div class="location-row">
                <div class="location-icon">
                    <img src="${assets.icons.tag}" alt="">
                </div>

                <div class="location-info">
                    <div class="location-label">Категория</div>
                    <div class="location-value">${product.location.category}</div>
                </div>
            </div>

            <div class="location-row">
                <div class="location-icon">
                    <img src="${assets.icons.rows}" alt="">
                </div>

                <div class="location-info">
                    <div class="location-label">Линия</div>
                    <div class="location-value">${product.location.line}</div>
                </div>
            </div>

            <div class="location-row">
                <div class="location-icon">
                    <img src="${assets.icons.pin}" alt="">
                </div>

                <div class="location-info">
                    <div class="location-label">Ряд и место</div>
                    <div class="location-value">${product.location.row}</div>
                </div>
            </div>
        </div>

        <div class="product-detail-desc">
            ${product.desc}
        </div>

        <div class="product-actions">
            <button class="btn btn-secondary" data-detail-fav="${product.id}" type="button">
                <img src="${isFavorite ? assets.icons.heartFilled : assets.icons.heart}" alt="" class="btn-icon">
            </button>

            <button class="btn btn-primary" id="detailAddToCartBtn" type="button">
                <img src="${assets.icons.cart}" class="btn-icon" alt="">
                В корзину
            </button>
        </div>
    `;

    $('productModalContent').querySelectorAll('[data-detail-fav]').forEach(btn => {
        btn.addEventListener('click', () => {
            toggleFavorite(product.id);
            renderProductModal(product);
        });
    });

    $('detailAddToCartBtn').addEventListener('click', () => {
        addToCart(product);
    });
}

/* ===== FAVORITES ===== */

function toggleFavorite(id) {
    const productId = String(id);

    if (favorites.has(productId)) {
        favorites.delete(productId);
        showToast('Удалено из избранного');
    } else {
        favorites.add(productId);
        showToast('❤️ Добавлено в избранное');
    }

    renderTopProducts();
    renderRecommend();
}

function renderFavorites() {
    const container = $('favModalContent');

    const favoriteProducts = [
        ...topProducts,
        ...recommendProducts,
        ...generatedProducts.values()
    ].filter(product => favorites.has(String(product.id)));

    if (favoriteProducts.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <img src="${assets.icons.heart}" class="empty-state-icon" alt="">
                <div class="empty-state-title">Избранное пусто</div>
                <div class="empty-state-text">Нажмите на сердечко, чтобы добавить товар</div>
            </div>
        `;
        return;
    }

    container.innerHTML = `
        <div class="list-stack">
            ${favoriteProducts.map(product => {
                return `
                    <div class="list-item clickable" data-id="${product.id}">
                        <div class="list-thumb">
                            <img
                                src="${product.image}"
                                alt="${product.name}"
                                onerror="this.onerror=null; this.src='${assets.placeholder}';"
                            >
                        </div>

                        <div class="list-body">
                            <div class="list-title">${product.name}</div>
                            <div class="list-price">${formatPrice(product.price)}</div>
                        </div>
                    </div>
                `;
            }).join('')}
        </div>
    `;

    container.querySelectorAll('.list-item').forEach(item => {
        item.addEventListener('click', () => {
            closeModal('favModal');

            setTimeout(() => {
                openProduct(item.dataset.id);
            }, 220);
        });
    });
}

/* ===== CART ===== */

function addToCart(product) {
    const existing = cart.find(item => item.id === product.id);

    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ ...product, qty: 1 });
    }

    updateCartBadge();
    showToast('✅ Добавлено в корзину');
}

function updateCartBadge() {
    const total = cart.reduce((sum, item) => sum + item.qty, 0);
    $('cartBadge').textContent = total;
}

function renderCart() {
    const container = $('cartModalContent');

    if (cart.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <img src="${assets.icons.cart}" class="empty-state-icon" alt="">
                <div class="empty-state-title">Корзина пуста</div>
                <div class="empty-state-text">Добавьте товары из каталога</div>
            </div>
        `;
        return;
    }

    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

    container.innerHTML = `
        <div class="list-stack">
            ${cart.map((item, index) => {
                return `
                    <div class="list-item">
                        <div class="list-thumb">
                            <img
                                src="${item.image}"
                                alt="${item.name}"
                                onerror="this.onerror=null; this.src='${assets.placeholder}';"
                            >
                        </div>

                        <div class="list-body">
                            <div class="list-title">${item.name}</div>
                            <div class="list-price">
                                ${formatPrice(item.price)}
                                <span class="list-subtitle">× ${item.qty}</span>
                            </div>
                        </div>

                        <div class="qty-controls">
                            <button class="qty-btn" data-cart-index="${index}" data-cart-action="minus" type="button">
                                <img src="${assets.icons.minus}" alt="">
                            </button>

                            <span class="qty-value">${item.qty}</span>

                            <button class="qty-btn plus" data-cart-index="${index}" data-cart-action="plus" type="button">
                                <img src="${assets.icons.plus}" alt="">
                            </button>
                        </div>
                    </div>
                `;
            }).join('')}
        </div>

        <div class="cart-total">
            <span class="cart-total-label">Итого:</span>
            <span class="cart-total-value">${formatPrice(total)}</span>
        </div>

        <button class="btn btn-primary checkout-btn" id="checkoutBtn" type="button">
            Оформить заказ
        </button>
    `;

    container.querySelectorAll('[data-cart-action]').forEach(btn => {
        btn.addEventListener('click', () => {
            const index = Number(btn.dataset.cartIndex);
            const action = btn.dataset.cartAction;

            if (!cart[index]) return;

            if (action === 'plus') {
                cart[index].qty += 1;
            }

            if (action === 'minus') {
                cart[index].qty -= 1;

                if (cart[index].qty <= 0) {
                    cart.splice(index, 1);
                }
            }

            updateCartBadge();
            renderCart();
        });
    });

    $('checkoutBtn').addEventListener('click', () => {
        cart = [];
        updateCartBadge();
        renderCart();
        showToast('✅ Заказ оформлен! Спасибо!');

        setTimeout(() => {
            closeModal('cartModal');
        }, 900);
    });
}

/* ===== PROFILE ===== */

function renderProfile() {
    const container = $('profileModalContent');

    const menu = [
        { icon: assets.icons.orders, label: 'Мои заказы' },
        { icon: assets.icons.pin, label: 'Адреса доставки' },
        { icon: assets.icons.card, label: 'Способы оплаты' },
        { icon: assets.icons.gift, label: 'Бонусы и промокоды' },
        { icon: assets.icons.settings, label: 'Настройки' },
        { icon: assets.icons.help, label: 'Помощь' }
    ];

    container.innerHTML = `
        <div>
            <div class="profile-avatar">
                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="">
            </div>

            <div class="profile-name">Гость</div>
            <div class="profile-subtitle">Войдите, чтобы получить доступ ко всем функциям</div>
        </div>

        <div class="profile-menu">
            ${menu.map(item => {
                return `
                    <div class="menu-item" data-menu="${item.label}">
                        <img src="${item.icon}" class="menu-icon" alt="">
                        <span class="menu-label">${item.label}</span>
                        <img src="${assets.icons.arrowRight}" class="menu-arrow" alt="">
                    </div>
                `;
            }).join('')}
        </div>

        <button class="btn btn-primary login-btn" id="loginBtn" type="button">
            Войти в аккаунт
        </button>
    `;

    container.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', () => {
            showToast(`${item.dataset.menu} — пока в разработке`);
        });
    });

    $('loginBtn').addEventListener('click', () => {
        showToast('🔐 Форма входа — пока в разработке');
    });
}

/* ===== STATIC BUTTONS ===== */

function bindStaticButtons() {
    $('qrBtn').addEventListener('click', () => {
        openModal('qrModal');
    });

    $('qrStartBtn').addEventListener('click', () => {
        showToast('📷 Камера запускается...');
    });

    $('favBtn').addEventListener('click', () => {
        renderFavorites();
        openModal('favModal');
    });

    $('cartBtn').addEventListener('click', () => {
        renderCart();
        openModal('cartModal');
    });

    $('promoBanner').addEventListener('click', () => {
        showToast('🎉 Промокод КОКАНДСТАРТ скопирован!');
    });

    $('seeAllCats').addEventListener('click', () => {
        $('catalogSection').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });

    $('seeAllTop').addEventListener('click', () => {
        showToast('🔥 Все товары ТОП недели — скоро');
    });

    let searchTimeout;

    $('searchInput').addEventListener('input', () => {
        clearTimeout(searchTimeout);

        searchTimeout = setTimeout(() => {
            const value = $('searchInput').value.trim();

            if (value) {
                showToast(`🔍 Поиск: "${value}"`);
            }
        }, 500);
    });
}

/* ===== BOTTOM NAV ===== */

function bindNav() {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            document.querySelectorAll('.nav-item').forEach(nav => {
                nav.classList.remove('active');
            });

            item.classList.add('active');

            const nav = item.dataset.nav;

            if (nav === 'home') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }

            if (nav === 'catalog') {
                $('catalogSection').scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }

            if (nav === 'cart') {
                renderCart();
                openModal('cartModal');
            }

            if (nav === 'profile') {
                renderProfile();
                openModal('profileModal');
            }
        });
    });
}

init();
