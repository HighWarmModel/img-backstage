import HttpRequest from './https'
import config from '@/config'
const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro
const https = new HttpRequest(baseUrl)
export default https
