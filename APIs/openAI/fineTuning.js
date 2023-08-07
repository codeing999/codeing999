const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function createFile() {
  try {
    const response = await openai.createFile(fs.createReadStream("mydata.jsonl"), "fine-tune");
  } catch (error) {
    console.log(error);
  }
}

async function fineTune(training_file) {
  try {
    const response = await openai.createFineTune({
      training_file: training_file,
    });
  } catch (error) {
    console.log(error);
  }
}
