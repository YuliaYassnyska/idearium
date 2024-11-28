# Training 27 Debrief

Our potential customer was Docker.
They already use Redoc for their API documentation, however, they maintain multiple (20+) versions of their API directly in the sidebar.
Our version picker and a default version config could make the documnetation more navigalble and accessible.

## What made you smile?

* The feature has a lot of potential for documentation that supports mulitple programming languages and configurations.

## What did you find confusing?

* The feature is quite complex and still in progres. 
  Even with documentation, it took us 4 hours to understand how to configure it and build a simple doc page.
* Potential documentation improvements:
    * Add a concept topic that explains how the feature can be used
    * Add a how-to page written in the style of code walkthrough to showcase its potential
    * Add examples of how to `unless` and `when` in Conditional chunks
    * Describe the purpose of `group` option and how it is rendered in the output
    * Expand the description for `slot` and add visuals
    * Describe how to have a specific order of groups and languages in the rendered doc  
    * The 'toggle' option duplicates Markdoc **More details** - what is the purpose?
* The list of files for `languages` could use a blob pattern
* Infinite loading spinner after clicking the Markdoc tags dropdown (could not reproduce later)
    ![Screenshot 2024-11-28 at 11.03.27.png](./images/Screenshot%202024-11-28%20at%2011.03.27.png)
* When you have content before a code walkthrough step, the content renders center-aligned
    ![Screenshot 2024-11-28 at 11.18.04.png](./images/Screenshot%202024-11-28%20at%2011.18.04.png)

   
