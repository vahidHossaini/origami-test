module.exports = [{
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
    }];