# Custom JavaScript GitHub action

Some tasks require a custom JavaScript Github action.

The dependencies of the Javascript actions are managed in package.json.

To avoid committing the node modules to the repo, "ncc" is used to package the javascript action with its dependencies into a file /dist/index.js.

For each action a build command is stored in package.json. To build the corresponding action, the command must be executed from .github/actions.
