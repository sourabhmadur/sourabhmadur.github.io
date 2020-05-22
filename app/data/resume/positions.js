
const positions = [
  {
    company: 'Oracle',
    position: 'Member of Technical Staff',
    link: 'https://www.oracle.com',
    daterange: 'Feb 2020 - Present',
    points: [
      'OCI network monitoring team.',
    ],
    subpoints:[]
  }, 
  {
    company: 'Canoe Intelligence',
    position: 'Software Development/ Machine Learning Intern',
    link: 'https://www.canoesoftware.com/',
    daterange: 'June 2019 - August 2019',
    points: [
      'Machine Learning','Software Engineering',
    ],
    subpoints:{'Machine Learning':[
      'Worked on the problem of Table Extraction from image PDF\'s of alternative investment documents, which affected 50% of the data extraction issues.', 
      'Developed the pipeline to subsample and preprocess data from a 120GB opensource dataset.', 
      'Trained Faster-rcc and Yolov3 object detection algorithms on the subsampled dataset combined with in-house labelled data.',
      'Achieved a test accuracy of 86% for the Yolo model and 84% on the Faster-rcc model for models trained on subsampled data.',
      'Created a microservice using Flask and Python to visually test the models for Hedge fund factsheets and account statements',
    ], 

      'Software Engineering':[
        'Developed, implemented and integrated algorithms in PHP to improve the extraction and validation of data from PDF documents. ',
        'Worked with the Twilio API to improve the SMS notification system for clients.',
        'Made changes to the front-end of various parts of the platform which was developed in Vue.js',
        'Wrote integration, unit tests and automated tests.'
      ]
      
      },
  
  },
   {
    company: 'NB Investors Group LLC (Private Equity)',
    position: 'Data Science Intern',
    link: 'https://www.nbgroup.us/',
    daterange: 'April 2019 - August 2019',
    points: [
      'Procured data for medical spas and laser centers across 1000 US cities using the Yelp fusion API. ',
      'Cleaned data in pandas and wrote algorithms in python for identifying businesses with same parent organization.',
      'Analyzed review data for businesses and identified potential investments for medical spas and laser centers in United States',
    ],
    subpoints:[]
  }, 
  {
    company: 'Computational Neuroscience Group, IIT Bombay',
    position: 'Research Assistant',
    link: 'http://compneuroiitb.in/',
    daterange: 'July 2017 – May 2018',
    points: [
      'Simulated the dynamics of spiking neural networks in python.',
      'Predicted the behavior for networks with defective cells by analyzing the data produced from simulations.',
    ],
    subpoints:[]
  },
  {
    company: 'Computational Soft Matter Physics Group, IIT Bombay',
    position: 'Undergraduate Researcher',
    link: 'http://www.phy.iitb.ac.in/en/research/soft-matter-biophysics-and-nonlinear-dynamics',
    daterange: 'September 2016 – May 2017',
    points: [
      'Modelled biological proteins and performed Monte-Carlo simulations in python to study their properties',
      'Analyzed the data generated to study their non-linear properties.',
    ],
    subpoints:[]
  },
  {
    company: 'University of Luxembourg, Theoretical Physics Group',
    position: 'Visiting Researcher',
    link: 'https://wwwen.uni.lu/research/fstc/physics_and_materials_science_research_unit/research_areas/theory_of_mesoscopic_systems',
    daterange: 'May 2016 – July 2016',
    points: [
      'Performed analytical calculations in Quantum mechanics(Condensed matter theory) to study the band structures of Optomechanical Graphene Lattice.',
      'Computational calculations of  band structure',
    ],
    subpoints:[]
  },
];

export default positions;
