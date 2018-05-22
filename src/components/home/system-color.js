import globalScript from '@/scripts/mixins/global-script.js'

export default {
  mixins: [globalScript],
  methods: {
    onClickedInfoBtn: function(event) {
      this.promptInfo('Info', 'This is info text.')
    },
    onClickedSuccessBtn: function(event) {
      this.promptSuccess('Success', 'This is success text.')
    },
    onClickedWarningBtn: function(event) {
      this.promptWarning('Warning', 'This is warning text.')
    },
    onClickedErrorBtn: function(event) {
      this.promptError('Error', 'This is error text.')
    }
  }
}
