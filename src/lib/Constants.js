const BASE = window.location.protocol + '//' + window.location.hostname + ':6174/'

const Constants = {
    LOCAL_KEY: "JYOTI_USER",
    CURRENT_IMAGE_KEY: "CURRENT_IMAGE",
    API: {
        ENDPOINTS: {
            BASE: BASE,
            LOGIN: BASE + 'login',
            RESET_PASSWORD: BASE + 'employees/resetpassword',
            USER: {
                LIST: BASE + 'user/list'
            },
            ARTICLE: {
                LIST: BASE + 'articles',
                DETAILS: BASE + 'article'
            }
        }
    },

    PAGE_URL: {
        DASHBOARD: '/dashboard',
        IMAGE_VIEW: '/image',
        SETTINGS: '/settings',
        REPORT: {
            COLLECTION: '/report/collection',
            DEPOSIT: '/report/deposit'
        },
        PRODUCT: {
            LIST: '/product/list',
            CREATE: '/product/create',
            EDIT: '/product/edit/',
            ROUTH_PATH: ':ProductId'
        },
        EMPLOYEE: {
            LIST: '/employee/list',
            CREATE: '/employee/create'
        }
    }
}

export default Constants;