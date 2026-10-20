import React from 'react';
import Card from './components/Card';
import Home from './components/Home';



const App= () => {
  
 const jobOpenings = [
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR7g89GKSjpTNn0mQ7C-ZRkznlSWbuU9DL5mwy7KWkgQ&s=10",
    companyName: "Google",
    post: "Software Engineer",
    datePosted: "5 days ago",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hour",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRpX6LLQ-9ZQ1Cr8B42xUu30zZS3jD_W_qP6m3qHTPWQ&s=10",
    companyName: "Microsoft",
    post: "Frontend Developer",
    datePosted: "10 weeks ago",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$60/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT523amAxGLO7fADhslQ7tkHH6ePZqQxscr2mWVWT-Ov3aMVJCe5p4oHuRJ&s=10",
    companyName: "Amazon",
    post: "Backend Developer",
    datePosted: "2 days ago",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$40/hour",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjDZfQFgkOx0fkvr7xATdrEQfiBSLGMSkLX4C6few5AA&s=10",
    companyName: "Meta",
    post: "React Developer",
    datePosted: "1 week ago",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$55/hour",
    location: "Gurugram, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZLzivlm-eRcXEJ9Wd3d__6LWQS7Ad9FPgy7Gyp40zXg&s=10",
    companyName: "Apple",
    post: "iOS Developer",
    datePosted: "3 weeks ago",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$38/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyL-_pBg755s5pHUBIfySJZrD6Vp04meZS9bXkaknlYw&s",
    companyName: "Netflix",
    post: "Full Stack Developer",
    datePosted: "4 days ago",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk88fLq7K8Kdii4gnLEtrNHC0_w_wKTh4eT-iXAB5iIw&s",
    companyName: "NVIDIA",
    post: "Machine Learning Engineer",
    datePosted: "2 weeks ago",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$58/hour",
    location: "Pune, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0VUZ_IS4ORclF51iXFkNjNZDCM3bD_U-RSvC2vhVHug&s=10",
    companyName: "Adobe",
    post: "UI/UX Developer",
    datePosted: "6 days ago",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$42/hour",
    location: "Noida, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPrn-ikBlwrgxAQMicc8PQClBIsFFPGxVTAROOPZ12TA&s=10",
    companyName: "Salesforce",
    post: "Cloud Developer",
    datePosted: "8 weeks ago",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$50/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLzrTjqz8D5TaDsOdcZvhyKYIMmoCy4mexm-Y94w5yWA&s=10",
    companyName: "Oracle",
    post: "Java Developer",
    datePosted: "10 days ago",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$52/hour",
    location: "Bengaluru, India"
  }
];
  return (
    <div className='first'>
      
      {jobOpenings.map(function(elem){
        return <Card company ={elem.companyName} tag1 ={elem.tag1} logo={elem. brandLogo}
        tag2 = {elem.tag2} pay={elem.pay} location ={elem.location} role={elem.post}
        date ={elem.datePosted} />;

      })}
      
        </div>
        
      
  );
}

export default App;