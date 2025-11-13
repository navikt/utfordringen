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