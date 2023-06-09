function CategoryComponent(icon, title) {
  return `<div class="category ${title == "Home" ? "active" : ""}">
      ${icon}
      <p>${title}</p>
    </div>`;
}

function SubscriptionComponent(img, name) {
  return `
    <div class="subscription">
      <img class="profile" src="${img}" />
      <p>${name}</p>
    </div>
  `;
}
