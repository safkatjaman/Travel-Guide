/* username and some lines */
var userName = prompt("Please Enter Your Name");

document.write("<h1>" + "Hello " + userName + "!" + "</h1>" );
document.write("<h2>" + "Welcome to the Travel Guide website" + "</h2>");
document.write("<h3>" + "We are going to help you to decide where you should go in this summer vacation" + "</h3>");

document.write("<br>");
document.write("<br>");

/* Array of friends names */
var friendName = [
                        prompt('Enter Your Friend Name: ' ,'Friend: 1'),
                        prompt('Enter Your Friend Name: ' ,'Friend: 2'),
                        prompt('Enter Your Friend Name: ' ,'Friend: 3'),
                        prompt('Enter Your Friend Name: ' ,'Friend: 4'),
                  ]; 

/* Friend Name Array Randomize */
var randomFriendNumber = Math.floor(Math.random() * friendName.length);

var randomFriendName = friendName[randomFriendNumber];

/* Array of Place Names */
var placeNames = [
                        "Cox's Bazar, Bangladesh", 
                        "Shark Bay, Australia", 
                        "Algarve, Portugal", 
                        "Paris, France", 
                        "St. Petersburg, Russia", 
                        "Paracas, Peru",
                        "Death Valley, California", 
                        "Provence, France", 
                        "Bayon, Cambodia", 
                        "Grand Canal, Venice"
                  ];

/* Array of Places Images */
var placeImages = [
                        "<img src = images/coxsbazar.jpg height = 50% width = 50%>", 
                        "<img src = images/sharkbay.jpg height = 50% width = 50%>", 
                        "<img src = images/algarve.jpg height = 50% width = 50%>", 
                        "<img src = images/paris.jpg height = 50% width = 50%>", 
                        "<img src = images/stpetersburg.jpg height = 50% width = 50%>", 
                        "<img src = images/paracas.jpg height = 50% width = 50%>", 
                        "<img src = images/deathvalley.jpg height = 50% width = 50%>", 
                        "<img src = images/provence.jpg height = 50% width = 50%>", 
                        "<img src = images/bayon.jpg height = 50% width = 50%>", 
                        "<img src = images/grandcanal.jpg height = 50% width = 50%>"
                  ];

/* Array of Place Description */
var placeDescription = [
                              "Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rain forest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.",

                              "The most westerly point on mainland Australia is this UNESCO World Heritage Site. It was founded before Captain Cook discovered land at Botany Bay, with Dutch explorers touching down here in the 17th century. The area is diverse – there’s a beach made up entirely of tiny white shells, stromatolites on the shore of Hamelin Pool and the salt mine at Useless Loop, which produces the purest grade of salt in the world and is only accessible via four-by-four – or visible from the sky.",

                              "The red-cliff coastline and pristine whitewashed Moorish villages that dot the south-western region of Portugal have started shifting crowds away from the region’s busier hot spots. It has its own sunny microclimate and affordable places to stay such as Casa Mãe in Lagos make it a great winter-sun option too.",

                              "With its striking architecture, grand boulevards, world-class art, jewel-box patisseries and classic places to stay, this is a city that never sleeps. Its unrivalled food scene is best experienced by stumbling upon corner bistros down cobbled streets.",

                              "The imperial capital of Russia for two centuries, the city is filled with grand architecture and historic art and is a leader in performing arts. The sun never fully sets in mid-June, turning the evenings a hazy grey. A trip to the State Hermitage, one of the best museums in the world, is a must, while watching the most famous ballet, Swan Lake, at the Mariinsky Theatre is an evening well spent.",

                              "A small seaside town in the Ica region of Peru, Paracas is where the desert meets the sea. A trip to the area isn’t complete without a boat ride to Islas Ballestas, the rocky islands off the Pacific coast known for their diverse wildlife including flocks of sea lions and crowds of baby penguins.",

                              "Known as the hottest place on earth, Death Valley reached a record temperature of 53°C in 2019. It’s a vast area of extremes: with snowy peaks, scorching sands and wildflower meadows, the National Park encompasses a wide range of different landscapes. One of the most popular locations is the multi-hued Artists Palette, a series of eroded hills whose colouring is due to the oxidation of natural metal deposits in the mountains. ‘Star Wars’ fans will be keen to see the site that inspired the planet Tatooine.",

                              "In summer, endless fields of lavender in bloom turn the Provençal landscape purple. At the end of the season, when the crop is harvested, honey, soaps and pastries are made with a fragrant dose of the plant.",

                              "Built in honour of one of Cambodia’s most famous kings, Jayavarman VII, Bayon is a 12th-century state temple that’s a unique architectural feat in the heart of Angkor Thom. Fifty-four gothic towers carved with 216 gargantuan smiling faces of Avalokiteshvara – the bodhisattva of compassion – fill the temple, and the design showcases the shift from Hinduism to Mahayana Buddhism. With Angkor Wat not far away, Bayon, its off-the-beaten track little sister, is a close second in popularity.",

                              "The 12,500ft-long canal runs straight through the centre and has inspired numerous artists including Canaletto, Monet and JMW Turner. Flanked by buildings dating from the 12th to the 17th centuries, it’s the grandest waterway in the Floating City."
                        ];


/* Randomizing places, images and descriptions */
var randomPlaceNumber = Math.floor(Math.random() * placeNames.length);

var randomPlaceName = placeNames[randomPlaceNumber];

var randomPlaceImage = placeImages[randomPlaceNumber];

var randomPlaceDescription = placeDescription[randomPlaceNumber];

document.write("<h2>" + "How about to go to " + randomPlaceName + " with " + randomFriendName + "!" + "</h2>");

document.write(randomPlaceImage);

document.write("<br>");
document.write("<br>");
document.write("<br>");

document.write("<h1>" + "About " + randomPlaceName + ":" + "</h1>");

document.write("<h3>" + randomPlaceDescription + "</h3>");

document.write("<br>");
document.write("<br>");
document.write("<br>");

document.write("<h1>" + "Thank You For Visiting Our Site, " + userName + "!" + "</h1>");

document.write("<h3>" + "Wishing you all the very best and your partner for your tour. Have a safe journey. Good Luck!" + "</h3>");