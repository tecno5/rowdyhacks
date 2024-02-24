const express = require('express');
const openai = require('openai');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Replace 'your_openai_api_key_here' with your actual OpenAI API key
openai.apiKey = 'your_openai_api_key_here';

app.use(bodyParser.json());

app.post('/ask', async (req, res) => {
  try {
    const question = req.body.question;
    const response = await openai.ChatCompletion.create({
      model: "gpt-3.5-turbo",
      messages: [
          {"role": "system", "content": "You are a helpful assistant."},
          {"role": "user", "content": question},
      ],
    });
    
    res.json({ answer: response.data.choices[0].message.content });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('An error occurred');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
