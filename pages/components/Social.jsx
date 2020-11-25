import {FaLinkedin, FaTwitter, FaInstagram} from 'react-icons/fa'

export default function Social() {
  return (
    <>
      <div style={{display: 'flex'}}>
        <div style={{padding: '10px'}}>
          <FaTwitter />
        </div>
        <div style={{padding: '10px'}}>
          <FaInstagram />
        </div>
        <div style={{padding: '10px'}}>
          {' '}
          <FaLinkedin />
        </div>
      </div>
    </>
  )
}
