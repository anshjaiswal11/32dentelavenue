import React from 'react';

const DentalJourney = () => {
  const timelineEvents = [
    {
      year: '2016',
      title: 'Humble Beginnings, Bigger Vision',
      description:
        'Our journey began in a modest rented clinic at Sector 16, Rohini. With limited space but unlimited passion, 32 Dental Avenue was founded on a simple mission — to make quality dental care accessible and patient-friendly.',
      icon: (
        <svg
          fill="#88d4cb"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
          <path fill="#fff" d="M11 7h2v6h-2zm0 8h2v2h-2z" />
          <circle cx="12" cy="12" r="3.5" fill="none" stroke="#fff" strokeWidth="1.5" />
        </svg>
      ),
    },
    {
      year: '2019',
      title: 'Expanding Horizons',
      description:
        'As our family of happy patients grew, so did our aspirations. We opened our second clinic in Sector 7, Rohini — a more advanced and centrally located space designed to deliver comfort, precision, and premium dental experiences.',
      icon: (
        <svg
          fill="#88d4cb"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-9.5h-4l5-5 5 5h-4v4h-2zM14 17h-4l-5 5-5-5h4v-4h2z" />
          <path fill="#fff" d="M10 12.5h-4l5-5 5 5h-4v4h-2zM14 17h-4l-5 5-5-5h4v-4h2z" />
          <path d="M13.5 13.5h-3v-3h-2v3h-3v2h3v3h2v-3h3z" fill="#fff" />
        </svg>
      ),
    },
    {
      year: '2024',
      title: 'Redefining Dental Excellence',
      description:
        'With a decade of trust and thousands of transformed smiles, we proudly launched our third and most advanced center in Sector 5, Rohini. Equipped with state-of-the-art technology and modern aesthetics, it marks a new era of precision dentistry and patient care.',
      icon: (
        <svg
          fill="#88d4cb"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1.78-7.72l-4.59 4.59L7.09 17l4.13-4.13.71-.71.71.71 4.13 4.13 1.28-1.28-4.59-4.59L12 6l-1.78 1.72z" />
          <path fill="#fff" d="M11.78 6L10 7.72 14.59 12.31 10 16.9 11.28 18.18 16 13.72 17.72 12 11.78 6z" />
          <path d="M12 5.5l1.45 2.94 3.24.47-2.35 2.29.55 3.23L12 13.88l-2.89 1.52.55-3.23-2.35-2.29 3.24-.47L12 5.5z" fill="#fff" />
        </svg>
      ),
    },
  ];

  const styles = {
    sectionContainer: {
      padding: '60px 20px',
      backgroundColor: '#f7f4f1',
      fontFamily: '"Poppins", sans-serif',
      color: '#333',
    },
    headerBox: {
      textAlign: 'center',
      marginBottom: '60px',
    },
    headerSmallText: {
      fontSize: '0.9rem',
      fontWeight: '600',
      color: '#88d4cb',
      letterSpacing: '1px',
      textTransform: 'uppercase',
      marginBottom: '10px',
    },
    headerMainText: {
      fontSize: '2.8rem',
      fontWeight: '700',
      color: '#222',
      marginBottom: '20px',
      lineHeight: '1.2',
    },
    headerParagraph: {
      maxWidth: '800px',
      margin: '0 auto',
      fontSize: '1.1rem',
      lineHeight: '1.6',
      color: '#555',
    },
    timelineWrapper: {
      position: 'relative',
      maxWidth: '900px',
      margin: '0 auto',
      padding: '20px 0',
    },
    timelineLine: {
      position: 'absolute',
      left: '50%',
      top: 0,
      bottom: 0,
      width: '3px',
      backgroundColor: '#e0e0e0',
      transform: 'translateX(-50%)',
      zIndex: 0,
    },
    timelineEvent: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '50px',
      position: 'relative',
      zIndex: 1,
    },
    timelineEventRight: {
      flexDirection: 'row',
      textAlign: 'left',
    },
    timelineEventLeft: {
      flexDirection: 'row-reverse',
      textAlign: 'right',
    },
    timelineYear: {
      flex: '0 0 100px',
      fontSize: '1.8rem',
      fontWeight: '700',
      color: '#88d4cb',
      margin: '0 20px',
    },
    timelineIconCircle: {
      flex: '0 0 60px',
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      backgroundColor: '#fff',
      border: '3px solid #88d4cb',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
      margin: '0 20px',
      position: 'relative',
      zIndex: 2,
    },
    timelineContent: {
      flex: '1',
      padding: '20px',
      backgroundColor: '#fff',
      borderRadius: '10px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
      position: 'relative',
      borderLeft: '4px solid #88d4cb',
    },
    timelineContentLeft: {
      borderRight: '4px solid #88d4cb',
      borderLeft: 'none',
    },
    contentTitle: {
      fontSize: '1.4rem',
      fontWeight: '600',
      color: '#333',
      marginBottom: '10px',
    },
    contentDescription: {
      fontSize: '1rem',
      lineHeight: '1.5',
      color: '#666',
    },
  };

  const isMobile = window.innerWidth <= 768;

  const getStyle = (baseStyle, isLeft = false) => {
    let finalStyle = { ...baseStyle };
    if (isLeft && baseStyle === styles.timelineEvent)
      finalStyle = { ...finalStyle, ...styles.timelineEventLeft };
    if (isLeft && baseStyle === styles.timelineContent)
      finalStyle = { ...finalStyle, ...styles.timelineContentLeft };
    return finalStyle;
  };

  return (
    <div style={styles.sectionContainer}>
      <div style={styles.headerBox}>
        <p style={styles.headerSmallText}>OUR JOURNEY</p>
        <h2 style={styles.headerMainText}>
          A Journey of Care, Commitment, and Confident Smiles
        </h2>
        <p style={styles.headerParagraph}>
          At 32 Dental Avenue, our story is one of growth, trust, and
          transformation. What began as a small practice with a big dream has
          evolved into one of Rohini’s most trusted names in advanced dental
          care. Every milestone reflects our belief — that every smile deserves
          precision, comfort, and compassion.
        </p>
      </div>

      <div style={styles.timelineWrapper}>
        <div style={styles.timelineLine}></div>

        {timelineEvents.map((event, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div key={index} style={getStyle(styles.timelineEvent, isLeft)}>
              <div style={styles.timelineYear}>{event.year}</div>
              <div style={styles.timelineIconCircle}>{event.icon}</div>
              <div style={getStyle(styles.timelineContent, isLeft)}>
                <h3 style={styles.contentTitle}>{event.title}</h3>
                <p style={styles.contentDescription}>{event.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DentalJourney;
