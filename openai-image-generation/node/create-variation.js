const response = await openai.images.createVariation({
 model: "dall-e-2",
 image: fs.createReadStream("corgi_and_cat_paw.png"),
 n: 1,
 size: "1024x1024"
});
image_url = response.data[0].url;