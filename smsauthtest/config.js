module.exports = [
    {
        'id': 'cba7b9d6-6182-499d-bbcd-3fcc83522de1',
        'name': 'module',
        'type': 'endpoint',
        'isNpm': true,
        'config': {
            'connections': [{
                    'name': 'PublicSite',
                    'type': 'express',
                    'sessionManager': 'sessionRedis',
                    'protocol': {
                        'type': 'http',
                        'port': 9101
                    },
                    'public': ['./public']
                }]
        }
    },
    {
        'id': '30e0b115-c15a-4f8a-9404-212af9c1ff31',
        'name': 'module',
        'type': 'notification',
        'isNpm': true,
        'config': {
            drivers: [{
                    type: 'webService',
                    name: 'publicsms',
                    protocol: 'http',
                    context: 'default',
                    protocolType: 'get',
                    toField: 'destination',
                    textField: 'message',
                    sendUrl: 'http://panel.asanak.ir/webservice/v1rest/sendsms',
                    option: {
                        username: '',
                        password: '',
                        source: ''
                    }
                }]
        }
    },
    {
        'id': '21f91c9b-f279-4e03-a929-bfadf610030e',
        'name': 'module',
        'type': 'database',
        'isNpm': true,
        'config': {
            'connection': [{
                    'name': 'default',
                    'type': 'mongodb',
                    'host': 'localhost',
                    'database': 'testdb'
                }]
        }
    },
    {
        'id': 'e68234be-9180-4463-acd2-c5ea5cf30b87',
        'name': 'module',
        'type': 'base',
        'isNpm': true,
        'config': {
            drivers: [
                { name: 'web' },
                { name: 'global' }
            ]
        }
    },
    {
        'id': '82bb9d4b-4999-4d3d-b256-b7ba939064c6',
        'name': 'service',
        'context': '{databse connection name }',
        'domain': 'test',
        'driver': global.path + '/services/test/index.js',
        'structure': global.path + '/services/test/struct.js',
        'funcs': [{
                'name': 'test',
                'title': 'test'
            }],
        'auth': ['test']
    },
    {
        'id': '36c4e157-7076-4427-a87d-be8d2de2e2b0',
        'name': 'module',
        'type': 'smsauth',
        'isNpm': true,
        'config': {
            'context': 'default',
            'attach': {}
        }
    },
    {
        'id': '5d05da9f-1ced-4440-8d97-6cd90befcfed',
        'name': 'module',
        'type': 'account',
        'isNpm': true,
        'config': {
            'context': 'default',
            
        }
    }
];