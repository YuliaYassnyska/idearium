# @redocly-chunk {"steps": ["edit-image"]}
const response = await openai.images.edit({
 model: "dall-e-2",
 image: fs.createReadStream("sunlit_lounge.png"),
 mask: fs.createReadStream("mask.png"),
 prompt: "A sunlit indoor lounge area with a pool containing a flamingo",
 n: /* @redocly-input {"id": "image-n"} */,
 size: "/* @redocly-input {"id": "image-width"} */x/* @redocly-input {"id": "image-height"} */",
});
image_url = response.data[0].url;
# @redocly-chunk-end
