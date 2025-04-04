import React from 'react';
import Link from '@docusaurus/Link';
import BrowserOnly from '@docusaurus/BrowserOnly';

export function M(params){
    //color selector
    if (params.color == "red"){
        var color = "#ff4545"
    }else if (params.color == "orange"){
        var color = "#ff9f45"
    }else if (params.color == "yellow"){
        var color = "#e0bd0b"
    }else if (params.color == "green"){
        var color = "#35c43a"
    }else if (params.color == "cyan"){
        var color = "#39b4bd"
    }else if (params.color == "blue"){
        var color = "#3d84e0"
    }else if (params.color == "purple"){
        var color = "#7b3de0"
    }else if (params.color == "pink"){
        var color = "#e03dd0"
    }else if (params.color == "black"){
        var color = "#111111"
    }else if (params.color == "gray"){
        var color = "#999999"
    }else if (params.color == "brown"){
        var color = "#7d5831"
    }else{
        var color = "transparent"
    }

    //return span
    return (
        <span style={{
            backgroundColor:color,
            color:"#e5e5e5",
            paddingLeft:"0.3em",
            paddingRight:"0.3em",
            paddingBottom:"0.1em",
            borderRadius:"0.3em",
            fontWeight:"bold"
        }}>
            {params.children}
        </span>
    )
}

export function C(params){
    //color selector
    if (params.color == "red"){
        var color = "#ff4545"
    }else if (params.color == "orange"){
        var color = "#ff9f45"
    }else if (params.color == "yellow"){
        var color = "#e0bd0b"
    }else if (params.color == "green"){
        var color = "#35c43a"
    }else if (params.color == "cyan"){
        var color = "#3dd5e0"
    }else if (params.color == "blue"){
        var color = "#3d84e0"
    }else if (params.color == "purple"){
        var color = "#7b3de0"
    }else if (params.color == "pink"){
        var color = "#e03dd0"
    }else if (params.color == "black"){
        var color = "#111111"
    }else if (params.color == "gray"){
        var color = "#999999"
    }else if (params.color == "brown"){
        var color = "#7d5831"
    }else{
        var color = "transparent"
    }

    //return span
    return (
        <span style={{
            color:color,
        }}>
            {params.children}
        </span>
    )
}

export function LinkBlock(params){
    return <BrowserOnly>{() => {
        if (!params.url) return (<p className='text-red-500'>[INVALID LinkBlock Element!]</p>)
        var linkClasses = "bg-[#222] w-full h-20 max-lg:h-28 my-3 border-[#606770] border-[1px] border-solid rounded-lg flex items-center hover:no-underline hover:scale-[102%] hover:border-[--ifm-color-primary] hover:border-2 transition-all duration-200"
        const target = params.url.startsWith("https://") ? "_blank" : "_self"

        if (params.mode == "image" && params.image){
            return (
                <a url={params.url} href={params.url} target={target} className={linkClasses}>
                    <img className="w-12 m-0 mx-4 max-lg:mr-4" src={params.image}/>
                    <div className='flex flex-col justify-center max-lg:mr-4'>
                        <p className="m-0 text-white font-bold text-xl">{params.name}</p>
                        <p className="m-0 text-neutral-400">{params.description}</p>
                    </div>
                </a>
            )
        }else if (params.mode == "emoji" && params.emoji){
            return (
                <a url={params.url} href={params.url} target={target} className={linkClasses}>
                    <p className="text-5xl m-0 mx-2 max-lg:mr-4">{params.emoji}</p>
                    <div className='flex flex-col justify-center max-lg:mr-4'>
                        <p className="m-0 text-white font-bold text-xl">{params.name}</p>
                        <p className="m-0 text-neutral-400">{params.description}</p>
                    </div>
                </a>
            )
        }else{
            return (<p className='text-red-500'>[INVALID LinkBlock Element!]</p>)
        }
    }}</BrowserOnly>
}

export function InlineLink(params){
    return <BrowserOnly>{() => {
        if (!params.url) return (<p className='text-red-500'>[INVALID InlineLink Element!]</p>)
        return (<Link to={params.url}>{params.children}</Link>)
    }}</BrowserOnly>
}

