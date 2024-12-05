# @redocly-chunk {"steps": ["generate-image"]}
from openai import OpenAI
client = OpenAI()

response = client.images.generate(
  model="dall-e-3",
  prompt="a white siamese cat",
  size="/* @redocly-input {"id": "image-width"} */x/* @redocly-input {"id": "image-height"} */",
  # @redocly-chunk {"steps": ["image-quality"]}
  quality="hd"
  # @redocly-chunk-end
  n=1,
)

image_url = response.data[0].url
# @redocly-chunk-end