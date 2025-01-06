// Good luck!
const express = require("express")
const app = express()


const gossipGirlSzn2 = {
    serenaBlairChuckNate: "NJBC-gossip-girl-8080070-353-449.jpg",

    eventSznTwo: [
        {
            "episode": "Episode 1: Summer, Kind of Wonderful",
            "description": "Serena and Nate fake a summer fling in the Hamptons while Blair returns with a new boyfriend to make Chuck jealous.",
            "photo": "https://example.com/hamptons-party-photo.jpg",
            "characters": [
                {
                    "firstName": "Serena",
                    "lastName": "van der Woodsen",
                    "photo": "serenas-hair-appreciation-post-when-it-was-bad-it-was-v0-pkouvglifnrb1.jpg",
                    "roleInEvent": 1,
                    "funFact": "Secretly still has feelings for Dan despite the charade."
                },
                {
                    "firstName": "Nate",
                    "lastName": "Archibald",
                    "photo": "i1pi5aogpuh51.jpg",
                    "roleInEvent": 2,
                    "funFact": "Is hiding a real affair with a married woman."
                },
                {
                    "firstName": "Blair",
                    "lastName": "Waldorf",
                    "photo": "leighton-meester-gossip-girl_l-1-1b9e7bd95cae4e04a070adfe40c313af.jpg",
                    "roleInEvent": 3,
                    "funFact": "Her new boyfriend, Lord Marcus, has a secret of his own."
                },
                {
                    "firstName": "Chuck",
                    "lastName": "Bass",
                    "photo": "leighton-meester-gossip-girl_l-1-1b9e7bd95cae4e04a070adfe40c313af.jpg",
                    "roleInEvent": 4,
                    "funFact": "Struggles to confess his true feelings for Blair."
                },
                {
                    "firstName": "Dan",
                    "lastName": "Humphrey",
                    "photo": "dan-humphrey-appreciation-also-no-one-will-ever-be-able-to-v0-t4uq982dtydc1.jpg",
                    "roleInEvent": 5,
                    "funFact": "Explores the Hamptons' elite while pursuing his writing."
                }
            ]
        },
        {
            "episode": "Episode 5: The Serena Also Rises",
            "description": "Serena becomes the center of attention at a major fashion show, overshadowing Blair.",
            "photo": "https://example.com/fashion-show-photo.jpg",
            "characters": [
                {
                    "firstName": "Serena",
                    "lastName": "van der Woodsen",
                    "photo": "https://example.com/serena-photo.jpg",
                    "roleInEvent": 1,
                    "funFact": "Unintentionally steals Blair’s spotlight on the runway."
                },
                {
                    "firstName": "Blair",
                    "lastName": "Waldorf",
                    "photo": "https://example.com/blair-photo.jpg",
                    "roleInEvent": 2,
                    "funFact": "Plots revenge against Serena for the perceived betrayal."
                },
                {
                    "firstName": "Jenny",
                    "lastName": "Humphrey",
                    "photo": "https://example.com/jenny-photo.jpg",
                    "roleInEvent": 3,
                    "funFact": "Helps behind the scenes at the fashion show."
                },
                {
                    "firstName": "Chuck",
                    "lastName": "Bass",
                    "photo": "https://example.com/chuck-photo.jpg",
                    "roleInEvent": 4,
                    "funFact": "Supports Blair with a cunning plan."
                },
                {
                    "firstName": "Eleanor",
                    "lastName": "Waldorf",
                    "photo": "https://example.com/eleanor-photo.jpg",
                    "roleInEvent": 5,
                    "funFact": "Blair’s mother and the designer of the fashion show."
                }
            ]
        },
        {
            "episode": "Episode 12: It’s a Wonderful Lie",
            "description": "The gang attends a snowball-themed charity gala, where secrets and betrayals come to light.",
            "photo": "https://example.com/snowball-gala-photo.jpg",
            "characters": [
                {
                    "firstName": "Blair",
                    "lastName": "Waldorf",
                    "photo": "https://example.com/blair-photo.jpg",
                    "roleInEvent": 1,
                    "funFact": "Plays matchmaker but is surprised by unexpected revelations."
                },
                {
                    "firstName": "Chuck",
                    "lastName": "Bass",
                    "photo": "https://example.com/chuck-photo.jpg",
                    "roleInEvent": 2,
                    "funFact": "Competes in a twisted game of truth with Blair."
                },
                {
                    "firstName": "Serena",
                    "lastName": "van der Woodsen",
                    "photo": "https://example.com/serena-photo.jpg",
                    "roleInEvent": 3,
                    "funFact": "Reconnects with an old flame at the gala."
                },
                {
                    "firstName": "Dan",
                    "lastName": "Humphrey",
                    "photo": "https://example.com/dan-photo.jpg",
                    "roleInEvent": 4,
                    "funFact": "Unwittingly becomes part of Blair’s schemes."
                },
                {
                    "firstName": "Jenny",
                    "lastName": "Humphrey",
                    "photo": "https://example.com/jenny-photo.jpg",
                    "roleInEvent": 5,
                    "funFact": "Designs a stunning gown for the event."
                }
            ]
        },
        {
            "episode": "Episode 15: Gone with the Will",
            "description": "Bart Bass’s will reveals shocking secrets about Chuck’s inheritance.",
            "photo": "https://example.com/chuck-inheritance-photo.jpg",
            "characters": [
                {
                    "firstName": "Chuck",
                    "lastName": "Bass",
                    "photo": "www_chuckbass-2.jpg",
                    "roleInEvent": 1,
                    "funFact": "Learns he has full control of Bass Industries."
                },
                {
                    "firstName": "Blair",
                    "lastName": "Waldorf",
                    "photo": "https://example.com/blair-photo.jpg",
                    "roleInEvent": 2,
                    "funFact": "Stands by Chuck during this emotional moment."
                },
                {
                    "firstName": "Lily",
                    "lastName": "van der Woodsen",
                    "photo": "https://example.com/lily-photo.jpg",
                    "roleInEvent": 3,
                    "funFact": "Reveals her complicated role in Bart’s death."
                },
                {
                    "firstName": "Jack",
                    "lastName": "Bass",
                    "photo": "https://example.com/jack-photo.jpg",
                    "roleInEvent": 4,
                    "funFact": "Schemes to take Bass Industries from Chuck."
                },
                {
                    "firstName": "Nate",
                    "lastName": "Archibald",
                    "photo": "https://example.com/nate-photo.jpg",
                    "roleInEvent": 5,
                    "funFact": "Helps Chuck navigate through the family drama."
                }
            ]
        },
        {
            "episode": "Episode 25: The Goodbye Gossip Girl",
            "description": "Graduation day is filled with surprises as Gossip Girl exposes everyone’s secrets.",
            "photo": "https://example.com/graduation-photo.jpg",
            "characters": [
                {
                    "firstName": "Serena",
                    "lastName": "van der Woodsen",
                    "photo": "https://example.com/serena-photo.jpg",
                    "roleInEvent": 1,
                    "funFact": "Vows to find out who Gossip Girl is."
                },
                {
                    "firstName": "Blair",
                    "lastName": "Waldorf",
                    "photo": "https://example.com/blair-photo.jpg",
                    "roleInEvent": 2,
                    "funFact": "Publicly confronts Gossip Girl’s interference."
                },
                {
                    "firstName": "Chuck",
                    "lastName": "Bass",
                    "photo": "https://example.com/chuck-photo.jpg",
                    "roleInEvent": 3,
                    "funFact": "Finally confesses his love to Blair."
                },
                {
                    "firstName": "Dan",
                    "lastName": "Humphrey",
                    "photo": "https://example.com/dan-photo.jpg",
                    "roleInEvent": 4,
                    "funFact": "Feels conflicted about the secrets exposed."
                },
                {
                    "firstName": "Jenny",
                    "lastName": "Humphrey",
                    "photo": "https://example.com/jenny-photo.jpg",
                    "roleInEvent": 5,
                    "funFact": "Begins her journey as the new Queen Bee."
                }
            ]
        }
    ]
}


app.get("/", (request, response) => {
    response.send("Welcome to the Gossip Girl major event API!!!!!!")
    response.send("This API brings the ability of finding out what were season 2 major events, its episode, and the characters involved")
})
app.get("/docs", (request, response) => {
    response.send("To access any information from this API you will need to enter a / first then your request, for example you will want to see the event that occurred on the first episode you will enter /episode1, and if you want to ask for something more specific add another /, such as ")
})

app.listen(3000, () => {
    console.log("Server now running!")
})