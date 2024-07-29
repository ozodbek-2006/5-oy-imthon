document.addEventListener('DOMContentLoaded', function () {
    let url = window.location.href;

    let res = url.split('id=');
    let id = res[1];
    console.log(id);

    const box = document.querySelector('.box3');
    let amount = 1;

    function Market2() {
        fetch(`https://cars-pagination.onrender.com/products/${id}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                let product = data;


                let cardlar = `
                <div class="title_xIcon">
                <h1 class="basket_title">Корзина</h1>
                <img src="../img/X_icon.svg" alt="" class="X_icon">
            </div>
            <div class="basket_info">
                <div class="imgs_div"><img src="${product.image}" alt="" class="basket_img"></div>
                <div class="divs_amount_remove">
                    <div class="texts_amout">
                        <h1 class="title_info">${product.title}</h1>
                        <h1 class="link_info">+ Подарок: <a href="#" class="link_infoLink">“Приложение к замкам Golden Service”</a></h1>
                        <div class="amout_div">
                            <h1 id="decrement" class="minus">-</h1>
                            <input type="text" id="amount" class="amount" value="1" readonly>
                            <h1 id="increment" class="plus">+</h1>
                            
                        </div>
                    </div>
                    <div class="delete_price">
                        <div class="remove_div">
                            <img src="../img/remove.svg" alt="">
                            <h1 class="remove_title">Удалить</h1>
                        </div>
                        <h1 class="price_title">${product.newPrice}₽</h1>
                    </div>
                </div>
            </div>
            <div class="basket_btn_totalPrice">
                <h1 class="total_price">Итого: <span>${product.newPrice * amount}₽</span></h1>
                <div class="btns">
                    <button class="btn1">Оформить заказ</button>
                    <button class="btn2">Продолжить покупки</button>
                </div>
            </div>
                `;
                box.innerHTML += cardlar;
                let remove = document.querySelector('.remove_div')
                // let minus = document.querySelector('.minus')
                // let plus = document.querySelector('.plus')
                function delete1() {
                    remove.addEventListener('click', function() {
                        box.innerHTML = ''
                    })
                }
                // function time() {
                //     if (amount > 0) {
                //         plus.addEventListener('click', function(e) {
                //             amount++;
                //         })
                //         minus.addEventListener('click', function (ee) {
                //             amount--;

                //         })
                //     } else amount = 1;
                //     if (amount > 1) {
                //         minus.classList.add('active')
                //     } else minus.classList.remove('active')
                // }
                setTimeout(() => {
                    delete1()
                }, 50);

                const decrementButton = document.getElementById('decrement');
            const incrementButton = document.getElementById('increment');
            const amountInput = document.getElementById('amount');

            function updateButtons() {
                const currentValue = parseInt(amountInput.value, 10);
                decrementButton.disabled = currentValue <= 0;
                if (currentValue > 1) {
                    decrementButton.classList.add('active');
                } else {
                    decrementButton.classList.remove('active');
                }
            }

            decrementButton.addEventListener('click', () => {
                let currentValue = parseInt(amountInput.value, 10);
                if (currentValue > 0) {
                    amountInput.value = currentValue - 1;
                }
                updateButtons();
            });

            incrementButton.addEventListener('click', () => {
                let currentValue = parseInt(amountInput.value, 10);
                amountInput.value = currentValue + 1;
                updateButtons();
            });

            updateButtons();

            })

    }
    Market2();
});