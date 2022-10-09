import React from 'react'

function Resource() {
    const resources = [
        {
          heading: "Featured Profile",
          body: "Rank your profile at the top to make you stand out in a crowd of job-seekers",
          id: 1,
        },
        {
          heading: "Resume Writing",
          body: "Get professionally written resume which helps you get your dream job",
          id: 2,
        },
        {
          heading: "Career Booster",
          body: "Get the power of Resume Writing & Featured Profile to boost your job search",
          id: 3,
        },
        {
            heading: "Profile Highlighter",
            body: "Differentiate yourself from the crowd and increase visibility to the recruiters",
            id: 4,
          },
          {
            heading: "LinkedIn Makeover",
            body: "Transform your linkedIn profile to elevate your professional brand",
            id: 5,
          },
          {
            heading: "Mock Interview",
            body: "Gain confidence to crack even the toughest interviews!",
            id: 6,
          },
      ];
  return (
    <div>
      <div className="p-5 w-[360px] border-t-2">
        <div>
          <div className="">
            <h1 className="font-extrabold text-3xl text">RESOURCES</h1>
          </div>
          <div className="border-b-2 pb-5">
            {resources.map((resource) => (
              <div className="py-2" key={resource.id}>
                <h1 className="text-blue-400 text-xl">{resource.heading}</h1>
                <p className="block text-gray-500">{resource.body}</p>
              </div>
            ))}
          </div>
        </div>
        </div>
    </div>
  )
}

export default Resource
