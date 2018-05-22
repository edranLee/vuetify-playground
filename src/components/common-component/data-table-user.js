import globalScript from '@/scripts/mixins/global-script.js'

export default {
  mixins: [globalScript],
  data() {
    return {
      headerList: [{
          text: 'User ID',
          value: 'UUID'
        },
        {
          text: 'Name',
          value: 'name'
        },
        {
          text: 'Email',
          value: 'email'
        },
        {
          text: 'Age',
          value: 'age',
          align: 'right'
        }
      ],
      dataList: [{
          UUID: 'USR00001',
          name: 'Jackie Chan',
          email: 'jc_chan@testmail.com',
          age: 64
        },
        {
          UUID: 'USR00002',
          name: 'Jet Li',
          email: 'jet@testmail.com',
          age: 54
        },
        {
          UUID: 'USR00003',
          name: 'Bruce Lee',
          email: 'bruce_lee@testmail.com',
          age: 54
        },
        {
          UUID: 'USR00004',
          name: 'Donnie Yen',
          email: 'donnie_yen@testmail.com',
          age: 54
        },
        {
          UUID: 'USR00005',
          name: 'Stephen Chow',
          email: 'stephen_chow@testmail.com',
          age: 55
        },
        {
          UUID: 'USR00006',
          name: 'Andy Lau',
          email: 'andy@testmail.com',
          age: 56
        },
        {
          UUID: 'USR00007',
          name: 'Nicholas Tee',
          email: 'nick_tee@testmail.com',
          age: 37
        },
        {
          UUID: 'USR00008',
          name: 'Jay Chou',
          email: 'jay@testmail.com',
          age: 39
        },
        {
          UUID: 'USR00009',
          name: 'Jacky Wu',
          email: 'jacky_wu@testmail.com',
          age: 55
        },
        {
          UUID: 'USR00010',
          name: 'Crystal Liu Yi Fei',
          email: 'crystal@testmail.com',
          age: 30
        }
      ]
    }
  }
}
