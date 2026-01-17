import React from 'react';
import './HappyClients.css';

function HappyClients() {
  // Array of client logos - you can add actual image URLs here
  const clients = [
    { id: 1, name: 'Client 1', image: 'https://res.cloudinary.com/dqpxq0ljn/image/upload/v1736700880/qo8oygrqdi46814cezb1.webp' },
    { id: 2, name: 'Client 2', image: 'https://res.cloudinary.com/dqpxq0ljn/image/upload/v1736696897/pbfp0jah9y1kaemcbgz2.png' },
    { id: 3, name: 'Client 3', image: 'https://res.cloudinary.com/dqpxq0ljn/image/upload/v1736693027/cmluzu70wtaunl2n2efx.png' },
    { id: 4, name: 'Client 4', image: 'https://res.cloudinary.com/dqpxq0ljn/image/upload/v1736697049/zon4s8sijboet6pfwbwh.jpg' },
    { id: 5, name: 'Client 5', image: 'https://res.cloudinary.com/dqpxq0ljn/image/upload/v1736697518/wciwetxfulsg5s9q7g8u.png' },
    { id: 6, name: 'Client 6', image: 'https://res.cloudinary.com/dqpxq0ljn/image/upload/v1736698903/u3kgim6fn23lcxnvnadk.jpg' },
    { id: 7, name: 'Client 7', image: 'https://res.cloudinary.com/dqpxq0ljn/image/upload/v1736698758/uagtug8irbjduyk5pk8t.png' },
    { id: 8, name: 'Client 8', image: 'https://res.cloudinary.com/dqpxq0ljn/image/upload/v1736700145/b1kexwdm8doxj7pghxzm.png' },
    { id: 9, name: 'Client 9', image: 'https://res.cloudinary.com/dqpxq0ljn/image/upload/v1736704675/chytw5pjlmsnmlqrfw2o.png' },
    { id: 10, name: 'Client 10', image: 'https://res.cloudinary.com/dqpxq0ljn/image/upload/v1736699957/ujrnv2iskdavuv8hzqak.jpg' },
  ];

  return (
    <section className="happy-clients">
      <div className="container">
        <div className="section-title">
          <h2>Our Happy Clients</h2>
          <p>Trusted by leading brands and organizations</p>
        </div>

        <div className="clients-carousel">
          <div className="clients-track">
            {clients.map((client) => (
              <div key={client.id} className="client-logo" title={client.name}>
                <img src={client.image} alt={client.name} />
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {clients.map((client) => (
              <div key={`dup-${client.id}`} className="client-logo" title={client.name}>
                <img src={client.image} alt={client.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HappyClients;