export function ScaleImage(params){
    if (!params.src) return (<p className='text-red-500'>[INVALID ScaleImage Element!]</p>)
    const size = (params.size) ? params.size : "100%"
    const src = params.src
    const alt = (params.alt) ? params.alt : ""

    if (size == "100%"){
        var classes = `w-full`
    }else if (size == "90%"){
        var classes = `max-lg:w-full w-[90%]`
    }else if (size == "80%"){
        var classes = `max-lg:w-full w-[80%]`
    }else if (size == "70%"){
        var classes = `max-lg:w-full w-[70%]`
    }else if (size == "60%"){
        var classes = `max-lg:w-full w-[60%]`
    }else if (size == "50%"){
        var classes = `max-lg:w-full w-[50%]`
    }else if (size == "40%"){
        var classes = `max-lg:w-full w-[40%]`
    }else if (size == "33%"){
        var classes = `max-lg:w-full w-[33%]`
    }else if (size == "30%"){
        var classes = `max-lg:w-full w-[30%]`
    }else if (size == "20%"){
        var classes = `max-lg:w-full w-[20%]`
    }else if (size == "10%"){
        var classes = `max-lg:w-full w-[10%]`
    }else if (size == "75%"){
        var classes = `max-lg:w-full w-[75%]`
    }else if (size == "25%"){
        var classes = `max-lg:w-full w-[25%]`
    }else{
        var classes = `w-full`
    }

    return (<div className={classes+" flex flex-col gap-0.5 mb-3"}>
        <img src={src} alt={alt} className="w-auto max-w-full h-auto max-h-full object-contain rounded max-lg:rounded-md"></img>
        <span className="w-full text-center text-xs text-neutral-400">{alt}</span>
    </div>)
}

export function FlexHorizontal(params){
    /**@type {"center"|"left"|"right"} */
    const mode = (params.mode == "center" || params.mode == "left" || params.mode == "right") ? params.mode : "left"
    
    if (mode == "center"){
        return (<div className="flex gap-3 w-full justify-center max-lg:flex-col">{params.children}</div>)
    }else if (mode == "left"){
        return (<div className="flex gap-3 w-full justify-start max-lg:flex-col">{params.children}</div>)
    }else if (mode == "right"){
        return (<div className="flex gap-3 w-full justify-end max-lg:flex-col">{params.children}</div>)
    }
}

export function Divider(params){
    return (<hr className="bg-neutral-700 h-1 rounded-full"></hr>)
}

export function Hex(params){
    return (<span>
        <span className='inline-block max-h-1/2 size-[1.5em] translate-y-[0.5em] mr-1 border-[rgba(0,0,0,0.1)] border-solid border-2 rounded' style={{backgroundColor:params.hex}}></span>
        <code>{params.hex}</code>
    </span>)
}

/**@param {string} data  */
function getURL(data){
    if (data == "js:string") return "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String"
    else if (data == "js:number") return "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number"
    else if (data == "js:boolean") return "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean"
    else if (data == "js:object") return "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"
    else if (data == "js:array") return "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"
    else if (data == "js:promise") return "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"
    else if (data == "js:undefined") return "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined"
    else if (data == "js:date") return "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date"
    else if (data == "js:function") return "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function"
    else if (data == "js:map") return "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map"
    else if (data == "js:nan") return "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN"
    else if (data == "js:set") return "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set"
    else if (data == "js:symbol") return "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol"

    else if (data == "js:null") return "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/null"
    else if (data == "js:void") return "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void"

    else if (data == "js:regex") return "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions"
    else if (data == "js:buffer") return "https://nodejs.org/api/buffer.html"

    else if (data.startsWith("class:")) return "/docs/reference/classes/"+data.split(":")[1]
    else if (data.startsWith("type:")) return "/docs/reference/types/"+data.split(":")[1]
    else if (data.startsWith("interface:")) return "/docs/reference/interfaces/"+data.split(":")[1]
    else if (data.startsWith("enum:")) return "/docs/reference/enums/"+data.split(":")[1]
    else if (data.startsWith("utility:")) return "/docs/reference/utilities/"+data.split(":")[1]
    else if (data.startsWith("event:")) return "/docs/reference/events/"+data.split(":")[1]
    else return data
}

export function ApiUrl(params){
    const url = getURL(params.url)
    const target = (url.startsWith("https://")) ? "_blank" : "_self"
    return (<a href={url} target={target}>{params.label}</a>)
}

export function ApiBlock(params){
    return (<span>➜ <code>{params.children}</code></span>)
}

export function StyledTitle(params){
    return (<div className='otdocs-grid-background w-full h-56 rounded-xl border-neutral-800 border-2 border-solid flex flex-col items-center justify-center mb-5'>
        <img className='w-1/2 mb-5 max-xl:w-2/3 max-lg:w-1/3 min-w-60' src='/img/logo_main.png'></img>
        <p className='text-openticket-500 text-center font-bold text-5xl mb-0 max-xl:text-4xl'>{params.title}</p>
        <p className='text-[#838383] text-center font-medium text-base max-xl:text-sm'>{params.description}</p>
    </div>)
}