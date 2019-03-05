# Top goal scorers

This application allows you quick oversight of the top goal 15 scorers in the English Premier League; the amounts of shots they have had and how many of those shot were on target. The interactive nature of the three bar charts allows you to click on one player and have all of their stats highlight. It also allows you to click on a few players and instantly compare.

 
## UX

This website has been created for the large generic demographic of 'football fans'. I could have been more specific and targeted the largest age group or gender within that catergory however i felt like this was an application with mass appeal and so to avoid isolating anyone this is for the full spectrum footballing world. In order to achieve this across the board reach i matched the font and color pallets used by the premier league offcial designers which no doubt creates a fimiliarity for the user. The users age will differ considerable and so i kept everything simple and clean using chunky bars and large numbers easy for the user to see. I wanted the user to be able to make a quick comparison between each striker and their statistics bar charts are brilliant at this because they offer an instant visiual add that helps put the numbers in to context. All information can be bespokely alternated within a couple of clicks.

![20190305_155149](https://user-images.githubusercontent.com/40600676/53820996-cff91d80-3f64-11e9-99d2-47d6b4241a8b.jpg)

## Features
This project involves three interactive bar charts displaying the top 15 premier league goal scorers; goals, shots and shots on target.
 
### Existing Features
- Click on the bar representing the players goals scored and see their shots and shots on target completely isolated. This can be done vice versa on any three of the charts. 

- Click on two players and see two players statics isolated perfect for comparing. 

- Click on three players and, you get the picture, you can compare all 15 players as indepth or as specifically as you require.

### Features Left to Implement
- In the future i would like to find and use an external source that offers an array which is freuently updated during every game to allow me a connstant accuracy.
- I would also like to incorparate pie charts in to the mix as i believe they may be more suitable for mobiles.
- I would also like to add more topics such as 'goal assists' and 'minutes played' to offer the user an even more in depth story.

## Technologies Used
This project uses:
-HTML to structure the site, 
-CSS to style it, 
-D3 to create some visually stunning charts, 
-DC to let the charts communicate with one another 
-Javascript to let the user interact with the application. 


## Testing
I tested the application by constantly clicking every individual bar to see if it could handle nonstop action or to highlight any mistakes that may appear. I found that when i clicked on the 'shots-on-target' or 'shots' graphs after i had started comparing on the 'goals' chart it was impossible to navigate back to the original complete data set which could be extremely frustrating the user. Because of this i implemented a reset button which solved the problem perfectly, getting all of the data back to how it was upon loading with one simple click.

I asked friends to test the site and they found it a pleasurable and interesting experience. I ran the code through a validator and found no errors.

There is lots of information being displayed from a vast array of players and because of this it doesnt efficiently fit on a mobile phone page. To get around this i could have made the bar chart smaller however i feel that this would have made it extremely hard to read the information and interact witn the chart alternatively I could have displayed less players however this removes important data from the user and results in a less informed application which defies the ultimate goal of it. 


## Deployment

I uploaded the app to github where it can be accessed and modified for later use by myself and others working on the project:
https://github.com/eddiebrett/goals

This app will need weekly updating by the team as and when more goals are scored by the players.


## Credits

### Content
I get my goal statics from the BBC Sport website, a highly efficient and reliable source https://www.bbc.co.uk/sport/football/premier-league/top-scorers

### Media
To avoid copyright infringements i was very careful not to use any media as the premier league are very hot on copyright and its almost imposible to get high quality material without permission from players, clubs or the league itself. 

### Acknowledgements
For inspiration on design and colors i used the officially premier league website:
https://www.premierleague.com/
