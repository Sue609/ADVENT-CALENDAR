function futureIntrospection() {
    document.getElementById('storyForm').addEventListener('submit', function(event) {
        event.preventDefault();

        // Retrieve values from form inputs
        const name = document.getElementById('name').value;
        const challenges = document.getElementById('challenges').value;
        const lesson = document.getElementById('lesson').value;
        const careerVision = document.getElementById('careerVision').value;
        const personalGoals = document.getElementById('personalGoals').value;
        const personalMessage = document.getElementById('personalMessage').value;
        const currentLocation = document.getElementById('currentLocation').value; // Added field for current location
        const currentEmotion = document.getElementById('currentEmotion').value; // Added field for current emotion
        const currentAchievement = document.getElementById('currentAchievement').value; // Added field for current achievement

        // Expanded personalized story using the user inputs
        const storyText = `Dear ${name},
            I hope this letter finds you well! 😊 
            As I pen down these words, my heart swells with overwhelming emotions and gratitude that words
            can hardly express. Reflecting on 2023, I'm filled with immense happiness and a sense of
            accomplishment as I ponder our journey.
            Those sleepless nights, battling through challenges like ${challenges}, became our strength,
            molding us with invaluable lessons that have sculpted us into who we are today.
            Remember when we took that leap of faith with ALX-Africa? Who knew it would be a blessing in
            disguise? The challenges, uncertainties, and moments of doubt led to where we stand today.
            Our vision of ${careerVision} is clearer than ever. 
            Our journey has been a rollercoaster, shaping us for the better. Once-distant personal goals
            are now within reach. I'm excited about the future. In 10 years, I envision us achieving
            ${personalGoals}.
            The sheer determination we've shown gives me confidence.
            Each experience, including ${lesson}, contributed to sculpting us into who we are today.
            The message that resonates within us, "${personalMessage}," has been our guiding compass through
            storms and calm seas alike. We navigated through obstacles, aligning ourselves perfectly
            with our vision of ${careerVision}.
            Envisioning ourselves 10 years from now, standing in ${currentLocation}, overwhelmed
            with ${currentEmotion}, we celebrate the triumphs, including ${currentAchievement}.
            Remember the resilience we've shown, the message: ${personalMessage}.
            It's been our beacon through tough times.
            Let's revel in our achievements, cherish the growth, and embrace the happiness that comes
            from our resilience and hard work.
            Here's to the future, to continued success, and the convergence of dreams and reality. 🚀✨
            Our decision to take that leap of faith was nothing short of destiny's nudge,
            and I'm forever grateful for it. 🙏With unending pride, gratitude, and anticipation
            for the journey ahead.        
            Warm regards,
            ${name}`;

        // Display the generated story in the output div
        document.getElementById('storyOutput').innerHTML = storyText;
    });

    // Get the download button element
    const downloadButton = document.getElementById('downloadButton');

    function downloadAsPDF() {
        const doc = new jsPDF({
            orientation: 'portrait', // Set the orientation to portrait
            unit: 'pt', // Use points as the unit
            lineHeight: 1.2 // Adjust line height for better spacing
        });

        // Retrieve text content from output div
        const storyText = document.getElementById('storyOutput').textContent;

        // Split text into an array of paragraphs based on line breaks ('\n')
        let paragraphs = storyText.split('\n');

        // Set initial y position for text
        let yPos = 50; // Start lower to give space for title and margins

        // Set initial font size and line height
        let fontSize = 12;
        let lineHeight = 1.2;

        // Add each paragraph to the document
        paragraphs.forEach(paragraph => {
            let textLines = doc.setFontSize(fontSize).splitTextToSize(paragraph, doc.internal.pageSize.width - 40); // Adjust the width and margins

            // Check if the text fits within the page, otherwise reduce the font size
            while (doc.getTextDimensions(textLines[0]).h * textLines.length > doc.internal.pageSize.height - 40) {
                fontSize -= 0.5;
                textLines = doc.setFontSize(fontSize).splitTextToSize(paragraph, doc.internal.pageSize.width - 40);
            }

            // Add each line of the paragraph with adjusted font size
            textLines.forEach(line => {
                doc.text(20, yPos, line); // Adjust the margins as needed
                yPos += fontSize * lineHeight; // Increase yPos based on font size and line height
            });

            yPos += 10; // Add extra space between paragraphs
        });

        // Save the PDF
        doc.save('FutureLetter.pdf');
    }

    // Attach click event to the download button to trigger PDF download
    downloadButton.addEventListener('click', downloadAsPDF);
}
