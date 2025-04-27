document.addEventListener('DOMContentLoaded', () => {
    const now = new Date();
    const formattedDate = now.toLocaleString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
    document.getElementById('date').textContent = formattedDate;

    const items = JSON.parse(localStorage.getItem('items')) || [];
    let total = 0;
    items.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${item.itemName}</strong><br><img src="${item.image}" width="100"><br>Cost: $${item.cost}<br>Days to Deliver: ${item.daysToDeliver}`;
        document.getElementById('cartList').appendChild(li);
        total += item.cost;
    });

    document.getElementById('totalCost').textContent = `Total Cost: $${Math.ceil(total)}`;

    document.getElementById('logout').addEventListener('click', () => {
        localStorage.clear();
        sessionStorage.clear();
        location.href = 'login.html';
    });
});
