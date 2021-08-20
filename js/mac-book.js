// Memory Cost
document.getElementById('8gb-button').addEventListener('click', function () {
    const getMemoryCost = document.getElementById('extra-memory').innerText = 0;
    const memoryCost = parseInt(getMemoryCost);
    getMemoryCost.innerText = memoryCost;

});

document.getElementById('16gb-button').addEventListener('click', function () {
    const getMemoryCost = document.getElementById('extra-memory').innerText = 180;
    const memoryCost = parseInt(getMemoryCost);
    getMemoryCost.innerText = memoryCost;

    // Total Price

    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText;
    const previousTotalPrice = parseInt(totalPriceText);
    totalPrice.innerText = previousTotalPrice + memoryCost;

});

// Storage Cost

document.getElementById('256gb-button').addEventListener('click', function () {
    const getStorageCost = document.getElementById('extra-storage').innerText = 0;
    const storageCost = parseInt(getStorageCost);
    getStorageCost.innerText = storageCost;
});


document.getElementById('512gb-button').addEventListener('click', function () {
    const getStorageCost = document.getElementById('extra-storage').innerText = 100;
    const storageCost = parseInt(getStorageCost);
    getStorageCost.innerText = storageCost;

    // Total Price

    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText;
    const previousTotalPrice = parseInt(totalPriceText);
    totalPrice.innerText = previousTotalPrice + storageCost;

});


document.getElementById('1tb-button').addEventListener('click', function () {
    const getStorageCost = document.getElementById('extra-storage').innerText = 180;
    const storageCost = parseInt(getStorageCost);
    getStorageCost.innerText = storageCost;

    // Total Price

    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText;
    const previousTotalPrice = parseInt(totalPriceText);
    totalPrice.innerText = previousTotalPrice + storageCost;

});


// Delivery Cost 

document.getElementById('free-delivery-button').addEventListener('click', function () {
    const getDeliveryCost = document.getElementById('delivery-charge').innerText = 0;
    const deliveryCost = parseInt(getDeliveryCost);
    getDeliveryCost.innerText = deliveryCost;

    // Total Price

    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText;
    const previousTotalPrice = parseInt(totalPriceText);
    totalPrice.innerText = previousTotalPrice + deliveryCost;

});


document.getElementById('delivery-charge-button').addEventListener('click', function () {
    const getDeliveryCost = document.getElementById('delivery-charge').innerText = 20;
    const deliveryCost = parseInt(getDeliveryCost);
    getDeliveryCost.innerText = deliveryCost;

    // Total Price

    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText;
    const previousTotalPrice = parseInt(totalPriceText);
    totalPrice.innerText = previousTotalPrice + deliveryCost;

});





document.getElementById('add-button').addEventListener('click', function () {
    // get promo code
    const promoField = document.getElementById('input-field');
    const userPromo = promoField.value;
    const totalPrice = document.getElementById('total-price');

    if (userPromo == 'stevekaku') {
    }
});

/* // Total Price

const totalPrice = document.getElementById('total-price');
const totalPriceText = totalPrice.innerText;
const previousTotalPrice = parseInt(totalPriceText);
totalPrice.innerText = previousTotalPrice + memoryCost + storageCost + deliveryCost;
 */
