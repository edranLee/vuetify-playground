import globalScript from '@/scripts/mixins/global-script.js'

export default {
  mixins: [globalScript],
  data: function() {
    return {
      isShowSideMenu: false,
      companyVO: {
        title: 'Company',
        link: '/'
      },
      menuVOList: [{
          icon: 'filter_1',
          title: 'Menu 1',
          link: '/menu1'
        },
        {
          icon: 'filter_2',
          title: 'Menu 2',
          link: '/menu2'
        },
        {
          icon: 'filter_3',
          title: 'Menu 3',
          link: '/menu3'
        },
        {
          icon: 'filter_4',
          title: 'Menu 4',
          link: '/menu4'
        },
        {
          icon: 'filter_5',
          title: 'Menu 5',
          link: '/menu5'
        },
        {
          icon: 'filter_6',
          title: 'Menu 6',
          link: '/menu6'
        },
        {
          icon: 'filter_7',
          title: 'Menu 7',
          link: '/menu7'
        },
        {
          icon: 'filter_8',
          title: 'Menu 8',
          link: '/menu8'
        },
        {
          icon: 'filter_9',
          title: 'Menu 9',
          link: '/menu9'
        }
      ]
    }
  },
  methods: {
    onClickedSideIcon: function(event) {
      this.isShowSideMenu = !this.isShowSideMenu
    }
  }
}
