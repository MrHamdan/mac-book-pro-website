function updateCost(product, cost) {
    const selectedProductCost = document.getElementById(product + '-cost')
    selectedProductCost.innerText = cost;
    calculateTotal();
}


// Calculate Total Price

function calculateTotal() {
    const totalPrice = document.getElementById('total-price');
    const totalPriceUsingPromoCode = document.getElementById('total-cost');
    const memoryCost = document.getElementById('memory-cost').innerText;
    const storageCost = document.getElementById('storage-cost').innerText;
    const deliveryCost = document.getElementById('delivery-cost').innerText;


    const total = parseInt(memoryCost) + parseInt(storageCost) + parseInt(deliveryCost) + 1299;
    totalPrice.innerText = total;
    totalPriceUsingPromoCode.innerText = total;


}


// Handle Memory Events

document.getElementById('8gb-button').addEventListener('click', function () {

    updateCost('memory', 0);

});

document.getElementById('16gb-button').addEventListener('click', function () {

    updateCost('memory', 180);

});

// Handle Storage Events

document.getElementById('256gb-button').addEventListener('click', function () {

    updateCost('storage', 0);

});


document.getElementById('512gb-button').addEventListener('click', function () {

    updateCost('storage', 100);

});


document.getElementById('1tb-button').addEventListener('click', function () {

    updateCost('storage', 180);

});


// Handle Delivery Events

document.getElementById('free-delivery').addEventListener('click', function () {

    updateCost('delivery', 0);

});


document.getElementById('paid-delivery').addEventListener('click', function () {

    updateCost('delivery', 20);

});




// Handle Apply Promo Code Events For Discounted Total

document.getElementById('apply-button').addEventListener('click', function () {
    const getPromoCode = document.getElementById('input-field');
    const promoCode = getPromoCode.value;
    const totalPriceUsingPromoCode = document.getElementById('total-cost')
    const totalPrice = document.getElementById('total-price');
    if (promoCode.toLowerCase() == 'stevekaku') {
        const promoDiscount = parseFloat(totalPrice.innerText) * 0.2;
        totalPriceUsingPromoCode.innerText = parseFloat(totalPrice.innerText) - promoDiscount;
    }
    else {
        alert('Please Provide Valid Promo Code');
    }

    // Clear Input Field
    getPromoCode.value = '';
})

