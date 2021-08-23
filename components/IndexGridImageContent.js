import React from 'react'

export const IndexGridImageContent = ({textDescription, src, alt}) => {
    return (
        <div className="relative">
                    <p className="z-40 absolute right-2 top-10 p-2 md:p-4 text-sm md:text-base text-right text-darkBlue font-bold">{textDescription}</p>
                    <img
                      src={src}
                      alt={alt}
                      className="gridImage w-full h-full"
                    />
        
                  </div>
    )
}
