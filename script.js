const menuData = {
  cakes: ["Chocolate Fudge Cake", "Red Velvet Cake", "Vanilla Cream Cake"],
  cookies: ["Choco Chip Cookies", "Oatmeal Raisin Cookies", "Butter Cookies"],
  pastries: ["Strawberry Danish", "Apple Turnover", "Cream Horn"]
};

function showItems(category) {
  const menuDiv = document.getElementById("menu-items");
  menuDiv.innerHTML = `<h3>${category.charAt(0).toUpperCase() + category.slice(1)}</h3>`;
  menuData[category].forEach(item => {
    menuDiv.innerHTML += `<p>${item}</p>`;
  });
}

document.getElementById("orderForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const item = document.getElementById("item").value;
  const quantity = document.getElementById("quantity").value;
  const confirmation = document.getElementById("orderConfirmation");
  confirmation.innerHTML = `<p>Thank you, <strong>${name}</strong>! Your order of <strong>${quantity}</strong> <em>${item}</em>(s) has been received.</p>`;
  this.reset();
});
