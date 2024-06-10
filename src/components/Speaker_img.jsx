import React from 'react'

const Speaker_img = (props) => {
    return (
        <div>
            <div className='image-card rounded-2xl mb-16 md:my-0 min-h-[355px] w-[300px] shadow-xl hover:shadow-slate-400 text-pretty bg-[rgb(255,255,255)] scale-[98.5%] hover:scale-100'>
                <div className='h-[250px] rounded-2xl shadow-md m-2 overflow-hidden'><img src={props.image} height={100} width={props.img_width}></img></div>
                <div className='text-xl bg-slate-800 text-center font-serif font-semibold text-orange-500 flex justify-center items-center py-1 px-2'>{props.name}</div>
                <div className='text-center text-gray-800 flex flex-col justify-center items-center px-1 py-2 font-serif'>{props.post}<br></br>
                    {props.post2}<br></br>
                    {props.post3}
                </div>
            </div>
        </div>
    )
}

export default Speaker_img
