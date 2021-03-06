declare var Vue

import * as monsterData from './_monster'
import levelData from './_level'

var app = new Vue({
    el: '#app',
    data: {
        monsterData,
        levelData: levelData.map(l => {
            l.show = true

            var allMonsters = []
            l.monsters.forEach(lm => {
                lm.monsters.forEach(m => {
                    if (m != '>' && m.monsterKey != '' && -1 == allMonsters.indexOf(m.monsterKey)) {
                        allMonsters.push(m.monsterKey)
                    }
                })
            })
            l.allMonsters = allMonsters

            return l
        }),

        queryFixed: document.body.scrollTop > 0,
        query: [],

        showMonsterList: false
    },
    watch: {
        query: function (v) {
            if (!v.length) {
                this.levelData.map(l => {
                    l.show = true 
                })
            } else {
                this.levelData.map(l => {
                    l.show = v.some(m => -1 != l.allMonsters.indexOf(m))
                })
            }
        }
    },
    methods: {
        selectMonster: function (monster_key) {
            var index = this.query.indexOf(monster_key)

            if (-1 != index) {
                this.query.splice(index, 1)
            } else {
                this.query.push(monster_key)
            }
        }
    }
})

window.addEventListener('scroll', function () {
    app.queryFixed = document.body.scrollTop > 0
})
