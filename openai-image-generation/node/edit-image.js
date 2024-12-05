const response = await openai.images.edit({
 model: "dall-e-2",
 image: fs.createReadStream("sunlit_lounge.png"),
 mask: fs.createReadStream("mask.png"),
 prompt: "A sunlit indoor lounge area with a pool containing a flamingo",
 n: 1,
 size: "1024x1024"
});
image_url = response.data[0].url;