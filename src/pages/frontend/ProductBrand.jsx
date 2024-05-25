import React from 'react';

const ProductBrand = ({ logo, name, description }) => {
  return (
    <div style={styles.container}>
      <div style={styles.logoContainer}>
        <img src={logo} alt={`${name} logo`} style={styles.logo} />
      </div>
      <div style={styles.infoContainer}>
        <h3 style={styles.name}>{name}</h3>
        <p style={styles.description}>{description}</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    backgroundColor: '#fff',
  },
  logoContainer: {
    flex: '0 0 100px',
    marginRight: '20px',
  },
  logo: {
    width: '100%',
    height: 'auto',
    borderRadius: '50%',
  },
  infoContainer: {
    flex: '1',
  },
  name: {
    margin: '0 0 10px 0',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  description: {
    margin: '0',
    fontSize: '16px',
    color: '#555',
  },
};

export default ProductBrand;
