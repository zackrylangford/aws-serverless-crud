document.getElementById('getAllItems').addEventListener('click', function() {
    fetch('https://api/')
        .then(response => response.json())
        .then(data => {
            document.getElementById('items').innerText = JSON.stringify(data, null, 2);
        });
});

document.getElementById('getItem').addEventListener('click', function() {
    const id = document.getElementById('getItemId').value;
    fetch(`https://api/${id}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('singleItem').innerText = JSON.stringify(data, null, 2);
        });
});

document.getElementById('deleteItem').addEventListener('click', function() {
    const id = document.getElementById('deleteItemId').value;
    console.log("Delete this id please: " + id);
    fetch(`https://api/${id}`, { method: 'DELETE' })
        .then(response => response.json())
        .then(data => {
            alert('Item deleted');
        });
});


document.getElementById('addItem').addEventListener('click', function() {
    const id = document.getElementById('newItemId').value;
    const name = document.getElementById('newItemName').value;
    fetch('https://api/', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id, name })
    })
        .then(response => response.json())
        .then(data => {
            alert('Item added');
        });
});
