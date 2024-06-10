const connect = (req,res) =>{
    res.render('../views/frontend/connect',{
        title: 'Connect with us | Dholimara'
    })
}

module.exports = {
     connect
}