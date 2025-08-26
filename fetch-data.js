// Function to fetch and display user data
async function fetchUserData() {
    const apiUrl = "https://jsonplaceholder.typicode.com/users";
    const dataContainer = document.getElementById("api-data");

    try {
        // Fetch data
        const response = await fetch(apiUrl);
        const users = await response.json();

        // Clear loading message
        dataContainer.innerHTML = "";

        // Create a list
        const userList = document.createElement("ul");

        // Loop through users and add list items
        users.forEach(user => {
            const listItem = document.createElement("li");
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Append list to container
        dataContainer.appendChild(userList);
    } catch (error) {
        dataContainer.innerHTML = "Failed to load user data.";
        console.error("Error fetching data:", error);
    }
}

// Run after DOM is loaded
document.addEventListener("DOMContentLoaded", fetchUserData);
