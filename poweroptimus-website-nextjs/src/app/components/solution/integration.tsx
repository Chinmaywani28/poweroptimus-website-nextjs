import React from 'react'
import './integration.css'; // Import HomePage specific styles


const Integration = () => {
  return (
    <section className="integration-section">
      <div className="integration-content">
        <h2 className="integration-title">Integration with Other Systems</h2>
        <p className="integration-desc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem culpa cumque, sint accusamus saepe alias consectetur neque quas expedita molestias. Voluptate, ipsam. Impedit fugiat aliquam excepturi obcaecati fuga similique, placeat delectus. Vero sed eveniet nobis natus facilis magnam soluta quisquam tempore repudiandae, reiciendis earum maxime eum sequi fugiat exercitationem laboriosam, similique nisi quis nostrum ullam obcaecati iure incidunt. Quo minus vitae voluptates expedita ipsam repudiandae iure quam reprehenderit dignissimos! Optio.
        </p>
        <button className="integration-button">Download Documentation</button>
      </div>
      <div className="integration-image-wrapper">
        <img
          src="./integration.png"
          alt="Integration Visual"
          className="integration-image"
        />
      </div>
    </section>
  )
}

export default Integration