

const serv = [
    [0,'Heyaa !','G C D E', "My Baby don't mess because she love me so"],
    [1,'Dans la jungle',"G C G D","Dans la jungle terrible jungle"],
    [2,'Despacito','Bm G D, A',"Despacito tchat tchat tchat" ],
    [3,'Baylabamba','C F7 G',"Bayla Bayla bamba se nesecita que la polka de gracias" ]
];

module.exports = {
    getAll: ()=>{
        return serv;
    },
    getById: (idSearch)=>{
        var result = ''
        serv.map((line)=>{
            if(line[0].toString() === idSearch.toString())
            {         
                result = line;
            }
            return null;
        });     
        return result;
    }
}

