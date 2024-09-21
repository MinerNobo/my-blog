import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';
import { siteConfig } from '@/config/site';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Me',
  description: 'Information about me',
};

export default async function AboutPage() {
  return (
    <div className='container max-w-6xl py-6 lg:py-10'>
      <div className='flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8'>
        <div className='flex-1 space-x-4'>
          <h1 className='inline-block font-black text-4xl lg:text-5xl'>
            About Me
          </h1>
        </div>
      </div>
      <hr className='my-8' />
      <div className='flex flex-col md:flex-row gap-8 items-center md:items-start'>
        <div className='min-w-48 max-w-48 flex flex-col gap-2'>
          <Avatar className='h-48 w-48'>
            <AvatarImage src='/avatar.jpg' alt={siteConfig.author} />
            <AvatarFallback>JC</AvatarFallback>
          </Avatar>
          <h2 className='text-2xl font-bold text-center break-words'>
            {siteConfig.author}
          </h2>
          <p className='text-muted-foreground text-center break-words'>
            Software Developer
          </p>
        </div>
        <p className='text-muted-foreground text-lg py-4'>
          {`Hey everyone, I'm Moruka. I'm currently an undergraduate
          majoring in Computer Science, and starting in December 2024,
          I'll be working as a junior JavaScript engineer. I have a
          solid understanding of HTML, CSS, JavaScript, and experience
          with frameworks. My goal is to improve my coding skills and
          secure a job in the field, so I'll be writing blogs to
          document my growth. The content will focus primarily on
          frontend technologies and Node.js. I hope you enjoy the
          content and find it helpful!`}
        </p>
      </div>
    </div>
  );
}
