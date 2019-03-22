const {Song} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')
 
module.exports = {
    async index  (req, res){
        try {
         const songs = await Song.findAll({
            limit: 10

         })
         res.send(songs)
    
        } catch(err){
            res.status(500).send({
                error: 'an error has occured trying to fetch the songs'
            })
            
        }
    
          },
          
          
    async post  (req, res){
        try {
         const song = await Song.create(req.body)
         res.send(song)
    
        } catch(err){
            res.status(400).send({
                error: 'an error has occured trying to create the song'
            })
           
        }
    
          } 
          
          }
    

