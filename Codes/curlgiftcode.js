module.exports = {
    name: "문상",

    async execute(interaction) {
        function int(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
          }
          
          let a = int(2000, 4900)
          let b = int(1000, 9999)
          let c = int(1000, 9999)
          let d = int(100000, 999999)
          
          let res = `${a}-${b}-${c}-${d}`;
          
          interaction.reply({content: res})
    }
}
//Copyright(c)2021 REM All rights reserved.
