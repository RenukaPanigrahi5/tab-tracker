<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
       <panel title= "Songs">
           <router-link 
           slot="action"
           @click="navigateTo({name: 'songs-create'})"
           :to="{name: 'songs-create'}">
           <v-btn 
           class="cyan accent-2" light medium absolute right middle
fab>
   <v-icon>add</v-icon> 
</v-btn>
           </router-link>
           <div v-for="song in songs" 
           :key="song.id">
           <v-layout>
               <v-flex xs6>
                 <div class="song-title">
                     {{song.title}}
                 </div>
                 <div class="song-artist">
                     {{song.artist}}
                 </div>
                 <div class="song-genre">
                     {{song.genre}}
                 </div>
               </v-flex>
                <v-btn>
               <v-flex xs6>
                 <img class="album-image" :src="song.albumImageUrl" />
               </v-flex>
           </v-layout>
               {{song.title}}
               {{song.artist}}
               {{song.album}}
           </div>
           <v-btn dark class="cyan" @click="navigateTo({name: 'song', params:{songId: song.id}})">
               View Song
       </panel>

    </v-flex>
    </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'
export default {
    components: {
        Panel
    },
    data (){
        return {
            songs: null
           
        }
    },
    methods: {
    navigateTo(route) {
        this.$route.push(route)
    } 
    },
   async  mounted () {
       this.songs = (await SongsService.index()).data

    }
  }
</script>
 
<style scoped>
.song{
padding: 20px;
height: 330px;
overflow: hidden

}

.song-artist{
    font-size: 24px;
    
}

.song-genre{
    font-size: 18px;
}

.song-title{
     font-size: 18px;
}

.album-image {
    width: 70%; 
    margin: 0 auto;
}

</style> 