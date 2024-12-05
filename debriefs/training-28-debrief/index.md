# Training 28 Debrief


## What made you smile?

* Trying the features was fun.

## What did you find confusing?

* After full Webview restart, "Project job strarting" still showed 263 seconds.
* Layout issues after adding code walkthrough.
* "Cmd + /" does not work for `.sh` files.
* Rendered code walkthrough does not take into account heading and filters - looks misaligned with the code sample. Also causes uneven scrolling. \
  We need take into account the header and filters bars when auto scrolling the step block into the top.
  ![Screenshot 2024-12-05 at 12.34.54.png](./images/Screenshot%202024-12-05%20at%2012.34.54.png)
* Code walkthrough Markdoc syntax could benefit from highlighting in the editor
* After reloading the page, the page displays the redocly input comment for a few seconds, and then it puts the default values in the input field.
  ![Screenshot 2024-12-05 at 13.17.21 1.png](./images/Screenshot%202024-12-05%20at%2013.17.21%201.png)
* Comment syntax for chunks does not have to be language specific - is that the intended behavior?
* Not using comment syntax still renders the chunk
  ```
  // @redocly-chunk {"steps": ["generate-image"]}
  const response = await openai.images.generate({
  model: "dall-e-3",
  prompt: "a white siamese cat",
  n: 1,
  size: "/* @redocly-input {"id": "image-width"} */x/* @redocly-input {"id": "image-height"} */",
  @redocly-chunk {"steps": ["image-quality"]}
  quality: "hd"
  @redocly-chunk-end 
  });
  image_url = response.data[0].url;
  // @redocly-chunk-end
```
![Screenshot 2024-12-05 at 13.31.29.png](./images/Screenshot%202024-12-05%20at%2013.31.29.png)

* It would be good to have the tags in the Makdoc tags dropdown.
* Do we want to add validation to input fields (data types, regex)?

## TODOs

* Docs need exlpanations of how the features can be used and how they are rendered.
* More code examples for inputs (for example, two input fields in one step, code escaping).
* You can use comment syntax that is not valid for a particular language - needs to be explained better if that it is the intended behaviour.
