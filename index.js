const dotenv = require('dotenv');
const OpenAI = require('openai');

dotenv.config();

const openai =  new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

const main = async () => {
    const response = await openai.images.generate({
        model: 'dall-e-3',
        n: 1,
        size: '1024x1024',
        prompt: 'Layout desktop version for a cologne web store, layout clean, good ux and ui, good navigation, light colors and fashion'
    });
    console.log(response);
};

main();