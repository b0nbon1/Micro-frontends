import React from 'react'

function RenderMFE({ MFE, ...props }) {
  return (
    <React.Suspense fallback="loading..."><MFE {...props} /></React.Suspense>
  )
}

export default RenderMFE;
