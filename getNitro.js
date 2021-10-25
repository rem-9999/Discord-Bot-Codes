module.exports = {
  name: "무료니트로",

  async execute(message) {
    function getNitro() {
      var result = '';
      var strs = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var strslenth = strs.length;
      for (var i = 0; i < 15; i++) {
        result += strs.charAt(Math.floor(Math.random() *
          strslenth));
      }
      return result;
    }

    message.reply(`https://discord.gift/${getNitro()}`)
  }
}
//Copyright(c)2021 REM All rights reserved.
