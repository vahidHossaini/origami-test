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
        'id': '4198847e-25f7-466b-905d-9495eb4ca9c4',
        'name': 'module',
        'type': 'wallet',
        'isNpm': true,
        'config': {
            'context': 'default',
            'attach': {}
        }
    },
    {
        'id': 'ef473098-8d69-40d0-986a-3fa1b34fa267',
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
    }
];