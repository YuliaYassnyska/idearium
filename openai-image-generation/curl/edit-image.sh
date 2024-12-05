# @redocly-chunk {"steps": ["edit-image"]}
curl https://api.openai.com/v1/images/edits \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -F model="dall-e-2" \
  -F image="@sunlit_lounge.png" \
  -F mask="@mask.png" \
  -F prompt="A sunlit indoor lounge area with a pool containing a flamingo" \
  -F n=/* @redocly-input {"id": "image-n"} */ \
  -F size="/* @redocly-input {"id": "image-width"} */x/* @redocly-input {"id": "image-height"} */",
# @redocly-chunk-end
