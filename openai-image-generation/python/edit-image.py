# @redocly-chunk {"steps": ["edit-image"]}
from openai import OpenAI
client = OpenAI()

response = client.images.edit((
  model="dall-e-2",
  image=open("sunlit_lounge.png", "rb"),
  mask=open("mask.png", "rb"),
  prompt="A sunlit indoor lounge area with a pool containing a flamingo",
  n=/* @redocly-input {"id": "image-n"} */,
  size="/* @redocly-input {"id": "image-width"} */x/* @redocly-input {"id": "image-height"} */",
)
image_url = response.data[0].url
# @redocly-chunk-end