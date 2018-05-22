export default {
  data() {
    return {

    }
  },
  methods: {
    promptInfo: function(title, text) {
      this.promptMessage(title, text)
    },
    promptSuccess: function(title, text) {
      this.promptMessage(title, text, 'success')
    },
    promptWarning: function(title, text) {
      this.promptMessage(title, text, 'warn')
    },
    promptError: function(title, text) {
      this.promptMessage(title, text, 'error')
    },
    promptMessage: function(title, text, type) {
      this.$notify({
        type: type,
        title: '<h3>' + title + '</h3>',
        text: text,
        duration: 5000
      })
    }
  }
}
