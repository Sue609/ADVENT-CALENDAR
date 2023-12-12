function courageStories() {
    const storyForm = document.getElementById('storyForm');
    const storyContainer = document.getElementById('storyContainer');
    const submissionMessage = document.getElementById('submissionMessage');
  
    storyForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      // Get the entered story from the form
      const storyText = document.getElementById('story').value;
  
      // Check if the storyText is empty before proceeding
      if (storyText.trim() !== '') {
        // Create a new div to display the story
        const storyDiv = document.createElement('div');
        storyDiv.classList.add('story-item');
        storyDiv.textContent = storyText;
  
        // Append the story to the story container
        storyContainer.appendChild(storyDiv);
  
        // Clear the form after submission
        storyForm.reset();
  
        // Show submission message
        submissionMessage.textContent = "Your story has been submitted!";
        submissionMessage.style.display = "block";
        setTimeout(function() {
          submissionMessage.style.display = "none"; // Hide the message after 3 seconds
        }, 3000);
      } else {
        alert("Please write your story before submitting.");
      }
    });  
  
  
}