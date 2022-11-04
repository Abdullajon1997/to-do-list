const $=function(element){
    return document.querySelector(element)
}


const $a=function(element){
    return document.querySelectorAll(element)
}

const createElement=function(tagNmae,className,content)
{
    const newElement=document.createElement(tagNmae);
    if(className){
        newElement=setAttribute(`class`,className);
    }
    if(content){
        newElement.innerHTML=`$(content)`
    }
    return newElement
}