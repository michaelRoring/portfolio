export default function About() {
  const aboutMe = `After a decade in e-commerce, branding, and digital marketing, I rediscovered my passion for code and pivoted to software engineering. My journey included running my own business and driving successful marketing campaigns that achieved significant revenue targets.
  
  In 2023, I embraced transformation by completing Hacktiv8's Fullstack JavaScript program, building upon my IT bachelor's foundation. The transition felt natural—coding became my canvas where logic meets creativity.

I approach website development with both strategic thinking and technical precision, drawing on my unique background in business and technology. Currently, I'm immersing myself in blockchain development, as I believe these decentralized systems will shape the future of technology and finance.

I've found my home in web development, where each project offers a new opportunity to blend artistry with functionality—especially at the intersection of traditional web and emerging blockchain technologies.`;

  return (
    <>
      <div className="mt-6">
        <h1 className="text-xl font-bold">About me</h1>
        <div className="mt-2 whitespace-pre-line">{aboutMe}</div>
      </div>
    </>
  );
}
