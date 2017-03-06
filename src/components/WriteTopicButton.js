import React from 'react'
import { Link } from 'react-router'

const WriteTopicButton = () => (
  <Link to="/topic/add/" className="btn btn_x-large btn_navbar_write-topic">
    <span className="btn__text">Написать</span>
    <svg className="icon-svg icon-svg_navbar-pencil" width={ 33 } height={ 32 } viewBox="0 0 33 32" aria-hidden="true" version="1.1" role="img">
      <path d="M7.038 27.08L5.6 25.617c-.284.757-.57 1.513-.856 2.27.764-.27 1.53-.538 2.294-.807zm7.956-2.8c-.51-.282-.997-.63-1.437-1.045-.82-.775-1.373-1.665-1.625-2.57-.012-.012-.026-.02-.038-.033-1.187-.24-2.355-.84-3.31-1.744-.114-.107-.216-.22-.32-.33-.6 1.595-1.203 3.19-1.806 4.786l2.876 2.928c1.886-.664 3.772-1.328 5.66-1.99zM1.057 29.932l5.798-15.358c.01-.024.023-.043.033-.066.06-.193.164-.383.337-.56l12.43-12.65c1.246-1.27 3.18.697 1.932 1.966L9.573 15.492c.098.424.412.92.873 1.358.628.594 1.408.972 2.155 1.08 2.982-3.032 5.962-6.066 8.942-9.1 1.247-1.27 3.18.698 1.933 1.967l-8.92 9.08c.107.416.415.896.863 1.32.904.855 2.125 1.273 3.108 1.066l.004.02c3.646-3.713 7.293-7.424 10.94-11.135 1.246-1.27 3.18.698 1.932 1.967L19.4 25.332c-.11.11-.225.19-.34.254-.15.175-.345.322-.606.414L3.066 31.415c-.98.556-2.506-.164-2.008-1.483z"
      />
    </svg>
  </Link>
)

export default WriteTopicButton
