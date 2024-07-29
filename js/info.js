document.addEventListener('DOMContentLoaded', function () {
    let url = window.location.href;

    let res = url.split('id=');
    let id = res[1];
    console.log(id);

    const box = document.querySelector('.box2');

    function Market2() {
        fetch(`https://cars-pagination.onrender.com/products/${id}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                let product = data;

                let cardlar = `
                <img src="${product.image}" alt="" class="box2_img">
                <div class="texts2">
                    <h1 class="title_texts">${product.name}</h1>    
                    <p class="info_text1">"Замок дверной электронный Golden Soft <br/> GS-200Z-5 имеет роскошный глянцевый <br/> блеск, четкие линии, красивые формы." </p>
                    <p class="info_text2">"Подходит для установки на <br/> деревянную/межкомнатную дверь." </p>
                    <p class="price_texts">Цена</p>
                    <div class="prices">
                        <p class="price_new">${product.newPrice}₽</p>
                        <p class="price_old">${product.oldPrice}₽</p>
                    </div>
                    <button class="btn_basket" data-id='${product.id}'>КОРЗИНКА</button>
                </div>
                `;

                box.innerHTML += cardlar;

                let phone_basket = document.querySelector('.phone_basket');


                phone_basket.innerHTML = `
                        <div class="phone_div"'>
                            <img src="../img/phone-call.svg" alt="">
                            <p class="phone_text">+7 (966) 55 88 499</p>
                        </div>
                        <img class="like_icon" src="../img/like_icon.svg" alt="">
                        <div class="img_basket_div" data-id='${product.id}'><img class="basket_icon" src="../img/basket_icon.svg" alt=""></div>
        `

                const basket2 = document.querySelector('.btn_basket');

                basket2.addEventListener('click', function () {
                    let id = this.getAttribute('data-id');
                    window.location.assign(`http://127.0.0.1:5500/pages/basket.html?id=${id}`)
                })

                const basket = document.querySelector('.img_basket_div');

                basket.addEventListener('click', function () {
                    let id = this.getAttribute('data-id');
                    window.location.assign(`http://127.0.0.1:5500//pages/basket.html?id=${id}`)
                })
            })



    }
    Market2();
});

