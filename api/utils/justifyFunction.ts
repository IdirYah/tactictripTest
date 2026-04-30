export const justifyText = (text:string,number:number):string=>{
    const textTab = text.split('\n')
    let texts:string[]=[]
    for(const ligne of textTab){
        if(ligne.length>1){
            texts.push(ligne)
        }
    }
    const justifiedLines:string[] = []
    for(const line of texts){
        const words = line.split(' ')
        let intermediate:string=''
        for(const word of words){
            if((intermediate.length+word.length+1)<=number){
                intermediate+=word+' '
            }else{
                justifiedLines.push(intermediate.trim())
                intermediate=word+' '
            }
        }
        justifiedLines.push(intermediate.trim())
    }
    return justifiedLines.join('\n')
}