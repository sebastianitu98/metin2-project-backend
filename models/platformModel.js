const mongoose = require('mongoose')

const Schema = mongoose.Schema

const platformSchema = new Schema({
    server: { type: String, required: false },
    level: { type: Number, required: false },
    levelChamp: { type: Boolean, required: false },
    levelChampion: { type: Number, required: false },
    rasa: { type: String, required: false },
    skills: { type: String, required: false },
    skillsInfo: {
        skill1: { type: String, required: false },
        skill2: { type: String, required: false },
        skill3: { type: String, required: false },
        skill4: { type: String, required: false },
        skill5: { type: String, required: false },
        skill6: { type: String, required: false },
        skill7: { type: String, required: false },
        respingere: {
            name: { type: String, required: false },
            points: { type: String, required: false },
        },
        ajutor: { type: String, required: false },
    },
    biolog: { type: String, required: false },
    biologDuse: { type: Number, required: false },
    alchemy: {
        ruby: {
            class: { type: String, required: false },
            clarity: { type: String, required: false },
            bonuses: {
                bns1: { type: String, required: false },
                bns2: { type: String, required: false },
                bns3: { type: String, required: false },
            },
        },
        diamond: {
            class: { type: String, required: false },
            clarity: { type: String, required: false },
            bonuses: {
                bns1: { type: String, required: false },
                bns2: { type: String, required: false },
                bns3: { type: String, required: false },
            },
        },
        onyx: {
            class: { type: String, required: false },
            clarity: { type: String, required: false },
            bonuses: {
                bns1: { type: String, required: false },
                bns2: { type: String, required: false },
                bns3: { type: String, required: false },
            },
        },
        granate: {
            class: { type: String, required: false },
            clarity: { type: String, required: false },
            bonuses: {
                bns1: { type: String, required: false },
                bns2: { type: String, required: false },
                bns3: { type: String, required: false },
            },
        },
        saphire: {
            class: { type: String, required: false },
            clarity: { type: String, required: false },
            bonuses: {
                bns1: { type: String, required: false },
                bns2: { type: String, required: false },
                bns3: { type: String, required: false },
            },
        },
        jade: {
            class: { type: String, required: false },
            clarity: { type: String, required: false },
            bonuses: {
                bns1: { type: String, required: false },
                bns2: { type: String, required: false },
                bns3: { type: String, required: false },
            },
        },
    },
    permanentHelpers: {
        conducere: { type: String, required: false },
        inspiratie: { type: String, required: false },
        carisma: { type: String, required: false },
        polymorph: { type: String, required: false },
        precizie: { type: String, required: false },
        horseLevel: { type: Number, required: false },
    },
    auraCostume: { type: Boolean, required: false },
    unlockedInventories: { type: Number, required: false },
    pet: { type: Boolean, required: false },
    petDays: { type: Number, required: false },
    amulets: { type: Boolean, required: false },
    amuletsArray: [{ name: String, time: String }],
    subCharacters: { type: Boolean, required: false },
    subCharactersList: [
        {
            rasa: { type: String, required: false },
            level: { type: Number, required: false },
            skills: { type: String, required: false },
            skillsInfo: {
                skill1: { type: String, required: false },
                skill2: { type: String, required: false },
                skill3: { type: String, required: false },
            },
            alchemy: {
                ruby: {
                    class: { type: String, required: false },
                    clarity: { type: String, required: false },
                    bonuses: {
                        bns1: { type: String, required: false },
                        bns2: { type: String, required: false },
                        bns3: { type: String, required: false },
                    },
                },
                diamond: {
                    class: { type: String, required: false },
                    clarity: { type: String, required: false },
                    bonuses: {
                        bns1: { type: String, required: false },
                        bns2: { type: String, required: false },
                        bns3: { type: String, required: false },
                    },
                },
                onyx: {
                    class: { type: String, required: false },
                    clarity: { type: String, required: false },
                    bonuses: {
                        bns1: { type: String, required: false },
                        bns2: { type: String, required: false },
                        bns3: { type: String, required: false },
                    },
                },
                granate: {
                    class: { type: String, required: false },
                    clarity: { type: String, required: false },
                    bonuses: {
                        bns1: { type: String, required: false },
                        bns2: { type: String, required: false },
                        bns3: { type: String, required: false },
                    },
                },
                saphire: {
                    class: { type: String, required: false },
                    clarity: { type: String, required: false },
                    bonuses: {
                        bns1: { type: String, required: false },
                        bns2: { type: String, required: false },
                        bns3: { type: String, required: false },
                    },
                },
                jade: {
                    class: { type: String, required: false },
                    clarity: { type: String, required: false },
                    bonuses: {
                        bns1: { type: String, required: false },
                        bns2: { type: String, required: false },
                        bns3: { type: String, required: false },
                    },
                },
            },
        },
    ],
    secondaryAccounts: { type: Boolean, required: false },
    secondaryAccountsList: [
        {
            rasa: { type: String, required: false },
            level: { type: Number, required: false },
            skills: { type: String, required: false },
            skillsInfo: {
                skill1: { type: String, required: false },
                skill2: { type: String, required: false },
                skill3: { type: String, required: false },
            },
            alchemy: {
                ruby: {
                    class: { type: String, required: false },
                    clarity: { type: String, required: false },
                    bonuses: {
                        bns1: { type: String, required: false },
                        bns2: { type: String, required: false },
                        bns3: { type: String, required: false },
                    },
                },
                diamond: {
                    class: { type: String, required: false },
                    clarity: { type: String, required: false },
                    bonuses: {
                        bns1: { type: String, required: false },
                        bns2: { type: String, required: false },
                        bns3: { type: String, required: false },
                    },
                },
                onyx: {
                    class: { type: String, required: false },
                    clarity: { type: String, required: false },
                    bonuses: {
                        bns1: { type: String, required: false },
                        bns2: { type: String, required: false },
                        bns3: { type: String, required: false },
                    },
                },
                granate: {
                    class: { type: String, required: false },
                    clarity: { type: String, required: false },
                    bonuses: {
                        bns1: { type: String, required: false },
                        bns2: { type: String, required: false },
                        bns3: { type: String, required: false },
                    },
                },
                saphire: {
                    class: { type: String, required: false },
                    clarity: { type: String, required: false },
                    bonuses: {
                        bns1: { type: String, required: false },
                        bns2: { type: String, required: false },
                        bns3: { type: String, required: false },
                    },
                },
                jade: {
                    class: { type: String, required: false },
                    clarity: { type: String, required: false },
                    bonuses: {
                        bns1: { type: String, required: false },
                        bns2: { type: String, required: false },
                        bns3: { type: String, required: false },
                    },
                },
            },
        },
    ],
    meleyAccounts: { type: Boolean, required: false },
    meleyAccountsNumber: { type: Number, required: false },
    priceW: { type: Number, required: false },
    priceRON: { type: Number, required: false },
    description: { type: String, required: false },
    contact: { type: String, required: false },
}, { timestamps: true })

