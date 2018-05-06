class LevelProvider {
  constructor() {
    this.levels = {
      dash: [
        {
          steveVelocity: 300,
          distance: 7000,
          bronze: 25000,
          silver: 20000,
          gold: 15000,
          gain: {
            bronze: {
              endurance: 1,
              strength: 1
            },
            silver: {
              endurance: 2,
              strength: 2
            },
            gold: {
              endurance: 3,
              strength: 3
            }
          }
        },
        {
          steveVelocity: 400,
          distance: 7000,
          bronze: 25000,
          silver: 20000,
          gold: 15000,
          gain: {
            bronze: {
              endurance: 1,
              strength: 1
            },
            silver: {
              endurance: 2,
              strength: 2
            },
            gold: {
              endurance: 3,
              strength: 3
            }
          }
        },
        {
          steveVelocity: 500,
          distance: 7000,
          bronze: 25000,
          silver: 17500,
          gold: 10000,
          gain: {
            bronze: {
              endurance: 1,
              strength: 1
            },
            silver: {
              endurance: 1,
              strength: 1
            },
            gold: {
              endurance: 1,
              strength: 1
            }
          }
        },
        {
          steveVelocity: 600,
          distance: 7000,
          bronze: 15000,
          silver: 10000,
          gold: 8000,
          gain: {
            bronze: {
              endurance: 1,
              strength: 1
            },
            silver: {
              endurance: 1,
              strength: 1
            },
            gold: {
              endurance: 1,
              strength: 1
            }
          }
        },
        {
          steveVelocity: 700,
          distance: 7000,
          bronze: 15000,
          silver: 10000,
          gold: 8000,
          gain: {
            bronze: {
              endurance: 1,
              strength: 1
            },
            silver: {
              endurance: 1,
              strength: 1
            },
            gold: {
              endurance: 1,
              strength: 1
            }
          }
        },
        {
          steveVelocity: 800,
          distance: 7000,
          bronze: 15000,
          silver: 10000,
          gold: 8000,
          gain: {
            bronze: {
              endurance: 1,
              strength: 1
            },
            silver: {
              endurance: 1,
              strength: 1
            },
            gold: {
              endurance: 1,
              strength: 1
            }
          }
        },
        {
          steveVelocity: 900,
          distance: 7000,
          bronze: 15000,
          silver: 10000,
          gold: 8000,
          gain: {
            bronze: {
              endurance: 1,
              strength: 1
            },
            silver: {
              endurance: 1,
              strength: 1
            },
            gold: {
              endurance: 1,
              strength: 1
            }
          }
        },
        {
          steveVelocity: 1000,
          distance: 7000,
          bronze: 15000,
          silver: 10000,
          gold: 8000,
          gain: {
            bronze: {
              endurance: 1,
              strength: 1
            },
            silver: {
              endurance: 1,
              strength: 1
            },
            gold: {
              endurance: 1,
              strength: 1
            }
          }
        }
      ]
    }
  }

  getDashAward(time, level) {
    let award = level.gain.bronze;
    let tag = "bronze";

    if(time < level.silver) {
      award = level.gain.silver;
      tag = "silver";
    }

    if(time < level.gold) {
      award = level.gain.gold;
      tag = "gold";
    }

    return { 
      tag: tag,
      skills: award
    };

  }

  getLevel(key) {
    return this.levels[key];
  }
}

export default LevelProvider;
