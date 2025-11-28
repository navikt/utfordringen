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
    },
    {
        "tittel": "Ping pong",
        "poenger": [
            {
                "deltaker": "Pinnsvinn",
                "poeng": 9
            },
            {
                "deltaker": "Hassan",
                "poeng": 8
            },
        ]
    },
    {
        "tittel": "Golf",
        "poenger": [
            {
                "deltaker": "Pinnsvinn",
                "poeng": 0
            },
            {
                "deltaker": "Hassan",
                "poeng": 3
            },
            {
                "deltaker": "Steinar",
                "poeng": 6
            }
        ]
    },
]

// TODO: deltaker med høyest score får gul trøye
const lagSortertListeOverDeltakersTotalePoeng = () => {
    const listeOverTotalScores = []
    const copy = [...utfordringer]
    copy.map((utfordring) => {
        // 1. Finne om navn matcher i listen over total scores, hvis ja, oppdater objektet og legg til score
        // 2. Hvis ikke legg til i listen over total scores
        utfordring.poenger.map((poeng) => {
            const delatkerFunnet = listeOverTotalScores.find(element => element.deltaker === poeng.deltaker)

            if (delatkerFunnet) {
                const deltakerFunnetIndex = listeOverTotalScores.findIndex(element => element.deltaker === poeng.deltaker)

                const oppdaterPoengDeltaker = {
                    ...delatkerFunnet,
                    poeng: delatkerFunnet.poeng += poeng.poeng
                }

                listeOverTotalScores[deltakerFunnetIndex] = oppdaterPoengDeltaker
            } else {
                listeOverTotalScores.push(poeng)
            }
        })
    })

    return listeOverTotalScores
}

console.log(lagSortertListeOverDeltakersTotalePoeng())

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