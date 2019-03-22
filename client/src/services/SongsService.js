import Api from '@/services/Api'
 export default {
     index()
     {
         return Api().post('songs')
     },
     post(song)
     {
         return Api().post('songs', song)
     }
    
 }
 