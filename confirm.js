$.confirm=function(options){
    return new Promise((resolve, reject) => {
        const modal=$.modal({
            tittle:options.tittle,
            width:'400px',
            closable:false,
            content:options.content,
            onClose(){
                modal.destroy()
            },
            footerButtons:[
                {text:'СКАЖИ ШРЕКСУ НЕТ!!!', type:'danger', handler(){
                    console.log ('Primary btn clicked')
                    modal.close()
                    resolve()
                }},
                {text:'ПОШРЭКУЕМ?', type:'secondary', handler(){
                    console.log ('Danger btn clicked')
                    modal.close()
                    reject()
                }
            }
            ]
            
        })
       setTimeout( ()=>modal.open(),200 ) 
    })
}