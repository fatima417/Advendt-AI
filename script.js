document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const description = document.getElementById('description').value;

    const bookingList = document.getElementById('booking-list');
    const listItem = document.createElement('li');
    listItem.textContent = `Møte booket: ${date} kl. ${time} - ${description}`;
    bookingList.appendChild(listItem);

    // Reset form
    this.reset();
});

document.getElementById('upload-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const fileInput = document.getElementById('file');
    const fileName = fileInput.files[0].name;

    const documentList = document.getElementById('document-list');
    const listItem = document.createElement('li');
    listItem.textContent = `Dokument lastet opp: ${fileName}`;
    documentList.appendChild(listItem);

    // Reset form
    this.reset();
});
