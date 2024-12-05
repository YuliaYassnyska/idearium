// @redocly-chunk {"steps": ["generate-image"]}
const response = await openai.images.generate({
 model: "dall-e-3",
 prompt: "a white siamese cat",
 n: 1,
 size: "/*@redocly-input {"id": "image-width"}*/x/*@redocly-input {"id": "image-height"}*/",
 @redocly-chunk {"steps": ["image-quality"]}
 quality: "hd"
 @redocly-chunk-end 
});
image_url = response.data[0].url;
// @redocly-chunk-end