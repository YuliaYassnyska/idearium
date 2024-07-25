# Training 13 Debrief

## 1. Get started with the Reunite editor
1. It would be helpful to have some simple diagrams explaining branches and pull requests on a separate page. After that, we can provide a link from the editor page. This step should describe two ways of making changes: directly to the default branch or by creating a branch, PR, and merging it.
2. Allow users to commit directly to the main branch without a protection modal window. Provide an option in the branch manager to disable protection for the default branch.
3. Creating an empty `@theme` folder on your computer to use DnD is very strange and not practical.
4. We should probably add additional explanation for this: "[Create the file using the + menu in the file tree](https://redocly.com/docs/realm/get-started/start-reunite-editor#add-more-pages)" => to create a file/folder in the root folder, all other folders should not be selected. In our case, it worked because we did not have any folders when we used this option. Also, users can use the context menu, which is much more intuitive.
  
## 2. Get started locally
1. It would be better to install the redocly CLI as an internal package with package.json. This way, you avoid global packages, can see the exact version, and start Realm from package.json.
2. It would be much better to provide examples of how to name branch names, project names, etc.
3. Rename `redocly-logo` to `logo`.
4. I would remove the breadcrumbs section because we do not have breadcrumbs (just a file name). Or at least show a diff image before and after.
5. It would be good to show what the user expects to see after each step to understand if they reached the final goal.
6. It was not obvious how to find the footer at first; as it turns out, it was rendered just below the screen size 🙈😁.
7. Open links in the tutorial in a new tab.
8. By clicking on Museum API, it should scroll to the top (to see the description), but it's not working
9. Add tags to the header to know which product supports the current feature.

## Reunite:
1. WYSIWYG: "Reached heap limit Allocation failed"
2. [Content disappearing](https://github.com/Redocly/redocly/issues/9763#issuecomment-2247779136)
3. Failed to create a project. The user should be shown a detailed reason, like validation not passed and why (please check how it's implemented with branch name creation). Also, show a detailed error if the domain is already in use. Another question, should we reserve some domain names? What will happen if some org will reserve some domain like "channel" or "apple"?

## Suggestions on how to improve UX and simplify the tutorial
As everyone could notice, we have almost identical tutorials that do almost the same thing locally or in the cloud. It would be good to add a feature in the future to allow pushing your project to a remote repo and also the ability to clone our project locally. In this case, users can work simultaneously with our cloud system, make changes with a git provider, or make changes locally.

This feature above requires time to implement, but as an easier start, we can provide two options at the beginning when you create a project: 1. create a project in Reunite or 2. use a template and connect it as a remote repo at the beginning.


Here is a simple diagram illustrating what I mean by simplifying project creation: 
![project-creation-suggestion](/images/debrief-3-project-creation-suggestion.png)

1. Create project like we do now + allow cloning the project locally (with push functionality) and the ability to switch the project to an external Git provider by pushing the content.
2. Push template to external git provider. External provider will be the source of truth.

## Impressions

Overall, we like how detailed the tutorial is. It's super easy to follow, it's detailed in what to do, and it covers all basic functionality 💙
