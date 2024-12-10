# @redocly-chunk {"steps": ["generate-image"]}
curl https://api.openai.com/v1/images/generations \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -d '{
    "model": "dall-e-3",
    "prompt": "a white siamese cat",
    "n": 1,
    "size": "/* @redocly-input {"id": "image-width"} */x/* @redocly-input {"id": "image-height"} */"
    /* @redocly-chunk {"steps": ["image-quality"]} */
    "quality": "hd"
    /* @redocly-chunk-end */
  }'
# @redocly-chunk-end