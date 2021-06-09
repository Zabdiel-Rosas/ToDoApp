# Changelog
All notable changes to this project will be documented on this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2021-06-02
### Added
* A new task can be created.
* A task contains the date from it was created.
* A new task is listed with previously created tasks.
* Tasks can be marked as Done by clicking the done button.
* Tasks can be deleted by clicking the delete button.

##[1.0.1] - 2021-06-03
### Changed
* The animation for the cursor when user hovers over the add button has been changed.

### Fixed
* A validation for not letting the user create empty tasks has been added.

## [1.1.0] - 2021-06-03
### Added
* Now a task that is marked as done can't be deleted.
* A message is displayed when trying to delete a completed task.

## [1.2.0] - 2021-06-03
### Added
* New feature has been added to let the user change the status of a task between done and undone.

## [2.0.0] - 2021-06-07
### Changed
* The design of the web site has been changed in order to give a more atractive user experience.

## [2.0.1] - 2021-06-08
### Fixed
* The style for the input has changed, this behavior is only seen when clicking in the input to add a new task.

## [2.1.0] - 2021-06-08
### Changed
* The input and button of add task now take the same space as the task cards.

## [2.1.1] - 2021-06-08
### Fixed
* Now the web site do not scroll down in order to always keep the "add task area" visible, the tasks area
can be scrolled down if needed to.

## [2.2.0] - 2021-06-09
### Add
* When user clicks the done button it changes not only the text to Undone but also its color.

## [2.2.1] - 2021-06-09
### Fixed
* Now the text in the card can not overflow its container, the long words are break in order to fit the task card.