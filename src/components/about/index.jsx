import React from 'react';
import clsx from 'clsx';

const ItemLayout = ({ children, className }) => {
  return <div className={clsx("custom-bg-alt p-8 rounded-xl flex items-center justify-center space-y-8", className)}>
    {children}
  </div>
}

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-8 w-full">
        <ItemLayout className={"col-span-8 row-span-2 flex-col items-start"}>
          <h1 className="text-3xl text-left w-full capitalize">
            Campaigner for Technology
          </h1>
          <p className="font-light">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae eaque cumque ea quam, itaque reiciendis sequi. Error laudantium, explicabo porro esse libero inventore, voluptatem aut repudiandae, vero fuga magnam ipsa.
          </p>
        </ItemLayout>
        <ItemLayout className={"col-span-4 text-accent"}>
          <p className="font-semibold w-full text-left text-5xl">
            100's <sub className="font-semibold text-base">of students taught</sub>
          </p>

        </ItemLayout><ItemLayout className={"col-span-4 text-accent"}>
          <p className="font-semibold w-full text-left text-5xl">
            3+ <sub className="font-semibold text-base">yrs of coding experience</sub>
            <br />
            20+ <sub className="font-semibold text-base">yrs of film experience</sub>
          </p>
        </ItemLayout>

        <ItemLayout className={"col-span-4 !p-0"}>
          <img className="w-full h-auto" src="https://github-readme-stats.vercel.app/api/top-langs/?username=lujansolo&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false" alt="Lujan Solo's Github Stats" loading="lazy" />
        </ItemLayout>

        <ItemLayout className={"col-span-8 !p-0"}>
          <img className="w-full h-auto" src="https://github-readme-stats.vercel.app/api?username=lujansolo&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false" alt="Lujan Solo's Github Stats" loading="lazy" />
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img className="w-full h-auto" src="https://skillicons.dev/icons?i=js,html,css,react,ts,ae,apple,au,bootstrap,codepen,discord,express,figma,firebase,git,github,gitlab,gmail,graphql,heroku,ai,instagram,jest,jquery,linkedin,md,mongodb,mysql,netlify,nextjs,nodejs,notion,npm,ps,postgres,pr,pycharm,py,spring,sqlite,stackoverflow,supabase,sequelize,tailwind,threejs,twitter,vercel,vite,vitest,vscode,windows" alt="Lujan Solo's Github Stats" loading="lazy" />
        </ItemLayout>

        <ItemLayout className={"col-span-6 !p-0"}>
          <img className="w-full h-auto" src="https://github-readme-streak-stats.herokuapp.com?user=Lujansolo&theme=javascript-dark&hide_border=true&type=png&ring=FEFE5B&background=EB545400&currStreakLabel=FEFE5B" alt="LujanSolo's GitHub Streak" loading="lazy" />
        </ItemLayout>

        <ItemLayout className={"col-span-6 !p-0"}>
          <img className="w-full h-auto" src="https://github-readme-stats.vercel.app/api/pin/?username=lujansolo&repo=employee-tracker&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2" alt="Lujan Solo's Github Stats" loading="lazy" />
        </ItemLayout>

      </div>
    </section>
  )
}

export default AboutDetails;