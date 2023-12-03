document.addEventListener('DOMContentLoaded', function(){
    const days = document.querySelectorAll('.day');
    const contentDisplay = document.getElementById('contentDisplay');

    // Iterating through each day and adding click event listeners
    days.forEach(day => {
        day.addEventListener('click', function(){

            // Getting the id element of the clicked day
            const dayId = this.id;
            let content = ""

            switch (dayId) {
                case 'day1':
                    content = "<h2>Day 1</h2><p>How are you doint this December</p>";
                    content += "<img src='/Advent/images/day1.jpg' alt='Day 1 Image'>";
                    break;

                case 'day2':
                    content = "<h2>Day 2 Content</h2><p>Content for Day 2</p>";
                    content += "<img src='/Advent/images/day2.png' alt='Day 2 Image'>";
                    break;

                case 'day3':
                    content = "<h2>Day 3 Content</h2><p>Content for Day 3</p>";
                    content += "<img src='/Advent/images/day3.jpg' alt='Day 3 Image'>";
                    break;

                default:
                    content = "<p>No content available.</p>";
            }

            contentDisplay.innerHTML = content;
        });
    });

});
