function futureIntrospection() {
    document.getElementById('storyForm').addEventListener('submit', function(event) {
        event.preventDefault();

        console.log('Form submitted');

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
        const storyText = `
            <p>Dear ${name},</p>
            <p>I hope this letter finds you well! 😊</p> 
            <p>As I pen down these words, my heart swells with overwhelming emotions and gratitude that words can hardly express.</p>
            <p>Reflecting on 2023, I'm filled with immense happiness and a sense of accomplishment as I ponder our journey.</p>
            <p>Those sleepless nights, battling through challenges like ${challenges}, became our strength, molding us with invaluable lessons that have sculpted us into who we are today.</p>
            <p>Remember when we took that leap of faith with ALX-Africa? Who knew it would be a blessing in disguise? The challenges, uncertainties, and moments of doubt led to where we stand today.</p>
            <p>Our vision of ${careerVision} is clearer than ever.</p> 
            <p>Our journey has been a rollercoaster, shaping us for the better. Once-distant personal goals are now within reach.</p>
            <p>I'm excited about the future. In 10 years, I envision us achieving ${personalGoals}. The sheer determination we've shown gives me confidence.</p>
            <p>Each experience, including ${lesson}, contributed to sculpting us into who we are today.</p>
            <p>The message that resonates within us, "${personalMessage}," has been our guiding compass through storms and calm seas alike.</p>
            <p>We navigated through obstacles, aligning ourselves perfectly with our vision of ${careerVision}.</p>
            <p>Envisioning ourselves 10 years from now, standing in ${currentLocation}, overwhelmed with ${currentEmotion}, we celebrate the triumphs, including ${currentAchievement}.</p>
            <p>Remember the resilience we've shown, the message: ${personalMessage}. It's been our beacon through tough times.</p>
            <p>Let's revel in our achievements, cherish the growth, and embrace the happiness that comes from our resilience and hard work.</p>
            <p>Here's to the future, to continued success, and the convergence of dreams and reality. 🚀✨</p>
            <p>Our decision to take that leap of faith was nothing short of destiny's nudge, and I'm forever grateful for it. 🙏</p>
            <p>With unending pride, gratitude, and anticipation for the journey ahead.</p>        
            <p>Warm regards,</p>
            <p>${name}</p>`;

        // Display the generated story in the output div
        document.getElementById('storyOutput').innerHTML = storyText;
    });

    // Get the download button element
    const downloadButton = document.getElementById('downloadButton');

    // Function to generate PDF and download it
    function downloadAsPDF() {
        const doc = new jsPDF();
        const storyText = document.getElementById('storyOutput').innerHTML;
        doc.text(storyText, 10, 10);
        doc.save('FutureLetter.pdf');
    }

    // Attach click event to the download button to trigger PDF download
    downloadButton.addEventListener('click', downloadAsPDF);
}

