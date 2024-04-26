import  request  from "./request"
const menuServices = {
    getMenu(){
        return request.get('/api/menu')
    }
}
export default menuServices