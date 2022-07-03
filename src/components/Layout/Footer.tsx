import React from 'react'

const Footer: React.FC = () => {
  return (
    <div className="py-3 bg-white text-center">
      <small>&copy; {new Date().getFullYear()} klog-insights</small>
    </div>
  )
}

export default Footer
