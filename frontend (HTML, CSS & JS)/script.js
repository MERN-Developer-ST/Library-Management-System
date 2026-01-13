const API_URL = "http://localhost:5000/api/books";

fetch(API_URL)
  .then(response => response.json())
  .then(data => {
    const bookList = document.getElementById("bookList");

    data.forEach(book => {
      const div = document.createElement("div");
      div.className = "book";
      div.innerHTML = `
        <strong>${book.title}</strong><br>
        Author: ${book.author}<br>
        Available: ${book.available}
      `;
      bookList.appendChild(div);
    });
  })
  .catch(error => {
    console.error("Error fetching books:", error);
  });
