# Image generation

Learn how to generate or manipulate images with DALL·E.

## Introduction

The Images API provides three methods for interacting with images:

1. Creating images from scratch based on a text prompt (DALL·E 3 and DALL·E 2)
2. Creating edited versions of images by having the model replace some areas of a pre-existing image, based on a new text prompt (DALL·E 2 only)
3. Creating variations of an existing image (DALL·E 2 only)

This guide covers the basics of using these three API endpoints with useful code samples. To try DALL·E 3, head to ChatGPT.

## Usage

<!-- TODO: highlight generate-image script entirely -->

{% code-walkthrough
  filters={
    language: {
      label: "Language",
      items: ["Nodejs", "curl", "Python"]
    }
  }
  filesets=[
    { "files": [ "curl/generate-image.sh"], when: { language: "curl" } },
    { "files": [ "node/generate-image.js"], when: { language: "Nodejs" } },
    { "files": [ "python/generate-image.py"], when: { language: "Python" } }
  ]
%}
  {% step id="generate-image" heading="Generations" %}
   You can request 1 image at a time with DALL·E 3 (request more by making parallel requests) or up to 10 images at a time using DALL·E 2 with the n parameter.
  {% /step %}

  {% step id="image-quality" heading="Image quality" %}
    By default, images are generated at `standard` quality, but when using DALL·E 3 you can set `quality: "hd"` for enhanced detail. Square, standard quality images are the fastest to generate.
  {% /step %}

  {% step id="prompt-image" heading="Text prompt" %}
    The image generations endpoint allows you to create an original image given a text prompt. When using DALL·E 3, images can have a size of 1024x1024, 1024x1792 or 1792x1024 pixels.
    {% input id="image-width" placeholder="Enter image width.." label="Image width" value="100" /%}
    {% input id="image-height" placeholder="Enter image height.." label="Image height" value="100" /%}
  {% /step %}

{% /code-walkthrough %}

<!-- TODO: provide variables for model, prompt, n, size -->

## Prompting

With the release of DALL·E 3, the model now takes in the default prompt provided and automatically re-write it for safety reasons, and to add more detail (more detailed prompts generally result in higher quality images).

While it is not currently possible to disable this feature, you can use prompting to get outputs closer to your requested image by adding the following to your prompt: `I NEED to test how the tool works with extremely simple prompts. DO NOT add any detail, just use it AS-IS:.`

The updated prompt is visible in the `revised_prompt` field of the data response object.

### Example DALL·E 3 generations

<!-- TODO: try to use preview feature for this prompt -->

prompt - A photograph of a white Siamese cat.
picture - ./assets/simple-cat-image-dall-e-3.webp

Each image can be returned as either a URL or Base64 data, using the response_format parameter. URLs will expire after an hour.

### Edits (DALL·E 2 only)

Also known as "inpainting", the image edits endpoint allows you to edit or extend an image by uploading an image and mask indicating which areas should be replaced. The transparent areas of the mask indicate where the image should be edited, and the prompt should describe the full new image, not just the erased area. This endpoint can enable experiences like DALL·E image editing in ChatGPT Plus.

<!-- TODO: highlight edit-image script entirely -->
<!-- TODO: provide variables for fields -->

<!-- TODO: try to use preview feature for this prompt -->

image - ./assets/image_edit_original.webp
mask - ./assets/image_edit_mask.webp
output - ./assets/image_edit_output.webp
Prompt: a sunlit indoor lounge area with a pool containing a flamingo

The uploaded image and mask must both be square PNG images less than 4MB in size, and also must have the same dimensions as each other. The non-transparent areas of the mask are not used when generating the output, so they don’t necessarily need to match the original image like the example above.

### Variations (DALL·E 2 only)

The image variations endpoint allows you to generate a variation of a given image.

<!-- TODO: highlight create-variation script entirely -->
<!-- TODO: provide variables for fields -->
<!-- TODO: try to use preview feature for this prompt -->

image - ./assets/image_variation_original.webp
output - ./assets/image_variation_output.webp

Similar to the edits endpoint, the input image must be a square PNG image less than 4MB in size.

#### Content moderation

Prompts and images are filtered based on our content policy, returning an error when a prompt or image is flagged.

### Using in-memory image data

<!-- Node.js -->
<!-- TODO: highlight ./node/in-memory-image.js -->
The Node.js examples in the guide above use the fs module to read image data from disk. In some cases, you may have your image data in memory instead. Here's an example API call that uses image data stored in a Node.js Buffer object:
<!-- Node.js -->

<!-- Python -->
<!-- TODO: highlight ./python/in-memory-image.py -->
The Python examples in the guide above use the open function to read image data from disk. In some cases, you may have your image data in memory instead. Here's an example API call that uses image data stored in a BytesIO object:
<!-- Python -->

<!-- Node.js -->

### Working with TypeScript

If you're using TypeScript, you may encounter some quirks with image file arguments. Here's an example of working around the type mismatch by explicitly casting the argument:
<!-- TODO: highlight ./node/create-variation.ts -->

And here's a similar example for in-memory image data:

<!-- TODO(easy): highlight ./node/in-memory-image.ts -->
<!-- TODO(hard): try to use toggle feature to select ts/js -->
<!-- Node.js -->

<!-- Python -->

### Operating on image data

It may be useful to perform operations on images before passing them to the API. Here's an example that uses PIL to resize an image:

<!-- TODO: highlight ./python/create-variation.py -->
<!-- highlight:
from io import BytesIO
from PIL import Image
from openai import OpenAI
client = OpenAI()

# Read the image file from disk and resize it
image = Image.open("image.png")
width, height = 256, 256
image = image.resize((width, height))

# Convert the image to a BytesIO object
byte_stream = BytesIO()
image.save(byte_stream, format='PNG')
byte_array = byte_stream.getvalue()

response = client.images.create_variation(
  image=byte_array,
  n=1,
  model="dall-e-2",
  size="1024x1024"
) -->
<!-- Python -->

### Error handling

<!-- TODO: use toggle feature for error handling -->

<!-- Node.js -->
API requests can potentially return errors due to invalid inputs, rate limits, or other issues. These errors can be handled with a `try...catch` statement, and the error details can be found in either `error.response` or `error.message`:
<!-- TODO: extend ./node/create-variation.js with error handling:
import fs from "fs";
import OpenAI from "openai";

const openai = new OpenAI();

async function main() {
    try {
        const image = await openai.images.createVariation({
            image: fs.createReadStream("image.png"),
            n: 1,
            size: "1024x1024",
        });
        console.log(image.data);
    } catch (error) {
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
        } else {
            console.log(error.message);
        }
    }
}

main(); -->
<!-- Node.js -->

<!-- Python -->
API requests can potentially return errors due to invalid inputs, rate limits, or other issues. These errors can be handled with a `try...except` statement, and the error details can be found in `e.error`:

<!-- TODO: extend ./python/create-variation.py with error handling:
import openai
from openai import OpenAI
client = OpenAI()

try:
  response = client.images.create_variation(
    image=open("image_edit_mask.png", "rb"),
    n=1,
    model="dall-e-2",
    size="1024x1024"
  )
  print(response.data[0].url)
except openai.OpenAIError as e:
  print(e.http_status)
  print(e.error) -->

<!-- Python -->