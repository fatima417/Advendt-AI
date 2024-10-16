document.getElementById('generateBtn').addEventListener('click', async () => {
    const userInput = document.getElementById('userInput').value;

    // Generer tekst med GPT API
    const generatedText = await generateText(userInput);
    document.getElementById('generatedText').innerText = generatedText;

    // Generer bilde med DALL·E API
    const generatedImage = await generateImage(userInput);
    document.getElementById('generatedImage').src = generatedImage;
});

async function generateText(input) {
    // Erstatt med API-kall til GPT
    return `Generert tekst basert på: ${input}`;
}

async function generateImage(input) {
    // Erstatt med API-kall til DALL·E
    return 'https://example.com/generated-image.jpg'; // Eksempel URL
}
