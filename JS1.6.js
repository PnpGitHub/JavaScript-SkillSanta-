function addContact(id, refreshCallback) {
    refreshCallback();
  
}

function refreshContactList() {
    alert('Hello World');
}

addContact(1, refreshContactList);