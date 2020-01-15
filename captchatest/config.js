module.exports = [
    {
        'id': '312b2b12-66a0-4e93-bbd1-dc12a9a085c9',
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
                        'port': 9000
                    },
                    'public': ['./public']
                }]
        }
    },
    {
        'id': 'f371b2c9-2f61-4deb-acd6-a8048fc6c1c0',
        'name': 'module',
        'type': 'captcha',
        'isNpm': true,
        'config': {
            driver: {
                name: 'simple',
                length: 5
            }
        }
    },
    {
        'id': '3ec70b5a-1073-4077-9bbc-cb2e70542148',
        'name': 'service',
        'context': '{databse connection name }',
        'domain': 'captchatest',
        'driver': global.path + '/services/captchatest/index.js',
        'structure': global.path + '/services/captchatest/struct.js',
        'funcs': [{
                'name': 'test',
                'title': 'test'
            }],
        'auth': ['test']
    }
];