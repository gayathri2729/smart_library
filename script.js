
// ===== BOOK REQUEST =====
function requestBook(bookName) {
    let requests = JSON.parse(localStorage.getItem("requests")) || [];

    requests.push({
        book: bookName,
        status: "Pending"
    });

    localStorage.setItem("requests", JSON.stringify(requests));
    alert("Book Requested!");
}

// ===== LOAD REQUESTS =====
function loadRequests() {
    let requests = JSON.parse(localStorage.getItem("requests")) || "";
    let table = document.getElementById("requestTable");

    table.innerHTML = "";

    requests.forEach((r, index) => {
        table.innerHTML += `
        <tr>
            <td>${r.book}</td>
            <td>${r.status}</td>
            <td><button onclick="deleteRequest(${index})">Cancel</button></td>
        </tr>`;
    });
}

// ===== DELETE REQUEST =====
function deleteRequest(index) {
    let requests = JSON.parse(localStorage.getItem("requests"));
    requests.splice(index, 1);
    localStorage.setItem("requests", JSON.stringify(requests));
    location.reload();
}

// ===== ADMIN LOAD =====
function loadAdmin() {
    let requests = JSON.parse(localStorage.getItem("requests")) || [];
    let table = document.getElementById("adminTable");

    table.innerHTML = "";

    requests.forEach((r, index) => {
        table.innerHTML += `
        <tr>
            <td>User</td>
            <td>${r.book}</td>
            <td>${r.status}</td>
            <td>
                <button onclick="approve(${index})">Approve</button>
                <button onclick="reject(${index})">Reject</button>
            </td>
        </tr>`;
    });
}

// ===== APPROVE =====
function approve(index) {
    let requests = JSON.parse(localStorage.getItem("requests"));
    requests[index].status = "Approved";
    localStorage.setItem("requests", JSON.stringify(requests));
    location.reload();
}

// ===== REJECT =====
function reject(index) {
    let requests = JSON.parse(localStorage.getItem("requests"));
    requests[index].status = "Rejected";
    localStorage.setItem("requests", JSON.stringify(requests));
    location.reload();
}
