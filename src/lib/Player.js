class Player {
    constructor(game) {
      this.game = game;
      this.endurance = 0;
      this.strength = 0;
      this.smarts = 0;

      this.stats = {
        weight: 240,
        height: "5'9",
        name: 'Pierre'
      }

      this.levels = {
          dash: []
      }

      this.load();
      this.mapStrengths();
    }

    load() {
      const obj = localStorage.getItem('player');

      if(!obj) return;

      const parsed = JSON.parse(obj);

      if(Object.keys(parsed).length > 0) {
        if(parsed.levels) {
          this.levels = parsed.levels;
        }
        if(parsed.stats) {
          this.stats = parsed.stats;
        }
      }

      this.save();
    }

    getCompletedLevels(key) {
      return Object.keys(this.levels[key]);
    }

    updateLevel(key, obj) {
      this.levels[key].push(obj)

      this.mapStrengths();
      this.save();
    }

    mapStrengths(){
      this.endurance = 0;
      this.strength = 0;
      this.smarts = 0;

      Object.keys(this.levels).forEach((game) => {
        this.levels[game].forEach((level) => {
          if(level.award && level.award.skills) {
            if(level.award.skills.endurance) {
              this.endurance += level.award.skills.endurance;
            }

            if(level.award.skills.strength) {
              this.strength += level.award.skills.strength;
            }

            if(level.award.skills.smarts) {
              this.smarts += level.award.skills.smarts;
            }            
          }
        })
      })
    }

    save() {
      localStorage.setItem('player', 
        JSON.stringify({
          levels: this.levels,
          stats: this.stats
        })
      )

      this.game.registry.set('player', this);
    }

    getStats() {
      return this.stats;
    }
}

export default Player;
