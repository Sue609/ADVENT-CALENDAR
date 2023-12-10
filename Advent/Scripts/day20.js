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
        const currentLocation = document.getElementById('currentLocation').value;
        const currentEmotion = document.getElementById('currentEmotion').value;
        const currentAchievement = document.getElementById('currentAchievement').value;

        // Expanded personalized story using the user inputs
        const storyText = 
            `Dear ${name},
            I hope this letter finds you well!
            As I pen down these words, my heart swells with overwhelming emotions and gratitude that words
            can hardly express. Reflecting on 2023, I'm filled with immense happiness and a sense of
            accomplishment as I ponder our journey.

            Those sleepless nights, battling through challenges like ${challenges}, became
            our strength, molding us with invaluable lessons that have sculpted us into who
            we are today.

            Remember when we took that leap of faith with ALX-Africa? Who knew it would be a blessing in
            disguise? The challenges, uncertainties, and moments of doubt led to where we stand today.
            Our vision of ${careerVision} is clearer than ever. 
            
            Our journey has been a rollercoaster, shaping us for the better. Once-distant personal goals
            are now within reach. I'm excited about the future. In 10 years, I envision us achieving
            ${personalGoals}.
            The sheer determination we've shown gives me confidence.
            
            Each experience, including ${lesson}, contributed to sculpting us into who we are today.
            The message that resonates within us, "${personalMessage}," has been our guiding compass
            through storms and calm seas alike. We navigated through obstacles, aligning ourselves
            perfectly with our vision of ${careerVision}.

            Envisioning ourselves 10 years from now, standing in ${currentLocation}, overwhelmed
            with ${currentEmotion}, we celebrate the triumphs, including ${currentAchievement}.
            Remember the resilience we've shown, the message: ${personalMessage}.
            It's been our beacon through tough times.

            Let's revel in our achievements, cherish the growth, and embrace the happiness that comes
            from our resilience and hard work.
            Here's to the future, to continued success, and the convergence of dreams and reality.
            Our decision to take that leap of faith was nothing short of destiny's nudge,
            and I'm forever grateful for it. With unending pride, gratitude, and anticipation
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
            orientation: 'portrait',
            unit: 'pt',
            lineHeight: 1.2
        });
    
        const storyText = document.getElementById('storyOutput').textContent;
    
        let yPos = 50;
        let fontSize = 12;
        let lineHeight = 1.3;
    
        const splitText = (text, maxWidth) => {
            return doc.setFontSize(fontSize).splitTextToSize(text, maxWidth);
        };
    
        const addTextToDoc = (textLines) => {
            textLines.forEach(line => {
                doc.text(20, yPos, line);
                yPos += fontSize * lineHeight;
            });
        };
    
        const totalPages = () => {
            let totalHeight = 0;
            let remainingText = storyText;
    
            while (remainingText.trim().length > 0) {
                const textLines = splitText(remainingText, doc.internal.pageSize.width - 40);
                const textHeight = doc.getTextDimensions(textLines[0]).h * textLines.length;
    
                if (yPos + textHeight > doc.internal.pageSize.height - 40) {
                    doc.addPage();
                    yPos = 50;
                } else {
                    totalHeight += textHeight;
                    addTextToDoc(textLines);
                    yPos += 10;
                    remainingText = remainingText.substring(textLines.join('').length);
                }
            }
            return Math.ceil(totalHeight / (doc.internal.pageSize.height - 40));
        };
    
        const totalPagesCount = totalPages();
    
        if (totalPagesCount > 1) {
            doc.deletePage(totalPagesCount);
            doc.save('FutureLetter.pdf');
        } else {
            doc.save('FutureLetter.pdf');
        }
    }
    

    // Attach click event to the download button to trigger PDF download
    downloadButton.addEventListener('click', downloadAsPDF);
}
