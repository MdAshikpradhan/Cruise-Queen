function ticketHandler(product, isIncrease){
    const ticketInput = document.getElementById(product + '-count');
    const ticketCount = getInputValue(product);
    let ticketNewCount = ticketCount;
    if(isIncrease == true){
       ticketNewCount = ticketNewCount + 1;
    }
    if(isIncrease == false && ticketNewCount > 0){
       ticketNewCount = ticketNewCount - 1;
    }
    ticketInput.value = ticketNewCount;

    let ticketTotal = 0;
    if(product == 'firstClassTicket'){
        ticketTotal = ticketNewCount * 150;
    }
    if(product == 'economyTicket'){
        ticketTotal = ticketNewCount * 100;
    }
    document.getElementById('sub-total').innerHTML = '$' + ticketTotal;
    TotalCalculator()
}
    // Total Calculator
function TotalCalculator(){
    const firstClassTicketCount = getInputValue('firstClassTicket');
    const economyTicketCount = getInputValue('economyTicket');
    const subTotal = firstClassTicketCount * 150 + economyTicketCount * 100;
    document.getElementById('sub-total').innerHTML = '$' + subTotal;
    const vat = subTotal * .1;
    document.getElementById('get-vat').innerHTML = '$' + vat;
    const grandTotal = subTotal + vat;
    document.getElementById('total').innerHTML = '$' + grandTotal;
}
    // Get Input Value 
function getInputValue(product){
    const productInput = document.getElementById(product + '-count');
    const productCount = parseInt(productInput.value);
    return productCount;
}
    // Booking Confirmation
const booking = document.getElementById('booking');
booking.addEventListener('click', function(){
   const bookingArea = document.getElementById('booking-area');
   bookingArea.style.display = 'none';
   var bookingConfirm = document.getElementById('booking-confirm');
   bookingConfirm.style.display = 'block';
})
