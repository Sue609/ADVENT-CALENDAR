document.addEventListener('DOMContentLoaded', function(){
    const days = document.querySelectorAll('.day');
    const contentDisplay = document.getElementById('contentDisplay');

    // Functions for changing text color, font size, and saving goals
    function changeTextColor() {
        const textColor = document.getElementById('textColorPicker').value;
        document.getElementById('goalTextArea').style.color = textColor;
    }

    function changeFontSize() {
        const fontSize = document.getElementById('fontSize').value;
        document.getElementById('goalTextArea').style.fontSize = fontSize;
    }

    function saveGoals() {
        const goals = document.getElementById('goalTextArea').value;
        // Save goals to storage or backend
        alert("Goals saved successfully!");
    }

    // Iterating through each day and adding click event listeners
    days.forEach(day => {
        day.addEventListener('click', function(){

            // Getting the id element of the clicked day
            const dayId = this.id;
            let content = ""

            switch (dayId) {
                case 'day1':
                    content = "<h2>Day 1</h2><p>How are you doing this December</p>";
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

                case 'day31':
                    content = "<h2>Set Your 2024 Goals</h2>";
                    content += "<label for='textColor'>Choose Text Color:</label>";
                    content += "<input type='color' id='textColorPicker'>";
                    content += "<label for='fontSize'>Choose Font Size:</label>";
                    content += "<select id='fontSize'>";
                    content += "<option value='12px'>12px</option>";
                    content += "<option value='14px'>14px'>14px</option>";
                    content += "<option value='16px'>16px'>16px</option>";
                    content += "</select>";
                    content += "<textarea id='goalTextArea' rows='5' placeholder='Write your goals here...'></textarea>";
                    content += "<button id='saveButton'>Save Goals</button>";
                    break;

                default:
                    content = "<p>No content available.</p>";
            }

            contentDisplay.innerHTML = content;

            // Event listeners after setting the content
            if (dayId === 'day31') {
                document.getElementById('textColorPicker').addEventListener('change', changeTextColor);
                document.getElementById('fontSize').addEventListener('change', changeFontSize);
                document.getElementById('saveButton').addEventListener('click', saveGoals);
            }
        });
    });

});
