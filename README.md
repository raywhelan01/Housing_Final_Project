### Moving Buddy 

Moving Buddy is like having you own research assistant, with a few clicks you can find counties all over the US that fit your family's style .<BR> 
  
  
  
### Presentation : <BR>
https://docs.google.com/presentation/d/1TqQ5yPDfedflKDzIyPYM1goTNhBPMkDN412vkw8UFzM/edit?usp=sharing

<BR> 
  
### Project Overview <BR>
  
### Scripting Languages and Tools : <BR>
  
**1.** : **JavaScript** : JS , is a high-level ,Just in time compiled, object-oriented programming language . JS is used for  creating and styling various webpages with HTML .<BR>
For this project we have used  JS library like D3, D3.js helps in dynamically manipulating the data for the websites and its emphasis on web standards gives you the full capabilities of modern browsers without tying yourself to a proprietary framework, combining powerful visualization components and a data-driven approach to DOM manipulation. <BR>
For filtering the data for each and if loops along with the arrow functions were used. <BR>
  
**2.**: **HTML** : HTML is the standard markup language for Web pages. We have created the final website using HTML and CSS .

**3.** : **CSS**  Cascading stye sheet is a language that describes the style of an HTML document. CSS describes how HTML elements should be displayed <BR>

**4.** : **VS Code** : As the text Editor 

**5.** : **SQLAlchemy** : Provides a nice “Pythonic” way of interacting with databases.


### Process: ### 

**Data Extraction ** 

**Data Source : <BR>**
  
A Census data package is used to retrieve the data. 
This package is designed to provide easy access to the U.S. Census Bureau’s API  <BR>
  
**Census Data : ** <BR>

The American Community Survey (ACS) is an ongoing survey that provides data every year. The ACS covers a broad range of topics about social, economic, demographic, and housing characteristics of the U.S. population<BR>

Detailed Tables, Subject Tables, Data Profiles, Comparison Profiles, and Selected Population Profiles are available for the nation, all 50 states <BR>
  
**Detailed Tables** contain the most detailed cross-tabulations, many of which are published down to block groups. The data are population counts. There are over 20,000 variables in this dataset.
**Subject Tables** provide an overview of the estimates available in a particular topic.  The data are presented as population counts and percentages.  There are over 18,000 variables in this dataset. 
**Data Profiles** contain broad social, economic, housing, and demographic information. The data are presented as population counts and percentages. There are over 1,000 variables in this dataset.
  
  
**Data Retrieval: ** <BR>

 A Census data package is used to retrieve the data. <BR>
This package is designed to provide easy access to the U.S. Census Bureau’s API  (https://pypi.org/project/CensusData/) <BR>

Details : 1384 variables across 838 Counties  <BR>



The data is filtered Using three  parameters 
**1.*** State
**2.*** Income
**3.*** Family Size

**Part 1 :**
Using HTML inputs tags user input is taken.  Using class and container functions a dynamic form is created and then these parameters were passed to the app.js file which is the master working file for filtering the data. <BR>

**Part 2 :** Using the functions the data is checked by passing the value as the argument to the function.  Based on the values dataset is filtered using D3 and .filter function to keep the data which matches with the argument passed to the function. A new table is created using build table function which displays the data on the website. <BR>
