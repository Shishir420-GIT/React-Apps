import React from 'react'

function Card({username="Default", role="Not Decided", imagesrc="../images/blankuser.png", description="Decription Not provided."}) {
    return (
    <div>
        <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img className="w-24 h-28 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={imagesrc} alt="" width="384" height="512"/>
          <div className="pt-6 md:p-8 text-center space-y-4">
            <figcaption className="font-medium">
              <div className="text-sky-500 dark:text-sky-400">
                {username}
              </div>
              <div className="text-slate-700 dark:text-slate-500">
                {role}
              </div>
              <blockquote>
              <p className="text-lg font-medium">
                {description}
              </p>
            </blockquote>
            </figcaption>
          </div>
      </figure>
    </div>
  )
}

export default Card

