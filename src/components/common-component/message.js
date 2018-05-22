import globalScript from '@/scripts/mixins/global-script.js'

export default {
  mixins: [globalScript],
  props: {
    msg: {
      type: String,
      required: true
    },
    isShow: {
      type: Boolean,
      default: false
    },
    msgType: {
      type: String,
      default: function() {
        return 'info'
      },
      validator: function(value) {
        return ['info', 'success', 'warning', 'error'].indexOf(value) !== -1
      }
    }
  }
}