module.exports = mongoose.model('Platform', platformSchema)


// skills: { type: String, required: false, default: 's1' },
// skillsInfo: { type: Array, required: false, default: ['0','0','0','0','0','0','0','0','0'] },
// biolog: { type: String, required: false, default: 'teeth' },
// biologDuse: { type: Number, required: false, default: 0 },
// alchemy: { type: Object, required: false, default:{} },
// permanentHelpers: { type: Object, required: false, default: {} },
// auraCostume: { type: Boolean, required: false, default: false },
// unlockedInventories: { type: Number, required: false, default: 0 },
// pet: { type: Boolean, required: false, default: false },
// petDays: { type: Number, required: false, default: false },
// amulets: { type: Boolean, required: false, default: false },
// amuletsArray: { type: Array, required: false, default: [] },
// subCharacters: { type: Boolean, required: false, default: false },
// subCharactersList: { type: Array, required: false, default: [] },
// secondaryAccounts: { type: Boolean, required: false, default: false },
// secondaryAccountsList: { type: Array, required: false, default: [] },
// meleyAccounts: { type: Boolean, required: false, default: false },
// meleyAccountsNumber: { type: Number, required: false, default: 0 },
// description: { type: String, required: true, default: 'Se vinde contul de mai sus' },
// priceW: { type: Number, required: true, default: 99999 },
// priceRON: { type: Number, required: true, default: 99999999}