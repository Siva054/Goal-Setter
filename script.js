var myForm = document.getElementById('myForm');
    var myInput = document.getElementById('myInput');
    var myList = document.getElementById('myList');

    myForm.addEventListener("submit", (data) => {
        data.preventDefault();
        if (myInput.value.trim() !== "") {
            createItem(myInput.value);
        }
    });

    const createItem = (goal) => {
        let myTemplate = `<li>${goal}<button onclick="deleteItem(this)">delete</button></li>`;
        myList.insertAdjacentHTML("beforeend", myTemplate);
        myInput.value = "";
        myInput.focus();
    }

    function deleteItem(button) {
        const listItem = button.parentElement;
        listItem.classList.add('fadeOut'); // Optionally add a fade-out animation
        setTimeout(() => listItem.remove(), 300); // Remove after animation
    }