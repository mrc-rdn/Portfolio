import React from 'react'
import Project from './Project.jsx'

export default function ProjectPage() {
    const projects = [
        {title:'PLRMO LMS', 
        description:'The PLRMO Learning Management System (LMS) is a web-based application designed to help students, teachers, and administrators manage courses, track progress, and access learning materials efficiently and securely.', 
        img:['/images/PLRMO/1.png','/images/PLRMO/2.png','/images/PLRMO/3.png'],
        technologies :['Postgress','Express.Js','React.Js','Node.Js', 'Websocket', 'GEMINI'],
        features:[
            'Skill Development: Access to quality training modules designed for practical skill acquisition across various industries.',
            'Training Calendar: A system to stay updated with upcoming workshops, sessions, and important events.',
            'Community Learning: A social feature to connect with fellow trainees, share experiences, and learn collaboratively.',
            'Progress Tracking: Intuitive progress indicators for each module to help users monitor their learning journey.',
            'Integrated Chatbot Support: AI-driven assistance to answer inquiries, guide system navigation, and provide technical support.',
            'Learning Resources: A centralized hub for videos, PDFs, and interactive lessons.',
            ],
        link: '',
        is_status: false,
        duration: 'Sept 2025 - On Going'
        
        },
        {title:'AWS Deployment', 
        description:'Built a cloud-based system where the backend runs on Amazon EC2, application data is securely stored in Amazon RDS, and images and files are managed using Amazon S3 for scalable storage.', 
        img:['/images/keeper/1.png','/images/keeper/2.png','/images/keeper/3.png','/images/keeper/4.png','/images/keeper/5.png','/images/keeper/6.png'],
        technologies :['AWS','RDS','EC2','React','Express', 'Postgres', 'Node'],
        features:[
            'Cloud Deployment – Hosted on AWS EC2 with Nginx and PM2 for reliable production uptime.',
            'Real-World Ready – Combines full-stack technologies and cloud deployment for a professional application.',
            'User Authentication & Security – Users can register and log in securely using JWT for protected sessions.',
            'Task Management – Users can create, read, update, and delete their tasks easily.',
            'Interactive Frontend – Built with React, the UI is responsive and updates in real-time.',
            'Backend API – Node.js and Express handle requests and protect routes for authenticated users.',
            'Database Integration – PostgreSQL on AWS RDS securely stores users and tasks.',
            
            ],
        link: 'http://3.1.81.248',
        is_status: true,
        duration: '1 week'
        },
        {title:'AWS Cloud Club – Celestia, PUP Workshop', 
        description:'Actively participated in cloud learning seminars, workshops and engaged in hands-on projects to strengthen AWS cloud skills and practical knowledge.', 
        img:['/images/AWSCEL/1.jpg','/images/AWSCEL/2.jpg','/images/AWSCEL/3.jpg','/images/AWSCEL/4.jpg','/images/AWSCEL/5.jpg','/images/AWSCEL/6.jpg'],
        technologies :[],
        features:[
            'Being part of AWS Cloud Club – Celestia, PUP made me more comfortable and confident using AWS, thanks to practical workshops, seminars, and hands-on cloud experience',
            'This experience strengthened my AWS navigation skills and boosted my confidence through hands-on learning and real cloud projects ', 
            'Through AWS Cloud Club – Celestia, PUP, I gained practical AWS experience that helped me become more confident and efficient in using cloud services.' ],
        link: '',
        is_status: true,
        duration: '1 day'
        }
    ]
  return (
    
    <div className='flex flex-wrap gap-[5%] w-full  flex-row justify-center'>
        {projects.map((project, i)=>{
            return <Project key={i} project={project}/>
            }
        )}
    </div>
    
  )
}
