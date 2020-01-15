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
            'context': '',
            'attach': {}
        }
    }
];