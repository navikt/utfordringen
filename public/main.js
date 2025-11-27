const utfordringer = [
    {
        "tittel": "Ølsmaking",
        "poenger": [
            {
                "deltaker": "Pinnsvinn",
                "poeng": 9
            },
            {
                "deltaker": "Hassan",
                "poeng": 8
            },
            {
                "deltaker": "Steinar",
                "poeng": 7
            }
        ]
    },
    {
        "tittel": "Lazertag",
        "poenger": [
            {
                "deltaker": "Pinnsvinn",
                "poeng": 9
            },
            {
                "deltaker": "Hassan",
                "poeng": 8
            },
            {
                "deltaker": "Steinar",
                "poeng": 7
            }
        ]
    }
]

// TODO: deltaker med høyest score får gul trøye
const lagTotalScoreObjekt = () => {
    const listeOverTotalScores = []

    utfordringer.map((utfordring, index) => {
        if (index === 0) {
            utfordring.poenger.map(poeng => {
                listeOverTotalScores.push(poeng)
            })
        } else {
            // 1. Finne om navn matcher i listen over total scores, hvis ja, oppdater objektet og legg til score
            // 2. Hvis ikke legg til i listen over total scores
        }
    })
}

const listUtfordringer = () => {
    const rootKomponent = document.getElementById("utfordringer")

    utfordringer.map(utfordring => {
        const div = document.createElement('div')

        const tittel = document.createElement('h2')
        tittel.append(utfordring.tittel)
        div.appendChild(tittel)

        utfordring.poenger.map(poeng => {
            const p = document.createElement('p')
            p.append(`${poeng.deltaker}: ${poeng.poeng}`)
            div.appendChild(p)
        })

        rootKomponent.appendChild(div)
    })
}

listUtfordringer()