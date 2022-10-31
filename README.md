# UFOs
## Overview
Dana's goal is to create an interactive webpage that allows readers to parse the data around UFO sightings. So, she essentially needs to build two things: the webpage that will allow users to view the data (HTML) and a dynamic table that will present it (JavaScript).

Dana wants to storyboard her website to have an idea of what her readers will see when they view the final product. Storyboarding is incredibly useful in determining the layout of a webpage, so it's important to complete this step early in order to save time later. It's like building a house. You need to know how it's all going to fit together before you start building!

Dana’s webpage and dynamic table are working as intended, but she’d like to provide a more in-depth analysis of UFO sightings by allowing users to filter for multiple criteria at the same time. In addition to the date, you’ll add table filters for the city, state, country, and shape.

## Resources
  - Data Source: `data.js`



## Deliverable 

| Deliverables      | Description |
| ----------- | ----------- |
| Deliverable 1      |Filter UFO sightings on multiple criteria       |
| Deliverable 2       | A written report on the UFO analysis         | 


### Deliverable 1

• There should be `5` Search options in the  `index.html`

<img width="786" alt="image" src="https://user-images.githubusercontent.com/22928255/198954398-3ed5560a-6105-4768-a6a9-b7af16046462.png">

• The event listener is modified to detect changes to each filter in the app.js file.

<img width="786" alt="image" src="https://user-images.githubusercontent.com/22928255/198955462-95eb67e6-78ca-4bfc-b2ea-d2cd1cf41d04.png">

• The updateFilters() function saves the element, value, and the id of the filter that was changed. 

<img width="786" alt="image" src="https://user-images.githubusercontent.com/22928255/198955648-d8360ef7-d2ff-462e-9095-0d7ff93a320e.png">


• The filterTable() function loops through all of the filters and keeps any data that matches the filter values. 

<img width="786" alt="image" src="https://user-images.githubusercontent.com/22928255/198955887-4d2b320c-415d-4ed2-a65f-64ed1aaeceba.png">



• The webpage filters the table correctly based on user input.

<img width="786" alt="image" src="https://user-images.githubusercontent.com/22928255/198956054-601b4006-80fc-4431-a264-60f0f0d2b3a5.png">


## Results

We have created the website `https://vishaldeo.github.io/` which provide uses to filter for multiple criteria at the same time 

### Scenario 1 : ( Using the date parameter only ) 
 We filter the date `1/13/2010` 
 
<img width="786" alt="image" src="https://user-images.githubusercontent.com/22928255/198956950-8b651517-16a7-4423-be16-4c952038ced5.png">


### Scenario 2 : ( Using the date & city parameter only ) 
 We filter the date `1/13/2010` and city `white oak`
 
<img width="786" alt="image" src="https://user-images.githubusercontent.com/22928255/198957970-6e138090-8481-4bd8-b3c8-551d0b5cef19.png">


### Scenario 3 : ( Using all the filters ) 
 We filter the date `1/10/2010` , city `round rock` , state `tx` , Country `us` and Shape `ligth` 

<img width="786" alt="image" src="https://user-images.githubusercontent.com/22928255/198958400-e6948478-b024-46e7-aeee-d542bb551290.png">


We can use for all the multiple scenario based on the filter conditions and to reset the page we need to `reload` or `refresh` the page. 


## Summary 

Based on the requirement , Dona provided the info as requested. This information is user input based as user need to type the information. This should exactly match with the user input provided. We can enhance it by providing the date as a drop down menu and all the cities / state / country filter by the country / state and city. ( eg for a gived country only show the State and cities  and for any State only show the cities from the data we have ).

