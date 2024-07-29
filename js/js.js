document.addEventListener('DOMContentLoaded', function () {
    let sectionTwo = document.querySelector('.sectionTwo_box_div2');
    let div2 = document.querySelector('.div2');
    let money1 = document.querySelector('.money79000');
    let money2 = document.querySelector('.money24500');

    async function Products1() {
        try {
            let api_url = 'https://dummyjson.com/products?limit=12&skip=2&total=14' 
            money1.addEventListener('click', function () {
                money1.classList.add('active');
                money2.classList.remove('active');
            })
            money2.addEventListener('click', function () {
                money2.classList.add('active');
                money1.classList.remove('active');
            })

            console.log(api_url);

            let AllProducts = await fetch(api_url)
            let AllProductsJson = await AllProducts.json();
            let products = AllProductsJson.products;

            let AllProducts2 = await fetch('https://dummyjson.com/products?limit=4&skip=14&total=18')
            let AllProductsJson2 = await AllProducts2.json();
            let products2 = AllProductsJson2.products
            console.log(products);
            products.forEach(info => {
                let HtmlProducts = `
            <div class="products_div" data-id='${info.id}'>
                        <div>
                        <img src="${info.thumbnail}" alt="" class="images">
                            <div class="nalichiCros_sale">
                                <div class="nalichi_div">
                                    <button class="cros"><img src="img/Cross.svg" alt=""></button>
                                    <h4 class="nalichi_title">Нет в наличии</h4>
                                </div>
                                <button class="sale" data-id='${info.id}'>SALE</button>
                            </div>
                            <div class="podarka_div">
                                <img src="img/give.svg" alt="">
                                <h6 class="podarka_title">Подарок</h6>
                            </div>
                        </div>
                        <div class="products_info">
                            <div class="stars_div">
                                <img src="img/stars.svg" alt="">
                                <p class="otziv_text">(12) отзывов</p>
                            </div>
                            <p class="texts_info">${info.title}</p>
                            <h1 class="moneyRubl">${info.price}₽ <span>8 000₽</span></h1>
                        </div>
                    </div>
            `

                sectionTwo.innerHTML += HtmlProducts;
            });
            products2.forEach(info => {
                let HtmlProducts2 = `
            <div class="products_div1" data-id='${info.id}'>
                        <div>
                        <img src="${info.thumbnail}" alt="" class="images">
                            <div class="nalichiCros_sale">
                                <div class="nalichi_div">
                                    <button class="cros"><img src="img/togri.svg" alt=""></button>
                                    <h4 class="nalichi_title">В наличии</h4>
                                </div>
                                <button class="sale">SALE</button>
                            </div>
                            <div class="podarka_div">
                                <img src="img/give.svg" alt="">
                                <h6 class="podarka_title">Подарок</h6>
                            </div>
                        </div>
                        <div class="products_info">
                            <div class="stars_div">
                                <img src="img/stars.svg" alt="">
                                <p class="otziv_text">(12) отзывов</p>
                            </div>
                            <p class="texts_info">${info.title}</p>
                            <h1 class="moneyRubl">${info.price}₽ <span>37 000₽</span></h1>
                        </div>
                    </div>
            `

                let phone_basket = document.querySelector('.phone_basket');


                phone_basket.innerHTML = `
                        <div class="phone_div" data-id='${info.id}'>
                            <img src="img/phone-call.svg" alt="">
                            <p class="phone_text">+7 (966) 55 88 499</p>
                        </div>
                        <img class="like_icon" src="img/like_icon.svg" alt="">
                        <div class="img_basket_div" data-id='${info.id}'><img class="basket_icon" src="img/basket_icon.svg" alt=""></div>
        `

                div2.innerHTML += HtmlProducts2;
                let cards = document.querySelectorAll('.products_div');

                cards.length && cards.forEach(function (card) {
                    card.addEventListener('click', function () {
                        let id = this.getAttribute('data-id');
                        window.location.assign(`http://127.0.0.1:5500/pages/info.html?id=${id}}`)
                    })
                })

                let cards2 = document.querySelectorAll('.products_div1');

                cards2.length && cards2.forEach(function (card) {
                    card.addEventListener('click', function () {
                        let id = this.getAttribute('data-id');
                        window.location.assign(`http://127.0.0.1:5500/pages/info.html?id=${id}`)
                    })
                })

                let basket = document.querySelector('.img_basket_div');

                basket.addEventListener('click', function () {
                    let id = this.getAttribute('data-id');
                    window.location.assign(`http://127.0.0.1:5500/pages/basket.html?id=${id}`)
                })

                let sale = document.querySelector('.sale');
                sale.addEventListener('click', function () {
                    let id = this.getAttribute('data-id');
                    window.location.assign(`http://127.0.0.1:5500/pages/basket.html?id=${id}`)
                })
            });

            money1.addEventListener('click', function() {
                window.location.assign(`http://127.0.0.1:5500/pages/filter1.html`)
            })

            money2.addEventListener('click', function() {
                window.location.assign(`http://127.0.0.1:5500/pages/filter2.html`)
            })

        } catch (error) {
            console.error(error);
        }
    }
    Products1()
})