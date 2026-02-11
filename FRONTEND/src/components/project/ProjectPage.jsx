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
        img:['/images/keeper/1.png','/images/keeper/2.png','/images/keeper/3.png'],
        technologies :['AWS','RDS','EC2','S3 Bucket','React','Express', 'postgres', 'Node'],
        features:[
            'Successfully deployed a full-stack Note-Taking application to AWS. Engineered a robust backend on EC2, implemented persistent data storage via RDS, and optimized asset delivery using S3 Buckets. This setup ensures the application is production-ready, scalable, and follows cloud security best practices.',
            
            'Create: A top input area with "Title" and "Take a note..." fields, triggered by an "Add" button.',
            'Read: Notes displayed as cards with a title and content body.',
            'Update (Status): A "Completed" button that applies a strike-through effect to the text (as seen on the "Feb 10, 2026" note).',
            'Edit Trigger: An edit icon (pencil) in the top-right corner of each note card, which is the perfect hook for your modal.',
            
            ],
        link: 'http://aws-keeper-frontend.s3-website-ap-southeast-1.amazonaws.com',
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
