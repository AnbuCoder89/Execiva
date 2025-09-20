const fs = require('fs');
const path = require('path');

// Available images
const images = [
  '/image/case-studies/casestudy-1.jpeg',
  '/image/case-studies/casestudy-2.jpeg',
  '/image/case-studies/casestudy-3.jpeg',
  '/image/case-studies/casestudy-4.jpeg',
  '/image/case-studies/casestudy-5.jpg'
];

// Read the case studies file
const caseStudiesPath = path.join(__dirname, 'data', 'caseStudies.json');
let caseStudies = [];

try {
  const data = fs.readFileSync(caseStudiesPath, 'utf8');
  caseStudies = JSON.parse(data);
  
  if (!Array.isArray(caseStudies)) {
    console.error('Error: Expected an array of case studies');
    process.exit(1);
  }
  
  // Update each case study with a different image in sequence
  caseStudies.forEach((caseStudy, index) => {
    const imageIndex = index % images.length;
    caseStudy.image = images[imageIndex];
  });
  
  // Write the updated case studies back to the file
  fs.writeFileSync(caseStudiesPath, JSON.stringify(caseStudies, null, 2), 'utf8');
  console.log('Successfully updated case studies with distributed images!');
  
} catch (error) {
  console.error('Error processing case studies:', error);
  process.exit(1);
}
