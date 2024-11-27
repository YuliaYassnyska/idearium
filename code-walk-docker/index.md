<!-- ...other markup... -->
{% code-walkthrough
  languages=[
    {
      "id": "yaml",
      "name": "yaml",
      "group": "main-config",
      "files": ["examples/redocly.example.yaml", "examples/versions.example.yaml"]
    },
    {
      "id": "json",
      "name": "JSON",
      "group": "main-config",
      "files": ["examples/redocly.example.json", "examples/versions.example.json"]
    }
  ]
  groups=[
    {
      "id": "main-config",
      "default": "yaml"
    },
    {
      "id": "versions-config",
      "default": "json"
    }
  ]
%}
  
  ## Step 2: Define document head

  {% step id="step1" title="Add head tag" %}
    Add a `<head>` tag to the `index.html` file.
  {% /step %}

  ## Step 2: Add elements to head

  {% step id="step2" title="Set page title" %}
    Use the `<title>` tag to set the title of your page.
  {% /step %}

  {% step id="step3" title="Link CSS styles" %}
    Use the `<link>` tag to import custom styling.
  {% /step %}

{% /code-walkthrough %}