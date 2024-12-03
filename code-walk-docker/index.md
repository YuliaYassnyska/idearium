<!-- ...other markup... -->
# Adding versioning

## File structure for versioned content

To include versioned content with a version picker, you must organize your content into version subfolders.

To organize your content into version subfolders:

  1. Create a main content folder.
   
  2. Create subfolders for the different versions within the main content folder. \ 
     Version subfolder names must start with the "@" symbol, but otherwise can be any string, with or without numbers.
     For example, `@latest`, `@1.0.0`, `@rc1` are all valid. \
     You can add as many version subfolders as you need, but nesting them is **not** supported.
  
  3. Place the files for the different versions in their specified folders.
   
```treeview  {% title="File structure for versioned content" %}
    ├── API-reference/
    │   └── API-reference-by-version/
    │       ├── @4.7/
    │       ├── @4.6/
    │       └── @4.5/
    ├── versions.yaml
    └── sidebars.yaml
```

{% code-walkthrough
  filesets=[{
    id: "yaml",
    name: "Yaml",
    group: "yaml",
    files: ["examples/versions.yaml", "examples/sidebars.yaml"]
  }]
  filters=[{
    id: "yaml",
    default: "yaml"
  }]
%}
  ## Customize the sidebar containing versioned content

  After creating the structure for your versioned content, you can create a custom sidebar configuration for this structure.
  Depending on your preferences and the contents of your project, you can place `sidebars.yaml` in the root directory of your project, or in the same folder as versioned content folders.
  For example, if you have more than one collection of versioned content, you might want to create a separate sidebar for each collection.

  When you switch between versions, the sidebar updates according to the content of version subfolders, including sidebar item labels and the number of files in a version subfolder.
  
  ### Customize a sidebar for versioned content using the `directory` option

  {% step id="step1-1" title="Step 1" %}
    Add a `directory` option for each folder containing versioned content in your `sidebars.yaml` file, as in the following example
  {% /step %}

  {% step id="step1-2" title="Step 2" %}
    As the values for the `directory` keys, add paths to the folders containing versioned content, as in the following example
  {% /step %}

  ## Customize the version picker

  By default, the order of versions in the version picker is the same as the folder structure in the project, in the alphanumeric ascending order. The version that opens when you navigate to versioned file, is by default the version last in the order.
  You can customize which versions appear in the version picker, the order of the versions, and the version that opens by default.

  {% step id="step2-1" title="Step 1" %}
    Create a versions.yaml file on the same level as your version subfolders. \
    In the file, set the default version to display by adding a default object with the `default` version subfolder's name, without the `@` sign, as the value, as in the following example
  {% /step %}

  {% step id="step2-2" title="Step 2" %}
    Add a `versions` object, and inside it a map of `version` objects with version subfolder names as values, excluding the `@`, as in the following example
  {% /step %}

{% /code-walkthrough %}