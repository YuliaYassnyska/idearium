# Training 26 Debrief

## What made you smile?

* It was easy and fast, the happy path works
[local project](https://app.cloud.redocly.com/org/testing_redocly/project/idearium-26-localdev)
[Reunite project](https://app.cloud.redocly.com/org/testing_redocly/project/idearium-project-26)

## What did you find confusing?

* Our starter templates have a React page as the index page, while our documentation mentions a page in Markdown. 
  This is minor, but could create some confusion if a user chose one of our Warp templates as their starting project.
  We should mention in the **Before you begin** section that the **Getting started** doc is based on the default template.
* Code highlights reserved words for React in embedded HTML content (which normally are interpreted as string)
* Webview does not refresh when user changes content in React pages
* When you add an image to a project (using any method), Reunite creates an `images` folder if it does not exist in a given location, we should mention that in the GSG.
Somehow copying, or dragging-and-dropping an image does not create an images folder now (regression?).
* 1m 25 seconds for deploying a  very small project (16 pages) - is this ok?

## Question

* If we have two index pages in the same folder, which should have the priority?

## Ideas

* It might be a good idea to show logs or errors when Webview is building the project. This might be helpful when the build itmes are long.