const data = [
    {
        id:1, 
        title:'Avatar 1',
        image:'https://img.myflixer.to/xxrz/250x400/201/9d/0f/9d0fe6f16f205e483df14817753c1b0d/9d0fe6f16f205e483df14817753c1b0d.jpg',
        cast:'Sigourney Weaver, Stephen Lang, David Van Horn, Luke Hawker, Lucy Briant', 
        duration:'162 min',
        about:'From the 22nd century, there is a Marine dispatched to the moon Pandora on a exceptional mission, however becomes protecting an alien civilization and torn between following orders.',
        trailer:'https://www.youtube.com/watch?v=5PSNL1qE6VY&ab_channel=20thCenturyStudios'
    },
    {
        id:2, 
        title:'Avatar 2',
        image:'https://img.myflixer.to/xxrz/250x400/201/1e/c6/1ec694a9d587d509ec7a9be815aacfac/1ec694a9d587d509ec7a9be815aacfac.jpg',
        cast: 'Zoe Saldana, Sam Worthington, Kate Winslet, Stephen Lang, Oona Chaplin',
        duration:'192 min',
        about:'Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.',
        trailer:'https://www.youtube.com/watch?v=o5F8MOz_IDw&ab_channel=Avatar'  
    },
    {
        id:3, 
        title:'Everything Everywhere All at Once',
        image:'https://img.myflixer.to/xxrz/250x400/201/dd/31/dd31428b33327f67777839b4339f1079/dd31428b33327f67777839b4339f1079.jpg',
        cast: 'James Hong, Jenny Slate, Michelle Yeoh, Peter Banifaz, Sunita Mani',
        duration:'139 min',
        about:'When an interdimensional rupture untangles truth, an unlikely hero should transport her newfound powers to eliminate overwelming dangers from the multiverse, as the fate of everything hangs in the balance.',
        trailer:'https://www.youtube.com/watch?v=wxN1T1uxQ2g&ab_channel=A24'  
    },
    {
        id:4, 
        title:'The Green Mile',
        image:'https://img.myflixer.to/xxrz/250x400/201/09/3d/093da636d5369a76fc8e05382ee1c5c6/093da636d5369a76fc8e05382ee1c5c6.jpg',
        cast: 'Tom Hanks, Michael Clarke Duncan, David Morse, Bonnie Hunt, James Cromwell',
        duration:'189 min',
        about:'A supernatural tale put in a Southern prison on death row, where the power to treat people`s ailments is possessed by gentle giant John Coffey. When the cell block`s head guard, Paul Edgecomb, recognizes the amazing gift of Coffey, he tries to help ward off the performance of the convicted man.',
        trailer:'https://www.youtube.com/watch?v=Ki4haFrqSrw&ab_channel=RottenTomatoesClassicTrailers'  
    },
    {
        id:5, 
        title:'Interstellar',
        image:'https://img.myflixer.to/xxrz/250x400/201/82/71/82718ed9a7ece105be98bb3d48dd57bf/82718ed9a7ece105be98bb3d48dd57bf.jpg',
        cast: 'Matthew McConaughey, Anne Hathaway, Jessica Chastain, Bill Irwin, Ellen Burstyn',
        duration:'169 min',
        about:'Inter-stellar chronicles the adventures of a bunch of explorers that make use of a newly discovered wormhole to surpass the limitations and conquer vast spaces involved in an interstellar voyage.',
        trailer:'https://www.youtube.com/watch?v=Lm8p5rlrSkY&ab_channel=RottenTomatoesTrailers'  
    },
    {
        id:6, 
        title:'Logan',
        image:'https://img.myflixer.to/xxrz/250x400/201/16/f7/16f7b48a3df281f25cb746394488ea9d/16f7b48a3df281f25cb746394488ea9d.jpg',
        cast: 'Hugh Jackman, Patrick Stewart, Dafne Keen, Boyd Holbrook, Stephen Merchant',
        duration:'137 min',
        about:'In a hideout on the Mexican Boundary, a Logan that is weary cares to an ailing Professor X in the Future. But Logan`s efforts are upended when a mutant arrives, chased by black forces.',
        trailer:'https://www.youtube.com/watch?v=Div0iP65aZo&ab_channel=20thCenturyStudios'  
    },
    {
        id:7, 
        title:'The Martian',
        image:'https://img.myflixer.to/xxrz/250x400/201/51/88/518886d3047a40bfc2071dcae4b0137d/518886d3047a40bfc2071dcae4b0137d.jpg',
        cast: 'Matt Damon, Mark Watney, Jessica Chastain, Melissa Lewis, Kristen Wiig',
        duration:'141 min',
        about:'Throughout a manned mission to Mars, Astronaut Mark Watney left by his crew and is presumed dead following a fierce storm. But Watney has survived and finds himself alone on the universe. He must draw to subsist in order to come across a means to indicate to Earth that he remains residing.',
        trailer:'https://www.youtube.com/watch?v=ej3ioOneTy8&ab_channel=20thCenturyStudios'  
    },
    {
        id:8, 
        title:'Prisoners',
        image:'https://img.myflixer.to/xxrz/250x400/201/42/3d/423d3b25a5056c653f1385ca3cf98bcc/423d3b25a5056c653f1385ca3cf98bcc.jpg',
        cast: 'Hugh Jackman, Jake Gyllenhaal, Paul Dano, Maria Bello, Melissa Leo',
        duration:'153 min',
        about:'He takes things into their hands as the police pursue leads and also the pressure mounts after Keller Dover`s daughter and her friend go missing. But just how much will this dire father go to protect his loved ones?',
        trailer:'https://www.youtube.com/watch?v=bpXfcTF6iVk&ab_channel=RottenTomatoesTrailers'  
    },
    {
        id:9, 
        title:'Spider-Man 2',
        image:'https://img.myflixer.to/xxrz/250x400/201/c1/2e/c12e55e258ecfed21ebfaa023c81ed38/c12e55e258ecfed21ebfaa023c81ed38.jpg',
        cast: 'Tobey Maguire, Kirsten Dunst, James Franco, Alfred Molina, Rosemary Harris',
        duration:'127 min',
        about:'Peter Parker is certainly going through a major identity crisis. He decides to shelve his superhero alter ego, which leaves the city suffering in the wake of carnage. Meanwhile, Parker can not act on his feelings for Mary Jane Watson, a girl he has loved since childhood.',
        trailer:'https://www.youtube.com/watch?v=1s9Yln0YwCw&ab_channel=KinoCheck.com'  
    },
    {
        id:10, 
        title:'Spider-Man: No Way Home',
        image:'https://img.myflixer.to/xxrz/250x400/201/44/54/4454b905c18670de60b09fd624fccd0c/4454b905c18670de60b09fd624fccd0c.jpg',
        cast: 'Tom Holland, Zendaya, Benedict Cumberbatch, Jacob Batalon, Jon Favreau',
        duration:'148 min',
        about:'Peter Parker is uncovered and no more able to separate his typical life from the high-stakes of being a super-hero. When he requests assistance from Physician Strange the risks come to be much more unsafe, forcing him to find what it truly means to be Spider-Man.',
        trailer:'https://www.youtube.com/watch?v=JfVOs4VSpmA&ab_channel=SonyPicturesEntertainment'  
    },
    {
        id:11, 
        title:'Swiss Army Man',
        image:'https://img.myflixer.to/xxrz/250x400/201/e8/fb/e8fbaadf6b724d95d36ea209e0947de3/e8fbaadf6b724d95d36ea209e0947de3.jpg',
        cast: 'Paul Dano, Daniel Radcliffe',
        duration:'97 min',
        about:'On a little island Hank has abandoned all expectation of making it home. However if a deceased human body washes one day everything changes, and he realizes that it could be his last chance to escape death. Armed with his new"friend" along with an unusual bag of tricks, the duo carry on an epic experience to attract Hank back into the woman of their fantasies.',
        trailer:'https://www.youtube.com/watch?v=4v92gXetGqA&ab_channel=A24'  
    },
    {
        id:12, 
        title:'The Dark Knight',
        image:'https://img.myflixer.to/xxrz/250x400/201/db/3e/db3ee81a2f6cc2b52a80f8c1caea40a0/db3ee81a2f6cc2b52a80f8c1caea40a0.jpg',
        cast: 'Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine,',
        duration:'152 min',
        about:'The stakes are raised by Bat man . With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal associations that irritate the roads. The partnership proves to work, however they soon are prey to a reign of insanity unleashed by an increasing criminal mastermind known to the citizens of Gotham since the Joker.',
        trailer:'https://www.youtube.com/watch?v=EXeTwQWrcwY&ab_channel=RottenTomatoesClassicTrailers'  
    },
    {
        id:13, 
        title:'Joker',
        image:'https://img.myflixer.to/xxrz/250x400/201/c4/73/c473cd6b420e855a1f00fe304f57d886/c473cd6b420e855a1f00fe304f57d886.jpg',
        cast: 'Joaquin Phoenix, Zazie Beetz, Brett Cullen, Frances Conroy, Robert De Niro',
        duration:'118 min',
        about:'Throughout the 1980s, while becoming an infamous crime figure, there is a comedian driven insane and turns to a life of chaos and crime in Gotham City.',
        trailer:'https://www.youtube.com/watch?v=zAGVQLHvwOY&ab_channel=WarnerBros.Pictures'  
    },
]

export default data