const { Configuration, OpenAIApi } = require("openai");
const fs = require("fs");
require("dotenv").config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function imageEdit() {
  try {
    // const response = await openai.createImage({
    //   prompt: "A cute baby sea otter wearing a beret",
    //   n: 1,
    //   size: "1024x1024",
    // });
    // const image_url = response.data.data[0].url;
    // console.log(image_url);

    const response = await openai.createImageEdit(
      fs.createReadStream("dog.png"),
      fs.createReadStream("mask.png"),
      "A cute dog",
      2,
      "1024x1024"
    );
    const image_url = response.data.data[0].url;

    console.log(image_url);
    return image_url;
  } catch (error) {
    console.log(error);
    return;
  }
}

imageEdit();
//console.log(imageEdit());
