export default {
  methods: {
    jump(to) {
      if (this.$router) {
        this.$router.push(to)
      }
    },
    addFontIcon() {
      const domModule = weex.requireModule("dom");
      domModule.addRule('fontFace', {
        'fontFamily': 'iconfont',
        'src': "url(\'http://at.alicdn.com/t/font_qrqsw45rlbfyldi.ttf\')"
      });
    }
  }
}
