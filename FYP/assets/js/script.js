

document.addEventListener("DOMContentLoaded", function () {
    const supervisors = [
        { id: 1, name: "Lecturer. Hamid Sannan", researchDomain: "AI", availableSlots: 2, contactInfo: "Hamid@uol.com" },
        { id: 2, name: "Assistant lecturer. Rabia Ali", researchDomain: "Cybersecurity", availableSlots: 0, contactInfo: "Rabia@uol.com" },
        { id: 3, name: "Dr. Adnan", researchDomain: "Data Science", availableSlots: 1, contactInfo: "Adnan@uol.com" },
        { id: 4, name: "Prof. Maria", researchDomain: "Software Engineering", availableSlots: 1, contactInfo: "Maria@uol.com" },
        { id: 5, name: "Lecturer. zain", researchDomain: "Machine Learning", availableSlots: 2, contactInfo: "Zain@uol.com" },
        { id: 6, name: "Lecturer. Abid", researchDomain: "Web Development", availableSlots: 2, contactInfo: "Abid@uol.com" },
        { id: 7, name: "Lecturer. Ahmed", researchDomain: "Data Engineer", availableSlots: 0, contactInfo: "Ahmed@uol.com" },
        { id: 8, name: "Assistent Lecturer. Musa", researchDomain: "AI", availableSlots: 2, contactInfo: "Musa@uol.com" },
        { id: 9, name: "Dr. Asma", researchDomain: "Data Engineering", availableSlots: 1, contactInfo: "Asma@uol.com" },
        { id: 10, name: "Lecturer. Haroon", researchDomain: "Machine Learning", availableSlots: 0, contactInfo: "Haroon@uol.com" },
    ];
    
        function displaySupervisors(list) {
            const container = document.getElementById("supervisor-list");
            if (!container) return;
    
            container.innerHTML = "";
            list.forEach(sup => {
                container.innerHTML += `
                    <div class="bg-white p-4 mb-4 rounded shadow-md">
                        <h2 class="text-xl font-bold">${sup.name}</h2>
                        <p>Research: ${sup.researchDomain}</p>
                        <p>Slots: ${sup.availableSlots > 0 ? sup.availableSlots : "Full"}</p>
                        <p>Contact: ${sup.contactInfo}</p>
                        <button onclick="bookmark(${sup.id})" class="bg-blue-500 text-white px-4 py-2 mt-2 rounded">Bookmark</button>
                    </div>
                `;
            });
        }
    
        function bookmark(id) {
            let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
            if (!bookmarks.includes(id)) {
                bookmarks.push(id);
                localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
                alert("Supervisor Bookmarked!");
            } else {
                alert("Already Bookmarked.");
            }
        }
    
        window.bookmark = bookmark;
    
        document.getElementById("search")?.addEventListener("input", function () {
            const query = this.value.toLowerCase();
            displaySupervisors(supervisors.filter(sup => sup.researchDomain.toLowerCase().includes(query)));
        });
    
        displaySupervisors(supervisors);
    
        // For bookmarks.html page
        const bookmarkedListContainer = document.getElementById("bookmarked-list");
        if (bookmarkedListContainer) {
            let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
            if (bookmarks.length === 0) {
                bookmarkedListContainer.innerHTML = "<p>No supervisors bookmarked.</p>";
            } else {
                let bookmarkedSupervisors = supervisors.filter(sup => bookmarks.includes(sup.id));
                bookmarkedSupervisors.forEach(sup => {
                    bookmarkedListContainer.innerHTML += `
                        <div class="bg-white p-4 mb-4 rounded shadow-md">
                            <h2 class="text-xl font-bold">${sup.name}</h2>
                            <p>Research: ${sup.researchDomain}</p>
                            <p>Slots: ${sup.availableSlots > 0 ? sup.availableSlots : "Full"}</p>
                            <p>Contact: ${sup.contactInfo}</p>
                        </div>
                    `;
                });
            }
        }
    });
    