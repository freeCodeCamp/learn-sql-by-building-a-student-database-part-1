## Contributing

Please read the guidelines in the [contributing docs](https://contribute.freecodecamp.org/#/how-to-work-on-tutorials-that-use-coderoad) before contributing. Contributions to this project need to follow the correct workflow.

# Change Log

Whenever a new version is created, add the new branch name and the changes here

## [v1.0.0]

- Initial soft release with news article

## [v1.0.1]

- Fix all tests that use strove in the path
- Add missing commit for 2075

## [v2.0.0]

- Split tutorial into two parts
  - Remove commits and lessons > 1210 (All will be in part 2)
  - Add lessons at the end to dump the database created
  - Move pg log files outside of repo - needed because logs would stop working after reset
    - Change all watchers to that
    - Change test utils to use that
    - Changed psqlrc to that
  - Move startup commands to the reset file and run it instead of the rest of the commands

## [v2.0.1]

- Add creation of bash history in `reset.sh`
- Add continue commands

## [v2.0.2]

- Only disconnect user `freecodecamp` from db when resetting
