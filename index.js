const Discord = require('discord.js') 
const client = new Discord.Client({intents: [32767]})
const config = require('./config.json')
const mysql = require('mysql');
client.once('ready', () => {
  console.log('Online')

  client.user.setActivity(`${config.Status}`, {
    type: "LISTENING"
  })
client.user
  .setStatus("online")
})  

let canalwl = config.Canalaprovarid
client.on('messageCreate', (message) => {
  if(message.author.bot) return
  let id = message.content
  let canal = client.channels.cache.get(canalwl)
  if(message.channel.id == canal.id) {
     const userdb = config.userdb
     const host = config.ipdb
const senhadb = config.senhadb
const basedb = config.Basedb

const connection = mysql.createConnection({ 
                  host: host,
                  user: userdb,
                  password: senhadb,
                  database: basedb
                });


    connection.connect((err) => {
  
                                                                      }); 
                                                                      setInterval(function () {
                                                                        connection.query('SELECT 1'); 
                                                                      }, 5000); 

                                                                      connection.query(`SELECT whitelisted FROM vrp_users WHERE id = ${id}`,    (err, rows) => {

                                                                        if(rows[0].whitelisted == 1) {    return message.react(config.emojinegado) }   else  {
                                                                          connection.query(`UPDATE vrp_users SET whitelisted = '1' WHERE id = ${id}`, (err, rows) => { 
                         
                                                                            if(rows == null) {
                                                                            
                                                                            
                                                                              message.react(config.emojinegado)
                                                                              return
                                                                            }
                                                                          let mms =  message.guild.members.cache.get(message.author.id)
                                                                          mms.roles.remove(config.cargovisit)
                                                                       
                                                                                                                                                   
                                                                          mms.roles.add(config.cargoaprove)
                                                                                                                                                    return  message.react(config.emojiaprovado)
                                                                            
                                                                            
                                                                            
                                                                                                                                                      
                                                                                                                                                    }); 

                                                                        } 
                                     
                            
                                                                    return

                                                                      })


    

  }
})
client.on('ready', () => {
  let embed = new Discord.MessageEmbed()
  
  .setColor(`${config.corembed}`)
.setTitle(`${config.titleembed}`)
  .setDescription(`${config.descembed}`)
  .setFooter(`${config.footerembed}`)
 

        client.channels.cache.get(canalwl)
 
    
        client.channels.cache.get(canalwl).send({embeds: [embed]})

})

client.login(config.Token)


  process.on('unhandledRejection', (reason, p) => {
    console.log(reason, p)
    });



    process.on("uncaughtException", (err, origin) => {
      console.log(err, origin)
    }) 



    process.on('uncaughtExceptionMonitor', (err, origin) => {
      console.log(err, origin)
    });


    process.on('multipleResolves', () => {
      console.log(type, promise, reason)
    });