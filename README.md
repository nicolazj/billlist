# React Native Recruitment Exercise

**Brief**: Bills list view

**User Story**: As a user, I want to see a list of my deferit bills in one place. 

This includes:

* A thumbnail of the bill image I uploaded so I know what bill it is. If I click on this thumbnail, I want to see the full image so that I can check it out properly.
* The amount of my bill
* The date of my bill
* The status of my bill (processing, scheduled, unable to pay, paid)
* An additional information pop-up next to fields I may not immediately understand (e.g. status) to give me some more information about this field. e.g:
    * *Processing*: This bill is currently in processing, it can take approx. 1-2 hours depending on the time of day. 
    * *Scheduled*: This bill is scheduled to be paid and will be paid on the due date, you're in good hands!, etc.)
* Load only 10 (or some pre-defined number) bills at the time
* An infinite scroll to load next batch of bills if there are any

We expect to have a reactive (clickable) solution with some dummy data (use some of the mock servers available online: e.g. http://jsonplaceholder.typicode.com/). 

Ideally, we would like to assess technical and styling/designing skills at the same time. Whilst there are no specific styling/design requirements, we would like to see what ideas/design decisions can be made for this task.

Additionally, we would like to know how long it took to complete the solution.


## Basic Project Details

The project is provided as a starting point for the exercise. It should build and run on both Android and iOS as is. Feel free to make changes as required to deliver the aforementioned requirements.

The project was built using `yarn` as the package manager. Some of the scripts available for use include:

* `yarn start` - Runs metro.
* `yarn run ios` - Runs the application in the iOS simulator.
* `yarn run android` - Runs the application in the Android simulator.

See `package.json` for additional useful scripts.

---

## demo.gif

![This is an image](./deferit.gif)

## Note
* this exercise took me around 3 hours
* I didnt use https://reactnativeelements.com/, I'd prefer starting with StyleSheet.create or libs like Shopify/restyle, so i can have more control of UI components. the good thing of Shopify/restyle is its type safe and theme based lightweight styling solution. 
* With React Query, no state management libs required at this stage.
## Libs I used in this exercise:
* Flashlist for list component https://shopify.github.io/flash-list/
* React Query for data fetching 
* Restyled for styling system https://github.com/Shopify/restyle
* react-native-image-viewing for image viewer
* react-native-popable for popover
* day.js + numeral for string formatting

## Todos
* Error handling 
* To add a spinner/indicator when loading next page
* To provide a default image for Image component
* 
