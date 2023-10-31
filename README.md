# setup-env

<!-- action-docs-description -->
## Description

Setup environment variables from .env file
<!-- action-docs-description -->

<!-- action-docs-inputs -->
## Inputs

| parameter | description | required | default |
| --- | --- | --- | --- |
| path | Path to the .env file (including file name) | `true` | .env |
| mask | Mark the variable as secret to prevent any appereance in the console | `false` | false |
| export | Export the variable to GitHub environment variables | `false` | true |
<!-- action-docs-inputs -->

<!-- action-docs-outputs -->
## Outputs

| parameter | description |
| --- | --- |
| variables | Exported environment variables |
<!-- action-docs-outputs -->

<!-- action-docs-runs -->
## Runs

This action is a `node16` action.
<!-- action-docs-runs -->
