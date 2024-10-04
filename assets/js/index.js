window.onload = () => {
    const accountMenu = document.getElementById("account");
    const dropdown = document.getElementById("account-menu");

    let timeoutId; // Variable to store the timeout ID

    accountMenu.onmouseover = () => {
        clearTimeout(timeoutId); // Clear any existing timeout
        dropdown.style.display = "flex";
    };

    accountMenu.onmouseout = () => {
        timeoutId = setTimeout(() => {
            dropdown.style.display = "none";
        }, 3000); // 3000 milliseconds = 3 seconds
    };

    dropdown.onmouseover = () => {
        clearTimeout(timeoutId); // Clear the timeout if the mouse is over the dropdown
    };

    dropdown.onmouseout = () => {
        timeoutId = setTimeout(() => {
            dropdown.style.display = "none";
        }, 3000); // 3000 milliseconds = 3 seconds
    };

    // Open carts
    const cartBtn = document.getElementById("cart");
    cartBtn.onclick = () => {
        const overlay = document.getElementById("cart-overlay");
        const cartList = document.getElementById("cart-list");
        overlay.style.display = "block";
        cartList.style.animation = "cartlist 0.4s linear forwards";
    };

    const closeCart = document.getElementById("close-cart");
    closeCart.onclick = () => {
        const cartList = document.getElementById("cart-list");
        cartList.style.animation = "cartlistclose 0.4s linear forwards";
        const overlay = document.getElementById("cart-overlay");
        setTimeout(() => {
            console.log("working");
            overlay.style.display = "none";
        }, 500);
    };

    // INCREASE AND DECREASE QNT
    const increaseQnt = document.getElementsByClassName("increase-qnt");
    for (let btn of increaseQnt) {
        btn.onclick = () => {
            const div = btn.parentElement;
            const label = div.getElementsByClassName("qnt")[0];
            const text = Number(label.innerHTML);
            label.innerHTML = text + 1;
        };
    }

    const decreaseQnt = document.getElementsByClassName("decrease-qnt");
    for (let btn of decreaseQnt) {
        btn.onclick = () => {
            const div = btn.parentElement;
            const label = div.getElementsByClassName("qnt")[0];
            const text = Number(label.innerHTML);
            if (text > 1) label.innerHTML = text - 1;
        };
    }

    setInterval(() => {
        const time = new Date().toLocaleTimeString().split(":");
        const hour = document.getElementById("hour");
        const minute = document.getElementById("minute");
        const second = document.getElementById("second");

        hour.innerHTML = time[0];
        minute.innerHTML = time[1];
        second.innerHTML = time[2];
    }, 1000);
};